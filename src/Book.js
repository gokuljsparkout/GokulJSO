import React from 'react';

function Book(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Author: {props.author}</p>
      <p>Publication Date: {props.publicationDate.toLocaleDateString()}</p>
    </div>
  );
}

export default Book;