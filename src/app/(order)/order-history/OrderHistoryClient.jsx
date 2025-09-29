"use client";

import React, { useEffect } from "react";
import styles from "./OrderHistory.module.scss";
import useFetchCollection from "@/hooks/useFetchCollection";
import { useDispatch, useSelector } from "react-redux";
import { selectOrderHistory, STORE_ORDERS } from "@/redux/slice/orderSlice";
import { selectUserId } from "@/redux/slice/authSlice";
import Loader from "@/components/loader/Loader";
import Heading from "@/components/heading/Heading";
import { formatTime } from "@/utils/dayjs";
import priceFormat from "@/utils/priceFormat";
import { useRouter } from "next/navigation";

const OrderHistoryClient = () => {
  const { data, isLoading } = useFetchCollection("orders");
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(STORE_ORDERS(data));
  }, [dispatch, data]);

  const orders = useSelector(selectOrderHistory);
  const userId = useSelector(selectUserId);

  const filteredOrders = orders.filter((order) => order.userId === userId);

  const handleClick = (id) => {
    router.push(`/order-details/${id}`); // Redirect to home page
  };

  return (
    <section className={styles.order}>
      <Heading title="주문 내역" />
      {isLoading && <Loader />}
      <div className={styles.table}>
        {filteredOrders.length === 0 ? (
          <p>주문 내역이 없습니다</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>주문 날짜</th>
                <th>주문 번호</th>
                <th>주문 금액</th>
                <th>주문 상태</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => {
                const { id, orderDate, orderTime, orderAmount, orderStatus } =
                  order;

                console.log(id, orderDate, orderTime, orderAmount, orderStatus);

                return (
                  <tr key={id} onClick={() => handleClick(id)}>
                    <td>{index + 1}</td>
                    <td>
                      {formatTime(orderDate)} {orderTime}
                    </td>
                    <td>{id}</td>
                    <td>{priceFormat(orderAmount)}원</td>
                    <td>
                      <p
                        className={
                          orderStatus !== "배송 완료"
                            ? styles.pending
                            : styles.delivered
                        }
                      >
                        {orderStatus}
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default OrderHistoryClient;
