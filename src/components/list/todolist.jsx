import styles from "./todolist.module.css";

export const List = ({ toDoList }) => {
  return (
    <ol className={styles.list}>
      {toDoList.map(({ id, title }) => (
        <li className={styles.item} key={id}>
          {title}
        </li>
      ))}
    </ol>
  );
};
