import styles from "./todolist.module.css";
import { Button } from "../shared/components";
import { store } from "../../redux/store";

export const TodolistLayout = ({
  deleteItem,
  callForm,
  isLoading,
  todoosParser,
  loading,
}) => {
  return (
    <ul className={styles.list}>
      {loading ? (
        <div className={styles.loader}></div>
      ) : (
        todoosParser.map((el) => (
          <li className={styles.item} key={el.id}>
            {el.title}
            <div>
              <Button className={styles.green} onClick={() => callForm(el)}>
                {"Изменить"}
              </Button>
              <Button
                className={styles.red}
                disabled={isLoading}
                onClick={() => deleteItem(el.id)}
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
