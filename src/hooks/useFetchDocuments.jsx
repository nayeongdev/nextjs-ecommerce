"use client";

import { useState, useEffect, useCallback } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const useFetchDocuments = (collectionName, arg) => {
  const [documents, setDocuments] = useState([]);

  const getDocuments = useCallback(async () => {
    const q = query(
      collection(db, collectionName),
      where(arg[0], arg[1], arg[2])
    );
    const querySnapshot = await getDocs(q);
    let documentsArray = [];

    querySnapshot.forEach((doc) => {
      documentsArray.push(doc.data());
    });

    setDocuments(documentsArray);
  }, [collectionName, arg[0], arg[1], arg[2]]);
  // 배열 자체를 의존성 배열에 넣으면 매번 새로운 참조로 인식되어 무한 렌더링 발생 -> 배열의 각 요소를 개별적으로 의존성에 추가하는 것이 올바른 방법

  useEffect(() => {
    getDocuments();
  }, [getDocuments]);

  return { documents };
};

export default useFetchDocuments;
