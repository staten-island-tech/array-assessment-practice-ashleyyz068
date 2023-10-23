const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];
// new test
// which books 



const genreFantasy = books.filter((books)=> books.genre.includes("fantasy")); 
genreFantasy.forEach((book)=> console.log(book.name)); 
const testMap = books.map((books) => books.authorLast);
console.log(testMap)

const arrayNew = [5,8,4,6,8];
const index = 3;
console.log(`5 is at index ${arrayNew[index]}`);


const found = arrayNew.findLastIndex((el) => el < 8); 
console.log(found); 
console.log(arrayNew[found]); 

const Dates = books.map((books)=> books.publishDate); 
const isBelowThreshold = (value) => value < 1900; 
console.log(Dates.every(isBelowThreshold)); 

const inital = 0; 
const sumOfDates = arrayNew.reduce((accmulator, currentValue) => accmulator +currentValue, inital);
console.log(sumOfDates); 

const copy = arrayNew.splice(1,3); 
console.log(copy);

const sortedBooks = books.slice().sort(); // slicing it does it one a copy

console.log(sortedBooks);


// //Array of authors and the book they wrote
// //"--- wrote --- in ---"
// const ar = books.forEach((book) => console.log(`${book.authorFirst} wrote ${book.name} in ${book.publishDate}`)); 

// //Sort books from oldest to most recent
// const justDates = books.map((book)=> book.publishDate); 
// const sortDate = justDates.sort() 
// console.log(sortDate); 
// //sort books alphabetically
// const sortedBooks = books.slice().sort((a, b) => a.publishDate - b.publishDate); // slicing it does it one a copy

// console.log(sortedBooks);

// //Find who wrote War and Peace
// const found = books.find((book)=> book.name === "War and Peace"); 
// console.log(`${found.authorFirst} ${found.authorLast}`)

// //how many books were written before 1900?
// const writtenBefore1990 = books.filter((books)=> books.publishDate < 1900); 
// console.log(writtenBefore1990)
// console.log(`${writtenBefore1990.length} were written before 1900`); 

// //was there at least one book published within the last 100 years?
// const writtenAfter1900 = books.filter((books)=> books.publishDate > 1900);
// if (writtenAfter1900.length > 1){
//   console.log("yes"); 
// }else {
//   console.log("no");
// }
// //was every book published within the last 100 years?
// const last100 = books.filter((books)=> books.publishDate >= 1900);
// console.log(last100); 
// if (last100.length===10){
//   console.log("yes every book is published within the last 100 years");
// } else {
//   console.log("no every book is not published within the last 100 years");
// }
// //print a list of books that "includes" the genre historical
// const contHistorical = books.filter((books)=> books.genre.includes('historical') === true);
// contHistorical.forEach((books)=> console.log(books.name)); // you cant put a forEach function in a console.log() 