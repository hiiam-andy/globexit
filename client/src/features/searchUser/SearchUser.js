import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../app/store/mainPageSliced";
import { CiSearch } from "react-icons/ci";
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
      <CiSearch className={styles.search_icon} />
    </div>
  );
}
