// Build a Library Manager
// ------------------------------------------------------------
// This exercise demonstrates useful array methods for working
// with a small catalog of books: map(), filter(), and reduce().

// The library catalog. Each book is represented by an object.
const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about: 'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },
  {
    title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and  innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy, financial independence, and building wealth. ',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

console.log("Books in the Library:\n");

// map() transforms each book object into a title-and-author string.
// join() combines those strings into one newline-separated list.
function getBookInformation(catalog) {
  return catalog.map(book => `${book.title} by ${book.author}`).join("\n");
}

console.log(getBookInformation(library));

console.log("\nList of book summaries:\n");

// map() extracts each book's about/summary field from the catalog.
function getBookSummaries(catalog) {
  return catalog.map((book) => book.about).join("\n");
}

console.log(getBookSummaries(library));

console.log("\nList of books by Arvid Kahl:\n");

// filter() returns a new array containing only books by the given author.
// This comparison requires the author name to match exactly.
function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}

console.log(getBooksByAuthor(library, "Arvid Kahl"));

console.log("\nList of books by James Clear:\n");
console.log(getBooksByAuthor(library, "James Clear"));

console.log("\nTotal number of pages for all library books:\n");

// reduce() accumulates each book's page count into one total.
// The initial accumulator value is 0.
function getTotalPages(catalog) {
  return catalog.reduce((acc, curr) => acc + curr.pages, 0);
}

console.log(getTotalPages(library));

// Expected total page count: 2512
