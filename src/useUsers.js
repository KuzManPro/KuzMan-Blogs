import { useState } from "react";
import { db } from "./firebase";
import { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";

const useUsers = () => {
  const [userList, setUserList] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUserList = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserList(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getUserList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return userList;
};

export default useUsers;
