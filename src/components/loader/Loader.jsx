import React from "react";

import { FadeLoader } from "react-spinners";

import styles from "./Loader.module.scss";

const Loader = ({ basic }) => {
  if (basic) {
    return (
      <div className={styles.basicWrapper}>
        <FadeLoader color="grey" speedMultiplier={0.75} />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <FadeLoader color="grey" speedMultiplier={0.75} />
      </div>
    </div>
  );
};

export default Loader;
