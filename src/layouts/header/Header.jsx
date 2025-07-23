"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import InnerHeader from "@/layouts/innerHeader/InnerHeader";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName === null) {
          // 구글 로그인시 displayName 없음
          const u1 = user.email.split("@")[0];
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        // 유저 정보 리덕스 스토어에 저장
      } else {
        // 유저 정보 리덕스 스토어에서 삭제
      }
    });
  }, []);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("로그아웃 되었습니다.");
        router.push("/");
      })
      .catch((error) => {
        toast.error(`로그아웃 실패 : ${error.message}`);
      });
  };

  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/reset"
  ) {
    return null;
  }

  return (
    <header>
      <div className={styles.loginBar}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href={"/login"}>로그인</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/admin/dashboard"}>관리자</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/order-history"}>주문 목록</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"} onClick={logoutUser}>
              로그아웃
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"}>제휴 마케팅</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"}>쿠팡 플레이</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"}>고객센터</Link>
          </li>
        </ul>
      </div>
      {pathname.startsWith("/admin") ? null : <InnerHeader />}
    </header>
  );
};

export default Header;
