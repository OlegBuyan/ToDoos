import { Link } from "react-router-dom";
import styles from "./todolist.module.css";

export const TodolistLayout = ({ filteredList }) => {
  return (
    <ul className={styles.list}>
      {filteredList.map(({ id, title }) => (
        <li key={id} className={styles.item}>
          <Link to={`/${id}`} className={styles.link}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
