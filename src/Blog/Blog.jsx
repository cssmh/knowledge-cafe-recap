import PropTypes from 'prop-types'
import { CiBookmark } from "react-icons/ci";
import Todo from '../Todo/Todo';
const Blog = ({getBlogs, handleAddBookmarks, handleMarkRead, handleRemove}) => {
    const {id, cover, reading_time, author, author_img, hashtags, posted_date, title} = getBlogs;
    return (
        <div className='mt-2'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between my-3'>
                <div className='flex gap-4 items-center'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <p className='text-xl font-bold'>{author}</p>
                        <p className='text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                    <Todo give={getBlogs}></Todo>
                <div>
                    <div className='flex items-center'>
                    <p className='text-[#11111199]'>{reading_time} min read</p>
                    <button onClick={()=> handleAddBookmarks(getBlogs)} className='text-2xl text-amber-600'><CiBookmark /></button>
                    </div>
                    <button onClick={()=> handleRemove(id)} className='mt-2'><div className='flex items-center bg-purple-600 rounded-lg py-[6px] px-3 text-white'>Remove <p className='text-xl'><CiBookmark /></p></div></button>
                </div>
            </div>
            <h3 className='text-3xl font-bold mb-3'>{title}</h3>
            <div className='text-[#11111199] mb-4'>
                {
                hashtags.map((hash, idx) => <span key={idx}> #{hash}</span>)
                }
            </div>
            <button onClick={()=> handleMarkRead(reading_time)} className='underline text-[#6047EC] mb-5'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    getBlogs: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func,
    handleMarkRead: PropTypes.func,
    handleRemove: PropTypes.func
}

export default Blog;