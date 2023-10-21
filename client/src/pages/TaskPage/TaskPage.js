import React from "react";
import styles from "./TaskPage.module.css";

export default function TaskPage() {
  return (
    <section className={styles.taskPage_section}>
      <div style={{ maxWidth: "700px" }}>
        <p className={styles.task_text}>
          В данном тестовом задании для ООО Глобэкс АйТи необходимо было
          реализовать приложение для отображения карточек с информацией о
          юзерах.
        </p>
        <p className={styles.task_text}>
          На странице должен быть поиск по юзерам. При клике на карточку юзера
          выводить pop-up с дополнительной информацией о юзере. При нажатии вне
          окна и на крестие, окно должно закрываться
        </p>
        <p className={styles.task_text}>
          Список юзеров получается с бэкенда, для этого устанавливается сервер,
          предоставленный в задании. Дизайн представлен макетом в фигме
        </p>
        <p className={styles.task_text}>
          Результатом тестового задания ожидается ссылка на GitHub репозиторий,
          с деплоем результата на любой платформе
        </p>
        <p className={styles.task_text}>
          Использованные технологии:
          <ul>
            <li>язык: JavaScript</li>
            <li>фреймворк: React (create-react-app)</li>
            <li>стейт менеджер: Redux Toolkit</li>
          </ul>
        </p>
      </div>
    </section>
  );
}
