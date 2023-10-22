import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../app/store/mainPageSliced";
import { CiSearch } from "react-icons/ci";
import { RiCloseFill } from "react-icons/ri";
import styles from "./SearchUser.module.css";

export default function SearchUser() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.users.name);

  return (
    <div className={styles.sectionSearch_input}>
      <div className={styles.search_block}>
        <input
          className={styles.search_input}
          placeholder="Поиск..."
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
        />
      </div>
      {name.length > 0 ? (
        <RiCloseFill
          className={`${styles.search_icon} ${styles.close}`}
          onClick={() => dispatch(setName(""))}
        />
      ) : (
        <CiSearch className={`${styles.search_icon} ${styles.search}`} />
      )}
    </div>
  );
}
