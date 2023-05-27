//Hint: You can use the [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method here. 
function findAccountById(accounts, id) {
  // YOUR SOLUTION HERE

  const locatedAccount = accounts.find(account => account.id === id);
  return locatedAccount;
}
  

function sortAccountsByLastName(accounts) {
  // YOUR SOLUTION HERE
  const sortedAccount = accounts.sort((a,b) => {
    const lastNameA = a.name.last.toUpperCase();
    const lastNameB = b.name.last.toUpperCase();
    if (lastNameA < lastNameB) {
      return -1;
    }
    if(lastNameA > lastNameB){
      return 1;
    }
    return 0;
  });
  return sortedAccount;
  // Hint: You can use the [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method here. 
}

function getAccountFullNames(accounts) {
  // YOUR SOLUTION HERE
  const fullNames = accounts.map(account => `${account.name.first} ${account.name.last}`);
  return fullNames;
  // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
