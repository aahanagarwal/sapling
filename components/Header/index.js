import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import SaplingLight from "../../public/logo/sapling-light.png";
import SaplingHeavy from "../../public/logo/sapling-heavy.png";

export default function Header() {
  const router = useRouter();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks([
      {
        href: "/dashboard",
        label: "Dashboard",
        active: router.pathname === "/dashboard",
      },
      { href: "/field", label: "Field", active: router.pathname === "/field" },
      { href: "/drone", label: "Drone", active: router.pathname === "/drone" },
      {
        href: "/devices",
        label: "My Devices",
        active: router.pathname === "/devices",
      },
    ]);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Image
          width={78}
          height={48}
          alt="Sapling"
          onClick={() => {
            router.push("/");
          }}
          src={SaplingHeavy}
        />
      </div>

      <div className={styles.header__nav}>
        {links.map((link) => {
          return (
            <HeaderLink
              href={link.href}
              label={link.label}
              active={link.active}
            />
          );
        })}
        <UserProfile />
      </div>
    </header>
  );
}

const HeaderLink = ({ href, label, active }) => {
  console.log(href, label, active);
  return (
    <Link href={href}>
      <div
        className={`${styles.header__nav__link} ${
          active ? styles.header__nav__link__active : ""
        }`}
      >
        {label}
      </div>
    </Link>
  );
};

const UserProfile = () => {
  const router = useRouter();

  return (
    <div
      className={styles.header__nav__user}
      onClick={() => {
        router.push("/profile");
      }}
    >
      <img
        className={styles.header__nav__user__avatar}
        src="https://media.discordapp.net/attachments/866329183184748584/999274097970270278/unknown.png"
      ></img>
    </div>
  );
};
