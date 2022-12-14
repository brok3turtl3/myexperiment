import React from 'react'

import IndividualBook from './IndividualBook';
import './books.css';
import books from './bookData/bookData';

const Books = () => {
  return (
    <div className="books-container" style={{ backgroundImage: "url(./images/library.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
      <div className="books-overlay">
        <div className="books-inner">
      <div className="books-intro-container pt2">
        <p className='books-intro t-medium'>Welcome to my Library. One of my goals is to read 50 books throughout this year. Every book will have a few comments from me and two ratings. Rating will be what I thought about the overall quality of the book. Difficulty will be how I felt about the dryness or technical difficulty of the material matter as it is presented. These are just my opinions though! If you click on the book's picture it will bring you to it's Amazon page and you can read lots of reviews there!</p>
      </div>
      
      {books.map((book, index) => {

        return <IndividualBook book={book}/>
      })}
    </div>
    </div>
    </div>
  )
}

export default Books