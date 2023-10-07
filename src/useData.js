import { useState } from "react";
import { db } from "./firebase";
import { useEffect } from "react";
import { getDocs, collection, query, orderBy } from "firebase/firestore";

const useData = () => {
  const [blogList, setBlogList] = useState([]);
  const blogsCollectionRef = collection(db, "blogs");
  const orderedQuery = query(blogsCollectionRef, orderBy("time", "desc"));

  useEffect(() => {
    const getBlogList = async () => {
      try {
        const data = await getDocs(orderedQuery);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBlogList(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getBlogList();
  }, []);

  return ( blogList );
};

export default useData;
