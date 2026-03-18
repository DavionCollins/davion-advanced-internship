"use client";
import { useLibrary } from "@/app/hooks/library";
import { BsBookmarkFill } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";

const Bookmark = ({ book }) => {
  const { saveBook, removeBook, isSaved } = useLibrary();
  const saved = isSaved(book.id);

  const handleToggle = () => {
    saved ? removeBook(book.id) : saveBook(book);
  };
  return (
    <div className="bookmark" onClick={() => handleToggle()}>
      <div className="bookmark__icon">
        {saved ? <BsBookmarkFill color="blue" /> : <CiBookmark />}
      </div>
      <div className="bookmark--text">{saved ? 'Saved to My Library': 'Add title to My Library'}</div>
    </div>
  );
};

export default Bookmark;
