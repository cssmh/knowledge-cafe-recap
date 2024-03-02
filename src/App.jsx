import { createContext, useState } from "react";
import "./App.css";
import Blogs from "./Blogs/Blogs";
import Bookmarks from "./Bookmarks/Bookmarks";
import Header from "./Header/Header";

// Prop drilling
export const YouBeauty = createContext("");
// Prop drilling ENd

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [time, setTime] = useState(0);

  // Bookmark btn get
  const handleAddBookmarks = (book) => {
    const newBookmarks = [...bookmarks, book];
    setBookmarks(newBookmarks);
  };
  // Bookmark btn get End

  // mark as read btn
  const handleMarkRead = (getTime) => {
    const newTime = time + getTime;
    setTime(newTime);
  };
  // mark as read btn end

  // remove bookmark btn
  const handleRemove = (idx) => {
    console.log(idx);
    const remaining = bookmarks.filter(
      (soloBookmark) => soloBookmark.id !== idx
    );
    setBookmarks(remaining);
  };
  // remove bookmark btn end
  return (
    <>
    {/* Thats Prop drilling */}
      <YouBeauty.Provider value="You are Beautiful!!">
        <Header></Header>
        <div className="flex mt-2 gap-4">
          <Blogs
            handleAddBookmarks={handleAddBookmarks}
            handleMarkRead={handleMarkRead}
            handleRemove={handleRemove}
          ></Blogs>
          <Bookmarks getBookmarks={bookmarks} myTime={time}></Bookmarks>
        </div>
      </YouBeauty.Provider>
    </>
  );
}

export default App;
