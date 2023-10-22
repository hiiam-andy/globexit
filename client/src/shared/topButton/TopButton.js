import React, { useEffect, useState } from "react";
import styles from "./TopButton.module.css";
export default function TopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    if (window.scrollY > 200) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };
  return (
    <>
      {visible && (
        <button className={styles.top_btn} onClick={scrollToTop}>
          <svg
            width="22"
            height="14"
            viewBox="-2 -2 22 14"
            id="arrow-up-purple"
            x="507.24"
            y="299"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.522 9.984L18 8.605 9.001 0l-9 8.59L1.446 10 9 2.632z"
              fill="#ffffff"
            />
          </svg>
        </button>
      )}
    </>
  );
}
