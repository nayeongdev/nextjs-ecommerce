"use client";
import React from "react";
import styles from "./OrderDetails.module.scss";
import { useParams } from "next/navigation";
import useFetchDocument from "@/hooks/useFetchDocument";
import Heading from "@/components/heading/Heading";
import Loader from "@/components/loader/Loader";
import priceFormat from "@/utils/priceFormat";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const OrderDetailsClient = () => {
  const { id } = useParams();

  const { document: order } = useFetchDocument("orders", id);

  const router = useRouter();
  const handleClick = () => {
    router.push(`/review-product/${id}`);
  };

  return (
    <section className={styles.table}>
      <Heading title="주문 상세 정보" />
      {order === null ? (
        <Loader />
      ) : (
        <div className={styles.details}>
          <ul>
            <li>
              <b>주문 아이디:</b> {order.id}
            </li>
            <li>
              <b>주문 가격:</b> {order.orderAmount}원
            </li>
            <li>
              <b>주문 상태:</b> {order.orderStatus}
            </li>
          </ul>

          <table>
            <thead>
              <tr>
                <th>순서</th>
                <th>상품</th>
                <th>가격</th>
                <th>개수</th>
                <th>합계</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {order.cartItems.map((item, index) => {
                const { id, name, price, cartQuantity, imageUrl } = item;

                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td className={styles.product}>
                      <Image
                        src={imageUrl}
                        alt={name}
                        width={100}
                        height={100}
                      />
                    </td>
                    <td>{priceFormat(price)}원</td>
                    <td>{cartQuantity}개</td>
                    <td>{priceFormat(price * cartQuantity)}원</td>
                    <td className={styles.icons}>
                      <Button onClick={() => handleClick}>상품 리뷰하기</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default OrderDetailsClient;
