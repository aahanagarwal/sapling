import styles from "./index.module.scss";
import React from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return <header className={styles.header}>{router.pathname}</header>;
}
