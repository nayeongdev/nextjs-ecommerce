import React from "react";
import classNames from "classnames";
import styles from "./Divider.module.scss";

const Divider = ({
  space = 22,
  color,
  ...restProps
}) => {
  const style = {
    marginTop: space,
    marginBottom: space,
    background: color,
  };

  return (
    <div
      className={styles.line}
      style={style}
      {...restProps}
    />
  );
};

export default Divider;
