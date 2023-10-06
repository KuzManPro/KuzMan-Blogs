import React from "react";
import { useData } from "./useData";
import BlogList from "./BlogList";

const BlogListContainer = () => {
  const blogs = useData();

  return (
    <div>
      <BlogList blogs={blogs} title="Blog List" />
    </div>
  );
};

export default BlogListContainer;
