"use client";

import React from "react";
import styles from "./ProductItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import priceFormat from "@/utils/priceFormat";
import { Rating } from 'react-simple-star-rating'
import rocketBage from '@/assets/badge-rocket.svg'

const ProductItem = ({ id, name, imageUrl, price }) => {

  const shortenText = (text, maxLength = 10) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className={styles.grid}>
      <Link href={`/product-details/${id}`}>
        <div className={styles.img}>
          <Image src={imageUrl} alt={name} width={265} height={265} />
        </div>
      </Link>

      <div className={styles.content}>
        <div className={styles.details}>
          <p>{shortenText(name)}</p>
          <em>
            <strong style={{ color: "#cb1400" }}>{priceFormat(price)}</strong>원{" "}
            <Image src={rocketBage} alt='로켓배송'></Image>
          </em>
          <div className={styles.rating}>
            <Rating readonly initialValue={4} size={16} />
            <span className={styles.ratingCount}>({3})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
