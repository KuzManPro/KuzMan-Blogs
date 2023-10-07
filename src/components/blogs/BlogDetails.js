import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase";

const BlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const data = params.get('id');

    const fetchData = async () => {
      try {
        const blogRef = doc(db, "blogs", data);
        const blogSnap = await getDoc(blogRef);
        
        if (blogSnap.exists()) {
          setBlog(blogSnap.data());
        } else {
          console.error("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchData();
  }, [location]);


  return (
    <div className="blog-details">
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
