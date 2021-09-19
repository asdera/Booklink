import React from 'react';
import ReactDOM from 'react-dom';
import BookLink from './BookLink';



class ShelfRow extends React.Component {
  render() {
    const books = ["bookstack", "vase", "bookstack", "vase", "bookstack"];
    return (
      <div className="shelf-row">
        {books && (books.map((book, index) => {
          return (
            <BookLink 
              key={index}
              artifact={book}
            />
          )
        }))}
        <div className="bottom-shelf">
        </div>
      </div>
    )
  }
}

export default ShelfRow;