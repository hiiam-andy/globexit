import UserList from "../../entities/userList/UserList";
import TopButton from "../../shared/topButton/TopButton";
import styles from "./MainPage.module.css";

export default function MainPage() {
  return (
    <section className={styles.mainPage_section}>
      <div className="container">
        <UserList />
        <TopButton />
      </div>
    </section>
  );
}
