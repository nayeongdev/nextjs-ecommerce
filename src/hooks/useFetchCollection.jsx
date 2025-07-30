"use client";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "@/firebase/firebase";

const useFetchCollection = (collectionName) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCollection = useCallback(() => {
    setIsLoading(true);
    try {
      const docRef = collection(db, collectionName);
      const q = query(docRef, orderBy("createdAt", "desc"));

      onSnapshot(q, (snapshot) => {
        const allData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("allData", allData);
        setData(allData);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    getCollection();
  }, []);

  return { data, isLoading };
};

export default useFetchCollection;
