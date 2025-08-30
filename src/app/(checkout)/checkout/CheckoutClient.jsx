"use client";
import React from "react";
import styles from "./Checkout.module.scss";
import CheckoutForm from "@/components/checkoutForm/CheckoutForm";
import Heading from "@/components/heading/Heading";
import Button from "@/components/button/Button";

const CheckoutClient = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
