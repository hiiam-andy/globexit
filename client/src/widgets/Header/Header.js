import React from "react";
import { NavLink } from "react-router-dom";
import { PAGE_MAIN, PAGE_TASK } from "../../shared/constants/constants";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <NavLink to={PAGE_MAIN} className={styles.header_nav__link}>
          Главная
        </NavLink>
        <NavLink to={PAGE_TASK} className={styles.header_nav__link}>
          Задание
        </NavLink>
      </nav>
    </header>
  );
}
