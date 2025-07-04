"use client";
import Image from "next/image";
import React, { useState } from "react";

import Loader from "@/components/loader/Loader";
import LogoPath from "@/assets/colorful.svg";
import { useRouter } from "next/navigation";

import styles from "./Auth.module.scss";

const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  const redirectUser = () => {
    router.push("/");
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="로고 이미지" />
          </h1>

          <form className={styles.form} onSubmit={loginUser}>
            {/* Input */}
            <div className={styles.group}>
              {/* 자동 로그인/비밀번호 수정 */}
            </div>

            <div className={styles.buttonGroup}>
              {/* Button */}

              <div>{/* Button */}</div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginClient;
