import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase";
import { useAuth } from "../auth/AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const location = useLocation();
  const user = useAuth().currentUser;
  const userId = user ? user.uid : null;
  const params = new URLSearchParams(location.search);
  const data = params.get("id");
  const history = useHistory();

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "blogs", data));
      history.push('/KuzMan-Blogs/');
      alert("Blog deleted!")
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisabledButton = () => {
    alert("Can't delete someone else's blog!");
  };

  return (
    <div className="blog-details">
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            Written by {blog.author} - {blog.time.toDate().toLocaleString()}
          </p>
          <div>{blog.body}</div>
          { userId === data ? (
            <button onClick={handleDelete}>Delete Blog</button>
          ) : (
            <button
              style={{
                backgroundColor: "gray",
              }}
              onClick={handleDisabledButton}
            >
              Delete Blog
            </button>
          )}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
