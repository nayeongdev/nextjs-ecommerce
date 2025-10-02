"use client";

import React, { useState } from "react";
import styles from "./ReviewProduct.module.scss";
import { useRouter, useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { selectUserId, selectUserName } from "@/redux/slice/authSlice";
import { addDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import Loader from "@/components/loader/Loader";
import Button from "@/components/button/Button";
import { Rating } from "react-simple-star-rating";
import useFetchDocument from "@/hooks/useFetchDocument";
import Heading from "@/components/heading/Heading";
import Image from "next/image";

const ReviewProductClient = () => {
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");

  const router = useRouter();

  const { id } = useParams();
  const userId = useSelector(selectUserId);
  const userName = useSelector(selectUserName);

  const { document: product } = useFetchDocument(
    "products",
    id ? id.toString() : ""
  );
  // console.log("product:", product, "id:", id);

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const date = today.toDateString();

    const reviewData = {
      userId,
      userName,
      productId: id,
      rate,
      review,
      reviewDate: date,
      createdAt: Timestamp.now().toDate(),
    };

    try {
      addDoc(collection(db, "reviews"), reviewData);

      router.push(`/product-details/${id}`);
    } catch (error) {
      toast.error("리뷰 작성에 실패했습니다. ", error.message);
    }
  };

  return (
    <section className={styles.review}>
      <Heading title={`리뷰 작성하기`} />
      {product === null ? (
        <Loader basic />
      ) : (
        <div className={styles.name}>
          <p>
            <b>상품평 : </b>
            {product.name}
          </p>
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={200}
              height={200}
              priority
            />
          )}
        </div>
      )}
      <div className={styles.card}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>평점</label>
          <Rating initialValue={rate} onClick={(rate) => setRate(rate)} />
          <label>상품평</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            cols={30}
            rows={10}
          ></textarea>
          <Button type="submit">상품평 등록하기</Button>
        </form>
      </div>
    </section>
  );
};

export default ReviewProductClient;
