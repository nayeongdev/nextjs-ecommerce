"use client";

import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector } from "react-redux";
import { selectFilteredProducts } from "@/redux/slice/filterSlice";

const ProductList = () => {
  const filteredProducts = useSelector(selectFilteredProducts);

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <p>상품이 없습니다.</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
