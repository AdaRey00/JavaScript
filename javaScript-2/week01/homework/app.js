'use strict';
{
  const bookTitles = [
    'the_lord_of_the_rings',
    "harry_potter_and_the_philosopher's_stone",
    'the_hobbit',
    'and_then_there_were_none',
    'the_da_vinci_code',
    'the_alchemist',
    'one_hundred_years_of_solitude',
    'lolita',
    'the-little-prince',
    'the-name-of-the-rose',
  ];

  const bookInfo = {
    the_lord_of_the_rings: {
      title: 'The Lord of The Rings',
      author: 'J. R. R. Tolkien',
      language: 'English',
      genre: 'fiction, fantasy (novel)',
      published: 1955,
    },
    harry_potter_and_the_philosopher_stone: {
      title: "Harry Potter and The Philosopher's Stone",
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
      title: 'The Name of The Rose',
      author: 'Umberto Eco',
      language: 'Italian',
      genre: 'historical novel, mystery',
      published: 1980,
    },
  };

  const bookCover = {
    the_lord_of_the_rings: 'image/the_lord_of_the_rings.gif',
    harry_potter_and_the_philosopher_stone: 'image/harry_potter_and_the_philosopher_stone.jpg',
    the_hobbit: 'image/the_hobbit.jpg',
    and_then_there_were_none: 'image/and_then_there_were_none.jpg',
    the_da_vinci_code: 'image/the_da_vinci_code.jpg',
    the_alchemist: 'image/the_alchemist.jpg',
    one_hundred_years_of_solitude: 'image/one_hundred_years_of_solitude.jpg',
    lolita: 'image/lolita.jpg',
    the_little_prince: 'image/the_little_prince.jpg',
    the_name_of_the_rose: 'image/the_name_of_the_rose.jpg',
  };

  /*This function generates a ul with li elements for each book ID in the array using a for loop*/

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

  /*This function gets actual information and the cover of the books from the object and displays that*/

  function displayBookInfo() {
    let container = document.createElement('div');
    container.setAttribute('class', 'container');
    for (let key in bookInfo) {
      document.body.appendChild(container);
      let newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'main-div');
      let bookTitle = document.createElement('ul');
      let myHeader = document.createElement('h2');
      bookTitle.appendChild(myHeader);
      newDiv.appendChild(bookTitle);
      container.appendChild(newDiv);
      myHeader.innerHTML = bookInfo[key].title;
      let bookPicture = document.createElement('img');
      bookPicture.setAttribute('src', bookCover[key]);
      newDiv.appendChild(bookPicture);
      bookPicture.setAttribute('class', 'bookImage');
      let bookAuthor = document.createElement('li');
      bookTitle.appendChild(bookAuthor);
      bookAuthor.innerHTML = 'Author: ' + bookInfo[key].author;
      let bookGenre = document.createElement('li');
      bookTitle.appendChild(bookGenre);
      bookGenre.innerHTML = 'Genre: ' + bookInfo[key].genre;
      let bookLanguage = document.createElement('li');
      bookTitle.appendChild(bookLanguage);
      bookLanguage.innerHTML = 'Language: ' + bookInfo[key].language;
      let bookPublished = document.createElement('li');
      bookTitle.appendChild(bookPublished);
      bookPublished.innerHTML = 'First Published: ' + bookInfo[key].published;
    }
  }
  function main() {
    let h1 = document.createElement('h1');
    h1.innerText = 'Top 10 Bestseller Books';
    document.body.appendChild(h1);
    displayBookInfo();
  }

  window.addEventListener('load', main);
}
