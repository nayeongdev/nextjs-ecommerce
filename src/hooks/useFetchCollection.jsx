"use client";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "@/firebase/firebase";

// Firebase Timestamp를 직렬화 가능한 형태로 변환하는 함수
const convertTimestamps = (data) => {
  if (data && typeof data === "object") {
    const converted = { ...data };

    // createdAt 필드가 Firebase Timestamp인 경우 변환
    if (
      converted.createdAt &&
      typeof converted.createdAt.toDate === "function"
    ) {
      converted.createdAt = converted.createdAt.toDate().toISOString();
    }

    // updatedAt 필드가 Firebase Timestamp인 경우 변환
    if (
      converted.updatedAt &&
      typeof converted.updatedAt.toDate === "function"
    ) {
      converted.updatedAt = converted.updatedAt.toDate().toISOString();
    }

    return converted;
  }
  return data;
};

const useFetchCollection = (collectionName) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCollection = useCallback(() => {
    setIsLoading(true);
    try {
      const docRef = collection(db, collectionName);
      const q = query(docRef, orderBy("createdAt", "desc"));

      onSnapshot(q, (snapshot) => {
        const allData = snapshot.docs.map((doc) => {
          const docData = convertTimestamps(doc.data());
          return {
            id: doc.id,
            ...docData,
          };
        });

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
