import UserList from "../../entities/userList/UserList";
import styles from "./MainPage.module.css";

export default function MainPage() {
  return (
    <section className={styles.mainPage_section}>
      <div className="container">
        <UserList />
      </div>
    </section>
  );
}
