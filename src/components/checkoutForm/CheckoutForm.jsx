"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from "@/redux/slice/cartSlice";
import {
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
} from "@/redux/slice/cartSlice";
import Link from "next/link";
import styles from "./CheckoutForm.module.scss";
import priceFormat from "@/utils/priceFormat";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    dispatch(CALCULATE_SUBTOTAL());
    dispatch(CALCULATE_TOTAL_QUANTITY());
  }, [dispatch, cartItems]);

  const cartTotalQuantity = useSelector(selectCartTotalQuantity);
  const cartTotalAmount = useSelector(selectCartTotalAmount);

  return (
    <div className={styles.summary}>
      <h3>주문 상품</h3>
      <div>
        {cartItems.length === 0 ? (
          <>
            <p>장바구니가 비어있습니다.</p>
            <Link href="/">홈페이지로 이동</Link>
          </>
        ) : (
          <div>
            {cartItems.map((item) => {
              const { id, name, price, cartQuantity } = item;
              return (
                <div key={id} className={styles.card}>
                  <p>
                    <b>상품: </b>
                    {name}
                  </p>
                  <p>
                    <b>개수: </b>
                    {cartQuantity}
                  </p>
                  <p>
                    <b>가격: </b>
                    {priceFormat(price)}원
                  </p>
                  <p>
                    <b>합계: </b>
                    {priceFormat(price * cartQuantity)}원
                  </p>
                </div>
              );
            })}

            <div className={styles.text}>
              <p>
                <b>총 상품 개수: </b>
                {cartTotalQuantity}개
              </p>
            </div>
            <div className={styles.text}>
              <p>
                <b>총 상품 금액: </b>
                {priceFormat(cartTotalAmount)}원
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
