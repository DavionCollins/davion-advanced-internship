import SearchBar from "@/Components/SearchBar";
import Siderbar from "@/Components/Siderbar";
import { CiStar } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { HiMiniMicrophone } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi";
import ReadListenBtns from "@/Components/ReadListenBtns";
import Bookmark from "@/Components/Bookmark";

export default async function page({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
  );

  const book = await res.json();

  return (
    <div className="wrapper" >
      <SearchBar />
      <div className="row">
        <div className="container">
          <div className="book__inside--wrapper">
            <div className="inside__book">
              <h2 className="book__inside--title">{book.title}</h2>
              <h3 className="book__inside--author">{book.author}</h3>
              <p className="book__inside--subtitle">{book.subTitle}</p>
              <div className="separator"></div>
              <div className="book__inside--stats">
                <div className="book__inside--top">
                  <div className="book__inside--ratings">
                    <CiStar className="star__icon" /> {book.averageRating} (
                    {book.totalRating} ratings)
                  </div>
                  <div className="book__inside--type">
                    <HiMiniMicrophone className="microphone__icon" />
                    Audio & Text
                  </div>
                </div>
                <div className="book__inside--bottom">
                  <div className="book__inside--playtime">
                    <GoClock className="clock__icon"/>
                    3:24
                  </div>
                  <div className="book__inside--ideas">
                    <HiOutlineLightBulb className="idea__icon" />8 Key Ideas
                  </div>
                </div>
              </div>
              <div className="separator"></div>
              <ReadListenBtns id={id} />
              <Bookmark book={book}/>
              <div className="summary__subtitle">What's it about</div>
              <div className="summary__tags">
                <div className="summary__tag">{book.tags[0]}</div>
                <div className="summary__tag">{book.tags[1]}</div>
              </div>
              <div className="summary">
                <div className="summary--para">{book.bookDescription}</div>
                <div className="summary__subtitle">About the author</div>
                <div className="summary--para">{book.authorDescription}</div>
              </div>
            </div>
            <img
              src={book.imageLink}
              alt="book img"
              className="inside__book--img"
            />
          </div>
        </div>
      </div>
      <Siderbar />
    </div>
  );
}
