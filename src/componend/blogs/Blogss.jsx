
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import { PropTypes } from 'prop-types';
const Blogss = ({handaleBookmarkes}) => {
  const [blogs, setBlog]= useState([])

  useEffect( () =>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlog(data))

  }, [])
  return (
    <div className="md:w-2/3">
      {
        blogs.map( (blogs, idx) => <Blog key={idx} handaleBookmarkes={handaleBookmarkes} blog={blogs} ></Blog> )
      }
    </div>
  );
};

Blogss.propTypes ={
  handaleBookmarkes: PropTypes.func
}

export default Blogss;