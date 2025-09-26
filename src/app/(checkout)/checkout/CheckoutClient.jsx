"use client";
import React from "react";
import styles from "./Checkout.module.scss";
import CheckoutForm from "@/components/checkoutForm/CheckoutForm";
import Heading from "@/components/heading/Heading";
import Button from "@/components/button/Button";
import { useSelector, useDispatch } from "react-redux";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import {
  CLEAR_CART,
  selectCartItems,
  selectCartTotalAmount,
} from "@/redux/slice/cartSlice";
import { toast } from "react-toastify";
import { selectEmail, selectUserId } from "@/redux/slice/authSlice";
import { selectShippingAddress } from "@/redux/slice/checkoutSlice";
import { db } from "@/firebase/firebase";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";

const CheckoutClient = () => {
  const userId = useSelector(selectUserId);
  const cartItems = useSelector(selectCartItems);
  const shippingAddress = useSelector(selectShippingAddress);
  const userEmail = useSelector(selectEmail);
  const cartTotalAmount = useSelector(selectCartTotalAmount);

  const dispatch = useDispatch();
  const router = useRouter();

  function generateRandomString() {
    return window.btoa(Math.random().toString()).slice(0, 20);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tossPayments = await loadTossPayments(
      process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY
    );

    // customerKey를 규칙에 맞게 생성
    const customerKey = `user-${userId.replace(/[^a-zA-Z0-9\-*=.@]/g, "")}`;
    console.log("생성된 customerKey:", customerKey);

    const payment = tossPayments.payment({ customerKey });

    // toss 결제창 띄우기
    payment
      .requestPayment({
        method: "CARD",
        amount: {
          currency: "KRW",
          value: cartTotalAmount,
        },
        orderId: generateRandomString(),
        orderName: "주문",
        customerEmail: userEmail,
        customerName: userId,
      })
      .then(async function (data) {
        // 결제 성공 시 로직
        const { paymentKey, orderId, amount } = data;
        const secretKey = process.env.NEXT_PUBLIC_TOSS_SECRET_KEY;

        const url = `https://api.tosspayments.com/v1/payments/confirm`;
        const basicToken = Buffer.from(`${secretKey}:`, "utf-8").toString(
          "base64"
        );

        const confirmResponse = fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${basicToken}`,
          },
          body: JSON.stringify({
            amount: amount.value,
            orderId,
            paymentKey,
          }),
        }).then((response) => response.json());

        console.log("confirmResponse ===> ", confirmResponse);

        const today = new Date();
        const date = today.toDateString();
        const time = today.toLocaleTimeString();

        const orderData = {
          userId,
          userEmail,
          orderDate: date,
          orderTime: time,
          orderAmount: amount.value,
          orderStatus: "주문수락",
          cartItems,
          shippingAddress,
          createdAt: Timestamp.now().toDate(),
        };

        await addDoc(collection(db, "orders"), orderData);
        dispatch(CLEAR_CART());

        router.push(`/checkout-success?orderId=${orderId}`);
      })
      .catch(function (error) {
        if (error.code === "USER_CANCEL") {
          toast.error("결제가 취소되었습니다.");
        }
      });
  };

  return (
    <section>
      <div className={styles.checkout}>
        <Heading title="주문하기" />
        <form onSubmit={handleSubmit}>
          <div className={styles.card}>
            <CheckoutForm />
          </div>
          <div>
            <Button type="submit">토스를 이용해서 결제하기</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutClient;
