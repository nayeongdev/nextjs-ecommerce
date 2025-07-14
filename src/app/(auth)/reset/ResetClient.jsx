"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Loader from "@/components/loader/Loader";
import Input from "@/components/input/Input";
import Divider from "@/components/divider/Divider";
import Button from "@/components/button/Button";
import Heading from "@/components/heading/Heading";

import LogoPath from "@/assets/colorful.svg";
import ArrowPath from "@/assets/arrow.svg";

import styles from "../login/Auth.module.scss";

const ResetClient = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
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

          <form className={styles.form} onSubmit={resetPassword}>
            <Heading
              title="비밀번호 업데이트"
              subtitle="이메일을 입력해주세요."
            />
            <Input
              email
              required
              icon="letter"
              id="email"
              name="email"
              label="이메일"
              placeholder="아이디(이메일)"
              className={styles.control}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              <Button type="submit" width="100%">
                비밀번호 업데이트
              </Button>
            </div>

            <Divider />

            <div
              className={styles.group}
              style={{ justifyContent: "end", gap: "1rem" }}
            >
              <Link href="/login">
                로그인{" "}
                <Image
                  src={ArrowPath}
                  alt="이동 아이콘"
                  className={styles.findLinkArrow}
                />
              </Link>
              <p>
                <Link href="/register">
                  회원가입{" "}
                  <Image
                    src={ArrowPath}
                    alt="이동 아이콘"
                    className={styles.findLinkArrow}
                  />
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ResetClient;
