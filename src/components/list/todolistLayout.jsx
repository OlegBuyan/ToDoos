import styles from "./todolist.module.css";
import { Button } from "../shared/components";

export const TodolistLayout = ({
  filteredList,
  onClick,
  callForm,
  isLoading,
}) => {
  return (
    <ul className={styles.list}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        filteredList.map(({ id, title }) => (
          <li className={styles.item} key={id}>
            {title}
            <div>
              <Button
                className={styles.green}
                onClick={() => callForm(id, title)}
              >
                {"Изменить"}
              </Button>
              <Button className={styles.red} onClick={() => onClick(id)}>
                {"Удалить"}
              </Button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};
