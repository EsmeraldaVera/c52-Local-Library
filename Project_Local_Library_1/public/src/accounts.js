function findAccountById(accounts, id) {
  const foundAccount = accounts.find((account)=> account.id ===id)
 return foundAccount
}

function sortAccountsByLastName(accounts) {
   return foundAccount = accounts.sort((firstA, firstB) => firstA.name.last.toLowerCase() > firstB.name.last.toLowerCase() ? 1 : -1)
 ;
}

function getTotalNumberOfBorrows(account, books) {

  return results = books.reduce((acc, book) => {
    const countPerBook = book.borrows.reduce((accBorrow, borrow)=> {
      return borrow.id === account.id ? accBorrow + 1 : accBorrow
    },0)
    return acc + countPerBook
  },0)

}
   /* const accId = account.id;
    let total = 0;
    books.some(book => book.borrows.some(borrow => accId === borrow.id && total++));
    return total;
  }*/

/*
It returns an array of books and authors that represents all books _currently checked out_ by the given account. 
_Look carefully at the object below,_ as it's not just the book object; the author object is embedded inside of it.
id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
      },
      borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        },
*/

/**
EXAMPLES 

Author Object:
{
    id: 0,
    name: {
      first: "Lucia",
      last: "Moreno",
    },
}

Book Object:
  {
    id: "5f4471329627160be1e8ce92",
    title: "esse ea veniam non occaecat",
    genre: "Classics",
    authorId: 10,
    borrows: [
      {
        id: "5f446f2ed3609b719568a415",
        returned: false,
      },
    ],
  },
 */

/**
 * Returns an array of books and authors checked out by given account.
 * @param account Account object to test it's id against.
 * @param books An array of book objects.
 * @param authors An array of author objects.
 */
function getBooksPossessedByAccount(account, books, authors) {
    let books_taken = [];
    books.forEach(book=>{
      if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
        books_taken.push(book);
      }
    })
    console.log(books_taken);
    books_taken.forEach(book=>{
      let anAuthor = authors.find(person => person.id === book.authorId);
      book['author'] = anAuthor;
    })
    console.log(books_taken);
    return books_taken;
  }

 /* Loop through books
  const borrowedBooks = [];
  for (const book of books) {
    for (const borrow of book.borrows) {
      // Check returned is false and of given account
      if (!borrow.returned && account.id === borrow.id) {
        borrowedBooks.push(book);
      }
    }
  }*/

  // We now have all borrowed books from given account
  
  // Construct expected data object to be returned
  // We now have a book object that statisfies our condition
  // book.authorId
  // Loop authors to get their information
 
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
