import styles from "./todolist.module.css";
import { Button } from "../shared/components";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";

export const TodolistLayout = ({ deleteItem, callForm, todoosParcer }) => {
  const loading = useSelector((state) => state.loading);

  return (
    <ul className={styles.list}>
      {loading ? (
        <div className={styles.loader}></div>
      ) : (
        todoosParcer.map((el) => (
          <li className={styles.item} key={el.id}>
            {el.title}
            <div>
              <Button className={styles.green} onClick={() => callForm(el)}>
                {"Изменить"}
              </Button>
              <Button
                className={styles.red}
                disabled={loading}
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
