import React from 'react';
import ReactDOM from 'react-dom';
import BookLink from './BookLink';
import ShelfRow from './ShelfRow';

class Bookshelf extends React.Component {
  render() {
    const rows = ["apple", "blueberry", "cactus"];
    return (
      <div className="bookshelf-wrapper">
        <h1>
          Book Link
        </h1>
        <div className="bookshelf">
          {rows && (rows.map((shelf, index) => {
            return (
              <ShelfRow
                key={index}
              />
            )
          }))}
        </div>
      </div>
    )
  }
}

export default Bookshelf;