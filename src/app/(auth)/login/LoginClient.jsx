"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Loader from "@/components/loader/Loader";
import Input from "@/components/input/Input";
import AutoSignInCheckbox from "@/components/autoSignInCheckbox/AutoSignInCheckbox";
import Divider from "@/components/divider/Divider";
import Button from "@/components/button/Button";

import LogoPath from "@/assets/colorful.svg";
import ArrowPath from "@/assets/arrow.svg";

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

  const signInWithGoogle = () => {};

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="로고 이미지" />
          </h1>

          <form className={styles.form} onSubmit={loginUser}>
            <Input
              email
              icon="letter"
              id="email"
              name="email"
              label="이메일"
              placeholder="아이디(이메일)"
              className={styles.control}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호"
              className={styles.control}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.group}>
              {/* 자동 로그인/비밀번호 수정 */}
              <AutoSignInCheckbox
                checked={isAutoLogin}
                onChange={(e) => setIsAutoLogin(e.target.checked)}
              />

              <Link href="/reset" className={styles.findLink}>
                비밀번호 재설정{" "}
                <Image
                  src={ArrowPath}
                  alt="이동 아이콘"
                  className={styles.findLinkArrow}
                />
              </Link>
            </div>

            <div className={styles.buttonGroup}>
              <Button type="submit" width="100%">
                로그인
              </Button>
              <Divider />
              <Button width="100%" secondary>
                <Link href="/register">회원가입</Link>
              </Button>
              <Divider />

              <div>
                <Button onClick={signInWithGoogle}>구글 로그인</Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginClient;
