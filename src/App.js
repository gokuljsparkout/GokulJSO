import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';


Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publicationDate: PropTypes.instanceOf(Date).isRequired
};
function App() {
  return (
    <div>
      <h1>My Favorite Books</h1>
      <Book title="The Great Gatsby" author="F. Scott Fitzgerald" publicationDate={new Date(1925, 3, 10)} />
      {/* <Book title="To Kill a Mockingbird" author="Harper Lee" publicationDate="1960-07-11" /> this line will cause the error */}
      <Book title="To Kill a Mockingbird" author="Harper Lee" publicationDate={new Date(1960, 7, 11)} />
      <Book title="1984" author="George Orwell" publicationDate={new Date(1949, 6, 8)} />
    </div>
  );
}

export default App;
