import React from "react";
import classNames from "classnames";
import styles from "./Heading.module.scss";

const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={classNames(styles.wrapper, center && styles.center)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};

export default Heading;
