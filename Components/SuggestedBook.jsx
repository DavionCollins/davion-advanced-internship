"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { GoClock } from "react-icons/go";
import { BsStarFill } from "react-icons/bs";

const SuggestedBook = () => {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    const response = await axios.get(
      `https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested`,
    );
    const booksData = response.data;
    setBooks(booksData);
    console.log(booksData);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="section__book__wrapper">
          <h2 className="book-section--title">Suggested Books</h2>
          <p className="book-section--subtitle">Browse These Books</p>
          <div className="books__wrapper">
            <div className="books">
              {books.map((book) => (
                <div className="book" key={book.id}>
                    {book.subscriptionRequired && <div className="book__pill">Premium</div>}
                  <img src={book.imageLink} className="book__img" />
                  <div className="book__title">{book.title}</div>
                  <div className="author">{book.author}</div>
                  <div className="book__subtitle">{book.subTitle}</div>
                  <div className="book__stats">
                    <div className="book__runtime">
                      <GoClock />
                      3:24
                    </div>

                    <div className="book__rating">
                      <BsStarFill />
                      {book.averageRating}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedBook;
