import React from 'react'
import Heading from '@/components/heading/Heading'
import styles from './CheckoutSuccess.module.scss'
import priceFormat from '@/utils/priceFormat';
import { formatTime } from '@/utils/dayjs';
import Button from '@/components/button/Button';

const CheckoutSuccess = async ({ searchParams }) => {
  const secretKey = process.env.NEXT_PUBLIC_TOSS_SECRET_KEY;
  console.log(searchParams);

  const url = `https://api.tosspayments.com/v1/payments/orders/${searchParams.orderId}`;
  const basicToken = Buffer.from(`${secretKey}:`, "utf-8").toString("base64");

  const payment = await fetch(url, {
    method: "GET",
    headers: { Authorization: `Basic ${basicToken}`, "Content-Type": "application/json" }
  }).then((response) => response.json());

  // console.log('paymentResult ===> ', payment);

  const { card, easyPay, virtualAccount, transfer } = payment;

  // 결제 방법별 정보 추출
  let paymentInfo = {};

  if (card) {
    // 카드 결제
    paymentInfo = {
      method: '카드 결제',
      number: card.number,
      amount: card.amount
    };
  } else if (easyPay) {
    // 간편결제 (카카오페이, 네이버페이 등)
    paymentInfo = {
      method: `간편결제 (${easyPay.provider})`,
      number: null,
      amount: easyPay.amount
    };
  } else if (virtualAccount) {
    // 가상계좌
    paymentInfo = {
      method: '가상계좌',
      number: virtualAccount.accountNumber,
      amount: virtualAccount.amount
    };
  } else if (transfer) {
    // 계좌이체
    paymentInfo = {
      method: '계좌이체',
      number: transfer.bank,
      amount: transfer.amount
    };
  } else {
    // 기본값 (총액 사용)
    paymentInfo = {
      method: payment.method || '기타',
      number: null,
      amount: payment.totalAmount
    };
  }

  // console.log('paymentInfo ===> ', paymentInfo);

  return (
    <section className={styles.success}>
      <Heading title="결제 성공" />
      <ul className={styles.list}>
        <li><b>결제 상품 :</b> {payment.orderName}</li>
        <li><b>주문 번호 :</b> {payment.orderId}</li>
        <li><b>결제 방법 :</b> {paymentInfo.method}</li>
        <li><b>결제 금액 :</b>
          {" "}
          {priceFormat(paymentInfo.amount)}원
          {" "}
          {paymentInfo.number && ` (${paymentInfo.number})`}</li>
        <li><b>결제 승인 날짜 :</b>
          {" "}
          {formatTime(payment.approvedAt)}
        </li>
      </ul>
      <Button href="/order-history">
        주문 상태 보기
      </Button>
    </section>
  )
}

export default CheckoutSuccess