import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

const Button = ({
  type = "button",
  secondary = false,
  bgColor,
  fgColor,
  width,
  children,
  ...restProps
}) => {
  const composeClasses = classNames(
    styles.button,
    secondary ? styles.secondary : styles.primary
  );

  const style = {
    backgroundColor: bgColor || "",
    color: fgColor || "",
    width: width || "",
  };

  return (
    <button type={type} className={composeClasses} style={style} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
