import BlogList from "./blogs/BlogList";
import useBlogs from "../useBlogs";

const Home = () => {
  const blogs = useBlogs();
  
  return (
    <div className="home">
      {blogs ? (
        <BlogList blogs={blogs} title="All Blogs" />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
