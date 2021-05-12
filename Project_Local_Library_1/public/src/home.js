const { getBooksPossessedByAccount } = require("./accounts")

function getTotalBooksCount(books) {
  return books.length
}
/*function getTotalBooksCount(books) { let bookCount=0; for (book in books)bookCount++ return bookCount; }*/

function getTotalAccountsCount(accounts) {
  return accounts.map((account)=>accounts.id).length
}

function getBooksBorrowedCount(books) {
  const booksOut = books.filter (book => book.borrows[0].returned == false)
return booksOut.length
}


function getMostCommonGenres(books) {
  const genres = books.reduce((acc, book) => {
    if(!acc[book.genre]){
      acc[book.genre]=1
    }else{
      acc[book.genre]= acc[book.genre]+1
    }
    return acc
  },{})

  return Object.keys(genres)
  .reduce((acc, genre)=>{
    acc.push({
      name: genre,
      count: genres[genre]
    })
    return acc
  }, [])
  .sort ((a, b) => a.count < b.count ? 1 : -1)
  .slice (0, 5)
  
}

/*
It returns an array containing five objects or fewer that represents the most popular books in the library.
 Popularity is represented by the number of times a book has been borrowed.
Each object in the returned array has two keys:
- The `name` key which represents the title of the book.
- The `count` key which represents the number of times the book has been borrowed.
If more than five books are present, only the top five should be returned.*/

function getMostPopularBooks(books) {
 const bookList = books.map ((book) => {
   return { name: book.title, count: book.borrows.length}
 })
 const sortedBookLIst = bookList.sort((bookA, bookB) => 
 bookA.count < bookB.count? 1 : -1)
 return sortedBookLIst.slice(0, 5)
}

function _sortObjValues(obj) {
  const keys = Object.keys(obj) 
  return keys.sort ((keyA, keyB)=> {
    if (obj[keyA] > obj[keyB]) {
      return -1
    }else {
      return 0
    }
  })
}


function getMostPopularAuthors(books, authors) {
const count = books.reduce((acc, {authorId, borrows}) =>{
  if (acc[authorId]) {
    acc[authorId].push(borrows.length)
  }else {
    acc[authorId]= [borrows.length]
  }
  return acc
},{})
for (let id in count) {
  const sum = count[id].reduce((a, b) => a+b)
  count [id] = sum
}
 const sorted = _sortObjValues(count)
 return sorted
 .map ((authorId)=> {
   const {
     name: {first, last},
   } = authors.find (({id}) => id === Number(authorId))
   const name = `${first} ${last}`
   return { name, count: count [authorId] }
  })
.slice(0, 5)
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
