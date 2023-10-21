import { useSelector } from "react-redux";

import UserCard from "../userCard/UserCard";
import SearchUser from "../../features/searchUser/SearchUser";

import styles from "./UserList.module.css";
import ModalUser from "../modalUser/ModalUser";

export default function UserList() {
  const data = useSelector((state) => state.users.data);
  return (
    <div className={styles.user_list__container}>
      <SearchUser />
      <div className={styles.user_list}>
        {data.map((el) => (
          <UserCard
            key={el.name}
            name={el.name}
            phone={el.phone}
            email={el.email}
            hire_date={el.hire_date}
            position_name={el.position_name}
            department={el.department}
          />
        ))}
      </div>
      <ModalUser />
    </div>
  );
}
