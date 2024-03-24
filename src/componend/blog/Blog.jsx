import PropTypes from 'prop-types';
import { BsBookmarkStarFill } from "react-icons/bs";

const Blog = ({blog, handaleBookmarkes  }) => {
  const {Title, Cover, Author, AuthorImg, ReadingTime, PostedDate, Hashtags}= blog;
  return (
    <div className=' mb-10'>
      
      <img className='w-full rounded-lg' src= {Cover} alt="ht" />
      <div className='flex justify-between mt-3 mb-3'>
        <div className='flex gap-4'>
          <img className='w-14' src={AuthorImg} alt="" />
          <div className=''>
            <h3 className="text-2xl font-bold">{Author} </h3>
            <p> {PostedDate} </p>
          </div>
        </div>
        <div className=' flex items-center justify-center'>
          <span>{ReadingTime} </span>
          <button onClick={()=> handaleBookmarkes (blog)} className='ml-2 text-xl text-green-600'><BsBookmarkStarFill /></button>
        </div>
      </div>
      <h2 className="text-3xl"> {Title} </h2>
      <p>
      {
        Hashtags.map((hash, idx) => <span key={idx} ><a href="">#{hash} </a></span>)
      }
      </p>
      <button>mark as red</button>
    </div>
  );
};
Blog.propTypes ={
  blog: PropTypes.object.isRequired,
  handaleBookmarkes: PropTypes.func
}
export default Blog;