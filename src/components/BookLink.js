import React from 'react';
import ReactDOM from 'react-dom';

class BookLink extends React.Component {
  render() {
    return (
      <div className="book-link">
        <div className={`book-view artifact-${ this.props.artifact }`}></div>
      </div>
    )
  }
}

export default BookLink;