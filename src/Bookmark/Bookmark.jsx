import PropTypes from "prop-types";
const Bookmark = ({ getBookmark }) => {
  const { title } = getBookmark;
  return (
    <div className="bg-gray-300 pb-3">
      <div className="py-[1px]">
        <h3 className="bg-[#FFF] rounded-lg text-center mx-5 py-[5px] px-2 font-semibold text-lg">
           {title}
        </h3>
      </div>
    </div>
  );
};

Bookmark.propTypes = {
  getBookmark: PropTypes.object
};

export default Bookmark;