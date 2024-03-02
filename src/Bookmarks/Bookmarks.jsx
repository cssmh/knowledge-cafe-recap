import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ getBookmarks, myTime }) => {
  console.log(getBookmarks);
  return (
    <div className="w-1/3">
      <div>
        <p className="py-[14px] text-center bg-purple-600 text-white rounded-md mb-4 font-semibold text-2xl">
          Spent time on read: {myTime}
        </p>
      </div>
      <h2 className="text-2xl font-semibold bg-gray-300 py-3 pl-5 text-blue-900">
        Bookmarks Blogs: {getBookmarks.length}
      </h2>
      {getBookmarks.map((book, idx) => (
        <Bookmark 
        key={idx} 
        getBookmark={book}
        ></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  getBookmarks: PropTypes.array,
  myTime: PropTypes.number
};

export default Bookmarks;