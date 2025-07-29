"use client";

import React, { useState } from "react";
import styles from "./AddProduct.module.scss";
import Loader from "@/components/Loader/Loader";
import Heading from "@/components/Heading/Heading";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";

const categories = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Phone" },
  { id: 5, name: "Movies & Television" },
  { id: 6, name: "Home & Kitchen" },
  { id: 7, name: "Automotive" },
  { id: 8, name: "Software" },
  { id: 9, name: "Video Games" },
  { id: 10, name: "Sports & Outdoor" },
  { id: 11, name: "Toys & Games" },
  { id: 12, name: "Industrial & Scientific" },
];

const initialState = {
  name: "",
  price: 0,
  brand: "",
  description: "",
  category: "",
  imageUrl: "",
};

const AddProductClient = () => {
  const [product, setProduct] = useState({ ...initialState });

  const [uploadProgress, setUploadProgress] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
  };

  const addProduct = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.product}>
        <Heading title="새 상품 추가하기" />
        <form onSubmit={addProduct}>
          <label htmlFor="name">상품명</label>
          <input
            type="text"
            name="name"
            required
            placeholder="상품 이름"
            value={product.name}
            onChange={(e) => handleInputChange(e)}
          />
          <div>
            {uploadProgress === 0 ? null : (
              <div className={styles.progress}>
                <div
                  className={styles["progress-bar"]}
                  style={{ width: `${uploadProgress}%` }}
                >
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <span>{`업로드 중... ${uploadProgress}%`}</span>
                  )}
                  {uploadProgress === 100 && <span>업로드 완료</span>}
                </div>
              </div>
            )}
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              placeholder="상품 이미지"
              onChange={(e) => handleImageUpload(e)}
            />

            {product.imageUrl === "" ? null : (
              <input
                type="text"
                name="imageUrl"
                disabled
                required
                placeholder="이미지 URL"
                value={product.imageUrl}
              />
            )}
          </div>
          <label htmlFor="price">상품 가격:</label>
          <input
            type="number"
            name="price"
            required
            placeholder="상품 가격"
            value={product.price}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="category">상품 카테고리:</label>
          <select
            name="category"
            required
            value={product.category}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="">--상품 카테고리 선택</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <label htmlFor="brand">상품 브랜드/회사:</label>
          <input
            type="text"
            name="brand"
            required
            placeholder="상품 브랜드/회사"
            value={product.brand}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="description">상품 설명:</label>
          <textarea
            name="description"
            required
            cols={10}
            rows={10}
            placeholder="상품 설명"
            value={product.description}
            onChange={(e) => handleInputChange(e)}
          />
          <Button type="submit">상품 추가</Button>
        </form>
      </div>
    </>
  );
};

export default AddProductClient;
