"use client";
import axios from "axios";
import { FaPlayCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

const SelectedBook = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchBook() {
    const response = await axios.get(
      `https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected`,
    );
    const bookData = response.data;
    setBook(bookData);
    setLoading(false);
    console.log(bookData);
  }

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="book__wrapper">
          {book.map((book) => (
            <div className="book" key={book.id}>
              <h2 className="book-section--title">Selected just for You</h2>
              <div className="book__description">
                <div className="book__para">
                  How Constant Innovation Creates Radically Successful
                  Businesses
                </div>
                <div className="book__separator"></div>
                <div className="book__details">
                  <Link href={book.audioLink} className="book__link">
                    <img src={book.imageLink} className="book__img"></img>
                    <div className="book__info">
                      <div className="book__title selected-book__title">
                        {book.title}
                      </div>
                      <div className="book__author">{book.author}</div>
                      <div
                        className="book__playtime"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaPlayCircle className="playtime-icon" /> 3 min 23 secs
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedBook;
