import { useParams, useNavigate } from "react-router-dom";
import { TODOOS } from "../shared/constant";
import { useEffect, useState } from "react";
import styles from "./todolist.module.css";
import { Button } from "../shared/components";
import { deleteTask, editTask } from "../../utils";
import { EditingForm } from "./editingFrom";

export const TodoItem = () => {
  const [toDo, setToDo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [editingTask, setEditingTask] = useState(null);
  const [editedTaskValue, setEditedTaskValue] = useState("");
  const [refreshTask, setRefreshTask] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${TODOOS}/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Ошибочка");
        return res.json();
      })
      .then((data) => {
        setToDo(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        navigate("/404-not-found");
      });
  }, [refreshTask]);

  const onClick = (id) => {
    deleteTask(id, refreshTask, setRefreshTask);
    backTask();
  };

  const callForm = (id, title) => {
    setEditingTask(id);
    setEditedTaskValue(title);
  };

  const closeEditer = () => {
    setEditingTask(null);
  };

  const edit = () => {
    editTask(editingTask, editedTaskValue, setRefreshTask, refreshTask);
    closeEditer();
  };
  const backTask = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={styles.backWard} onClick={backTask}>
        Назад
      </div>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <div className={styles.TodoItem}>
          {toDo.title}

          {
            <div>
              <Button
                className={styles.green}
                onClick={() => callForm(id, toDo.title)}
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
          }
        </div>
      )}
      {editingTask && (
        <EditingForm
          edit={edit}
          editedTaskValue={editedTaskValue}
          setEditedTaskValue={setEditedTaskValue}
          closeEditer={closeEditer}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />
      )}
    </>
  );
};
