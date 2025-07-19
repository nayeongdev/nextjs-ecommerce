"use client";
import Image from "next/image";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";

import Loader from "@/components/loader/Loader";
import Input from "@/components/input/Input";

import LogoPath from "@/assets/colorful.svg";
import styles from "../login/Auth.module.scss";
import Divider from "@/components/divider/Divider";
import Button from "@/components/button/Button";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "@/firebase/firebase";

function RegisterClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  
  const registerUser = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      toast.error("모두 입력해주세요.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return;
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);

      setIsLoading(false);

      toast.success("회원가입 성공");
      router.push("/login");
    })
    .catch((error) => {
      setIsLoading(false);

      let errorMessage = "회원가입 중 오류가 발생했습니다.";
      
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "이미 사용 중인 이메일입니다.";
          break;
        case "auth/invalid-email":
          errorMessage = "올바른 이메일 형식을 입력해주세요.";
          break;
        case "auth/weak-password":
          errorMessage = "비밀번호는 6자 이상 입력해주세요.";
          break;
        default:
          errorMessage = `${errorMessage} ${error.message}`;
      }
      
      toast.error(errorMessage);
    });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="로고 이미지" />
          </h1>

          <form className={styles.form} onSubmit={registerUser}>
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

            <Input
              password
              icon="lock"
              id="confirmPassword"
              name="confirmPassword"
              label="비밀번호 확인"
              placeholder="비밀번호 확인"
              className={styles.control}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className={styles.buttonGroup}>
              <Button type="submit" width="100%">
                회원가입
              </Button>
              <Divider />
              <Button href="/login" width="100%" secondary>
                로그인
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default RegisterClient;
