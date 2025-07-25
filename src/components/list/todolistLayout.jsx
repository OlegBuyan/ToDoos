import styles from "./todolist.module.css";

export const TodolistLayout = ({ filteredList, onClick, callForm }) => {
  return (
    <ul className={styles.list}>
      {filteredList.map(({ id, title }) => (
        <li className={styles.item} key={id}>
          {title}
          <div>
            <button onClick={() => callForm(id, title)}>{"Изменить"}</button>
            <button onClick={() => onClick(id)}>{"Удалить"}</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
