// eslint-disable-next-line no-unused-vars
import React from 'react';

const BlogPage = () => {

  return (
    <div className="relative mt-[80px] w-full">
      <div className="headerTitles flex flex-col items-center font-serif text-[#444]">
        <span className="headerTitleLg absolute top-[5%] text-[100px]">BLOG</span>
      </div>
      <img
        className="headerImg w-full h-[450px] object-cover"
        src="https://images.unsplash.com/uploads/141247613151541c06062/c15fb37d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
};

export default BlogPage;
