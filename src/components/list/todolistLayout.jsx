import styles from "./todolist.module.css";
import { Button } from "../shared/components";
import { useContext } from "react";
import { AppContext } from "../../utils";

export const TodolistLayout = ({ onClick, callForm, isLoading }) => {
  const { filteredList } = useContext(AppContext);

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
              <Button
                className={styles.red}
                disabled={isLoading}
                onClick={() => onClick(id)}
              >
                {"Удалить"}
              </Button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};
