"use client";

import useFetchDocument from "@/hooks/useFetchDocument";
import { useParams } from "next/navigation";
import Loader from "@/components/loader/Loader";
import styles from "./ProductDetails.module.scss";

const ProductDetailsClient = () => {
  const { id } = useParams();

  const { document: product } = useFetchDocument("products", id);

  console.log(product);

  const addToCart = () => {};

  return (
    <section className={styles.product}>
      {product === null ? <Loader /> : <></>}
    </section>
  );
};

export default ProductDetailsClient;
