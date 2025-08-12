"use client";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProducts,
  selectMaxPrice,
  selectMinPrice,
} from "@/redux/slice/productSlice";
import { FILTER_BY_CATEGORY, FILTER_BY } from "@/redux/slice/filterSlice";
import styles from "./ProductFilter.module.scss";
import priceFormat from "@/utils/priceFormat";
import Button from "@/components/button/Button";

const ProductFilter = () => {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [price, setPrice] = useState(10000);
  const [search, setSearch] = useState("");

  const products = useSelector(selectProducts);
  const maxPrice = useSelector(selectMaxPrice);
  const minPrice = useSelector(selectMinPrice);
  const dispatch = useDispatch();

  const allCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filterCategories = (cat) => {
    setCategory(cat);
    dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
  };

  const allBrands = [
    "All",
    ...new Set(products.map((product) => product.brand)),
  ];

  useEffect(() => {
    dispatch(FILTER_BY({ products, brand, price, category, search }));
  }, [dispatch, products, brand, price, category, search]);

  const clearFilters = () => {
    setCategory("All");
    setBrand("All");
    setPrice(maxPrice);
    setSearch("");
  };

  return (
    <div className={styles.filter}>
      <h4>카테고리</h4>
      <div className={styles.category}>
        {allCategories.map((cat, index) => (
          <button
            key={cat}
            type="button"
            className={category === cat ? styles.active : ""}
            onClick={() => filterCategories(cat)}
          >
            &#8250; {cat}
          </button>
        ))}
      </div>

      <h4>브랜드</h4>
      <div className={styles.brand}>
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          {allBrands.map((brand, index) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <h4>가격</h4>
      <div className={styles.price}>
        <p>{priceFormat(+price)}원</p>
        <div>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      <h4>검색</h4>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <br />
      <Button onClick={clearFilters}>필터 초기화</Button>
    </div>
  );
};

export default ProductFilter;
