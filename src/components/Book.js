import React from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';
import noCover from '../images/no-cover-image.png';

const Book = props => {
  const { book, books, changeShelf } = props;

  const title = book.title ? book.title : 'No title available';

  return (
    <li>
      <div className="book">
        <div className="book-top">
          {
            book.imageLinks !== undefined ?
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url( ' + book.imageLinks.thumbnail + ')' }}></div>
              : <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: noCover }}></div>
          }
          <ShelfChanger book={book} books={books} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{title}</div>
        {/* Check for authors and render each on separate line if exist*/
          book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Book;
