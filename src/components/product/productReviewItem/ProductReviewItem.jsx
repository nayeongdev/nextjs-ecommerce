'use client';

import React from 'react';
import styles from './ProductReviewItem.module.scss';
import { Rating } from "react-simple-star-rating";
import { formatTime } from "@/utils/dayjs";

const ProductReviewItem = ({ review }) => {
  const { userName, rate, review: content, reviewDate } = review;

  return (
    <div className={styles.review}>
        <p className={styles.writer}>{userName} <span>님의 상품평</span></p>
        <Rating initialValue={rate} readonly size={20}/>
        <p className={styles.content}>{content}</p>
        <p className={styles.date}>{formatTime(reviewDate)}</p>
    </div>
  );
};

export default ProductReviewItem;
