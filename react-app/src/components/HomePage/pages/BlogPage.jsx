// eslint-disable-next-line no-unused-vars
import React from 'react';
import BlogHeaderImg from './Blog/BlogHeaderImg';
import Blogposts from './Blog/BlogPosts';
import BlogSideBar from './Blog/BlogSideBar';


const BlogPage = () => {

  return (
    <div className="w-[1200px] flex flex-col">
    <BlogHeaderImg />
      <div className='flex gap-4 justify-between mb-2'>
      <Blogposts />
      <BlogSideBar/>
      </div>
    </div>
    
  );
};

export default BlogPage;
