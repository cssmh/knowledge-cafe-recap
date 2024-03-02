import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddBookmarks, handleMarkRead, handleRemove}) => {

    const [blogs, setBlogs] = useState([])

    useEffect( () => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="w-2/3">
            <h3 className="text-lg border-[1px] py-[2px] px-[4px] rounded-[5px] bg-purple-600 text-white w-[120px]">Total Blogs: {blogs.length}</h3>
            {
                blogs.map(soloBlogs => <Blog 
                    key={soloBlogs.id} 
                    getBlogs={soloBlogs}
                    handleAddBookmarks={handleAddBookmarks}
                    handleMarkRead={handleMarkRead}
                    handleRemove={handleRemove}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmarks: PropTypes.func,
    handleMarkRead: PropTypes.func,
    handleRemove: PropTypes.func
}

export default Blogs;