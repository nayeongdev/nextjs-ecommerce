import React from "react";

const OrderDetails = ({ params, searchParams }) => {
  const { hello } = searchParams;
  const { id } = params;

  console.log("OrderDetails ID:", id)

  return <div>{id} {hello}</div>;
};

export default OrderDetails;
