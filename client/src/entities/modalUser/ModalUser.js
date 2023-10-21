import React, { useEffect } from "react";

import styles from "./ModalUser.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser, setVisible } from "../../app/store/oneUserSliced";
import UserCard from "../userCard/UserCard";

export default function ModalUser() {
  const dispatch = useDispatch();
  const { data, visible, selectedUser } = useSelector((state) => state.oneUser);
  useEffect(() => {
    dispatch(fetchOneUser(selectedUser));
  }, [dispatch, selectedUser]);

  return (
    <div
      className={`${styles.modal} ${visible ? styles.active : ""}`}
      onClick={() => dispatch(setVisible(false))}
    >
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <UserCard
          key={data.name}
          name={data.name}
          phone={data.phone}
          email={data.email}
          hire_date={data.hire_date}
          position_name={data.position_name}
          department={data.department}
          type={"modal"}
        />
      </div>
    </div>
  );
}
