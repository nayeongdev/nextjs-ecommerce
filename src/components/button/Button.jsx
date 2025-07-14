import React from "react";
import classNames from "classnames";
import Link from "next/link";
import styles from "./Button.module.scss";

const Button = ({
  type = "button",
  secondary = false,
  bgColor,
  fgColor,
  width,
  children,
  href,
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

  // href가 있으면 Link로 렌더링
  if (href) {
    return (
      <Link href={href} className={composeClasses} style={style} {...restProps}>
        {children}
      </Link>
    );
  }

  // 기본 button 렌더링
  return (
    <button type={type} className={composeClasses} style={style} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
