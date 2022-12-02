import React from 'react'

import IndividualBook from './IndividualBook';
import './books.css';
import books from './bookData/bookData';

const Books = () => {
  return (
    <div className="books-container">
      <div className="books-overlay">
        <div className="books-inner">
      
      
      {books.map((book, index) => {

        return <IndividualBook book={book}/>
      })}
    </div>
    </div>
    </div>
  )
}

export default Books