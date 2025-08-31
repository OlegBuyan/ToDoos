import styles from "./todolist.module.css";
import { Button, Input } from "../shared/components";

export const EditingForm = ({
  closeEditer,
  edit,
  editedTaskValue,
  setEditedTaskValue,
  value = editedTaskValue,
  editingTask,
}) => {
  return (
    <>
      {editingTask && (
        <>
          <div onClick={closeEditer} className={styles.modalBackground}></div>
          <div className={styles.editForm}>
            <Input
              htmlFor={"edit"}
              type="text"
              name="edit"
              value={value}
              onChange={({ target }) => setEditedTaskValue(target.value)}
            >
              {"Внесите изменения"}
            </Input>

            <div className={styles.editForm__buttons}>
              <Button className={styles.green} onClick={edit}>
                {"Сохранить"}
              </Button>
              <Button className={styles.red} onClick={closeEditer}>
                {"Отмена"}
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
