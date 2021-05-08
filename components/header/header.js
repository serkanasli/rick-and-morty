import React from "react";
import Link from "next/link";
import Image from "next/Image";
import styles from "./header.module.css";

function Header() {
  return (
    <div className="container">
      <div className={styles["header"]}>
        <Link className={styles["header-logo"]} href="/">
          <a>
            <Image src="/img/rick-sanchez.png" height={40} width={40} />
          </a>
        </Link>
        <nav className={styles["header-nav"]}>
          <Link href="/">
            <a className={`button button-default ${styles["header-nav-link"]}`}>
              Docs
            </a>
          </Link>
          <Link href="/">
            <a className={`button button-default ${styles["header-nav-link"]}`}>
              About
            </a>
          </Link>
          <Link href="/">
            <a
              className={`button button-outline-orange ${styles["header-nav-link"]}`}
            >
              HELP US
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
