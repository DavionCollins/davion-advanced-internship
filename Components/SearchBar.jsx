import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div>
      <div className="search-bar__wrapper">
        <figure>
          <img src={null} alt="" />
        </figure>
        <div className="search-bar">
          <input
            type="text"
            className="search-bar__input"
            placeholder="Search For Books"
          />
          <FaSearch className="search-bar__icon"/>
        </div>
      </div>
      <div className="search-bar__separator"></div>
    </div>
  );
};

export default SearchBar;
