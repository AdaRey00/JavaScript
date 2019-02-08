'use strict';
/*1.1 Open the apps.js and start by declaring an array that contains 10 strings. These strings should be of book titles you have read (or made up) and be lowercase without spaces so that you can use these later as HTML id attributes. (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets). Add a console.log statement to output this array to console. (This is for debugging and making sure everything is in order. Delete it later when you're done :))*/

let bookTitles = [
  'the_lord_of_the_rings',
  "harry_potter_and_the_philosopher's_stone",
  'the_hobbit',
  'and_then_there_were_none',
  'the_da_vinci_code',
  'the_alchemist',
  'one-hundred-years-of-solitude',
  'lolita',
  'the-little-prince',
  'the-name-of-the-rose',
];

/*1.3 Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.*/

function generateUl() {
  let newUl = document.createElement('ul');
  for (let i = 0; i < bookTitles.length; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = bookTitles[i];
    newUl.appendChild(newLi);
  }
  return newUl;
}
generateUl();

/*1.4 Make an object (not an array!) containing information for each book. Each property of this object should be another (i.e., nested) object with the book ID you thought up in step 1.1 as a key, and at least the following properties: title, language and author.*/
let bookData = {
  the_lord_of_the_rings: {
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
    language: 'English',
    genre: 'fiction, fantasy (novel)',
    published: 1955,
  },
  harry_potter_and_the_philosopher_stone: {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J. K. Rowling',
    language: 'English',
    genre: 'fiction, fantasy (novel)',
    published: 1997,
  },
  the_hobbit: {
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien',
    language: 'English',
    genre: 'fiction, fantasy (novel)',
    published: 1937,
  },
  and_then_there_were_none: {
    title: 'And Then There Were None',
    author: 'Agatha Christie',
    language: 'English',
    genre: 'fiction, mystery (novel)',
    published: 1939,
  },
  the_da_vinci_code: {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    language: 'English',
    genre: 'fiction, mystery, thriller (novel)',
    published: 2003,
  },
  the_alchemist: {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    language: 'Portuguese',
    genre: 'fiction, fantasy (novel)',
    published: 1988,
  },
  one_hundred_years_of_solitude: {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    language: 'Spanish',
    genre: 'fiction, magic realism (novel)',
    published: 1967,
  },
  lolita: {
    title: 'Lolita',
    author: 'Vladimir Nabokov',
    language: 'English',
    genre: 'fiction, general fiction (novel)',
    published: 1955,
  },
  the_little_prince: {
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    language: 'French',
    genre: 'fiction (novel)',
    published: 1943,
  },
  the_name_of_the_rose: {
    title: 'The Name of the Rose',
    author: 'Umberto Eco',
    language: 'Italian',
    genre: 'historical novel, mystery',
    published: 1980,
  },
};

/*1.5 Now change the function from step 1.3 that you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the correct HTML elements for each piece of info, for instance, a heading for the title.*/

/*let container = document.createElement('div');
container.setAttribute('class', 'container');
for (var key in bookData) {
  let newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'main-div');
  let bookTitle = document.createElement('ul');
  let myHeader = document.createElement('h1');
  bookTitle.appendChild(myHeader);
  newDiv.appendChild(bookTitle);
  container.appendChild(newDiv);
  myHeader.innerHTML = bookData[key].title;
  let bookAuthor = document.createElement('li');
  bookTitle.appendChild(bookAuthor);
  bookAuthor.innerHTML = 'Author: ' + bookData[key].author;
  let bookGenre = document.createElement('li');
  bookTitle.appendChild(bookGenre);
  bookGenre.innerHTML = 'Genre: ' + bookData[key].genre;
  let bookLanguage = document.createElement('li');
  bookTitle.appendChild(bookLanguage);
  bookLanguage.innerHTML = 'Language: ' + bookData[key].language;
  let bookPublished = document.createElement('li');
  bookTitle.appendChild(bookPublished);
  bookPublished.innerHTML = 'First Published: ' + bookData[key].published;
}*/

/*1.7 Find and download book covers for each book and construct a new object which has as keys the book IDs again, and as value the path to the image source (e.g. { harry_potter: './img/harry_potter.jpg', ... }).*/
let bookCover = {
  the_lord_of_the_rings: {
    imageSource: 'the_lord_of_the_rings.gif',
  },
  harry_potter_and_the_philosopher_stone: {
    imageSource: 'harry_potter_and_the_philosopher_stone.jpg',
  },
  the_hobbit: {
    imageSource: 'the_hobbit.jpg',
  },
  and_then_there_were_none: {
    imageSource: 'and_then_there_were_none.jpg',
  },
  the_da_vinci_code: {
    imageSource: 'the_da_vinci_code.jpg',
  },
  the_alchemist: {
    imageSource: 'the_alchemist.jpg',
  },
  one_hundred_years_of_solitude: {
    imageSource: 'one_hundred_years_of_solitude.jpg',
  },
  lolita: {
    imageSource: 'lolita.jpg',
  },
  the_little_prince: {
    imageSource: 'the_little_prince.jpg',
  },
  the_name_of_the_rose: {
    imageSource: 'the_name_of_the_rose.jpg',
  },
};

/* 1.8 Loop over these entries (hint: Object.keys(objectName) gives you an array containing the keys). Then write a function which places an image at the corresponding li element. Remember that objects are not ordered, so you cannot guarantee that the first key is the first li element. (Hint: you could give each li item an id tag by modifying the function you made before.)*/

let container = document.createElement('div');
container.setAttribute('class', 'container');
for (var key in bookData) {
  let newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'main-div');
  let bookTitle = document.createElement('ul');
  let myHeader = document.createElement('h1');
  bookTitle.appendChild(myHeader);
  newDiv.appendChild(bookTitle);
  container.appendChild(newDiv);
  myHeader.innerHTML = bookData[key].title;
  let bookPicture = document.createElement('IMG');
  bookPicture.setAttribute('src', bookCover[key].imageSource);
  bookTitle.appendChild(bookPicture);
  let bookAuthor = document.createElement('li');
  bookTitle.appendChild(bookAuthor);
  bookAuthor.innerHTML = 'Author: ' + bookData[key].author;
  let bookGenre = document.createElement('li');
  bookTitle.appendChild(bookGenre);
  bookGenre.innerHTML = 'Genre: ' + bookData[key].genre;
  let bookLanguage = document.createElement('li');
  bookTitle.appendChild(bookLanguage);
  bookLanguage.innerHTML = 'Language: ' + bookData[key].language;
  let bookPublished = document.createElement('li');
  bookTitle.appendChild(bookPublished);
  bookPublished.innerHTML = 'First Published: ' + bookData[key].published;
}
