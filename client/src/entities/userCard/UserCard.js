import React from "react";
import { useDispatch } from "react-redux";
import { GiSmartphone } from "react-icons/gi";
import { CiMail } from "react-icons/ci";
import { RiCloseFill } from "react-icons/ri";
import { setSelectedUser, setVisible } from "../../app/store/oneUserSliced";
import styles from "./UserCard.module.css";

export default function UserCard({
  name,
  phone,
  email,
  hire_date,
  position_name,
  department,
  type,
}) {
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(setSelectedUser(name));
    dispatch(setVisible(true));
  };
  const closeModal = (e) => {
    e.stopPropagation();
    dispatch(setVisible(false));
  };

  return (
    <div
      className={`${styles.card} ${type === "modal" && styles.modal}`}
      onClick={showModal}
    >
      <div className={styles.card_name}>
        {name}
        {type === "modal" && (
          <RiCloseFill
            className={styles.close}
            onClick={(e) => closeModal(e)}
          />
        )}
      </div>

      <div className={styles.card_content}>
        {type !== "modal" ? (
          <GiSmartphone className={styles.card_icon} />
        ) : (
          <span className={styles.card_heading}>Телефон: </span>
        )}
        <span className={styles.card_text}>{phone}</span>
      </div>

      <div className={styles.card_content}>
        {type !== "modal" ? (
          <CiMail className={styles.card_icon} />
        ) : (
          <span className={styles.card_heading}>Почта: </span>
        )}
        <span className={styles.card_text}>{email}</span>
      </div>
      {type === "modal" && (
        <>
          <div>
            <div className={styles.card_content}>
              <span className={styles.card_heading}>Дата приёма:</span>
              <span className={styles.card_text}>{hire_date}</span>
            </div>
            <div className={styles.card_content}>
              <span className={styles.card_heading}>Должность: </span>
              <span className={styles.card_text}>{position_name}</span>
            </div>
            <div className={styles.card_content}>
              <span className={styles.card_heading}>Подразделение: </span>
              <span className={styles.card_text}>{department}</span>{" "}
            </div>
          </div>
          <div className={`${styles.card_info} ${styles.card_content}`}>
            <span className={`${styles.card_heading}  ${styles.info}`}>
              Дополнительная информация:{" "}
            </span>
            <span className={`${styles.card_text} ${styles.info}`}>
              Excepteur occaecat occaecat aliqua et aute non. Ex ipsum deserunt
              exercitation aliquip. Sint officia nisi veniam est est officia est
              ullamco Lorem magna sunt mollit. Aliquip veniam velit non
              exercitation ex et eiusmod laboris aliquip non do. Ut do
              consectetur anim exercitation est amet mollit ad fugiat duis.
              Dolore ullamco cupidatat in id. Aute non pariatur cupidatat magna
              sint ea occaecat.
            </span>
          </div>
        </>
      )}
    </div>
  );
}
