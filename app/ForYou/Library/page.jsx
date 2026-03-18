"use client";
import { useLibrary } from "@/app/hooks/library";
import SearchBar from "@/Components/SearchBar";
import Siderbar from "@/Components/Siderbar";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";
import { GoClock } from "react-icons/go";

const page = () => {
  const { library, removeBook } = useLibrary();
  return (
    <div className="wrapper">
      <SearchBar />
      <Siderbar />
      <div className="container">
        <div className="row">
          <div className="section__book__wrapper">
            <h2 className="book-section--title">My Library</h2>
            <p className="book-section--subtitle">Saved Books</p>
            <div className="books__wrapper">
              <div className="books">
                {library.map((book) => (
                  <Link href={`/Book/${book.id}`} className="book" key={book.id}>
                    {book.subscriptionRequired && (
                      <div className="book__pill">Premium</div>
                    )}
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
