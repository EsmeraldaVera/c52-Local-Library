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
