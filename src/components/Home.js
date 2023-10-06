import BlogList from "./blogs/BlogList";
import useData from "../useData";

const Home = () => {
  const blogs = useData();
  
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
