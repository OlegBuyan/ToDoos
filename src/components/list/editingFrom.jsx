import styles from "./todolist.module.css";

export const EditingForm = ({
  closeEditer,
  edit,
  editedTaskValue,
  setEditedTaskValue,
  value = editedTaskValue,
}) => {
  return (
    <>
      <div onClick={closeEditer} className={styles.modalBackground}></div>
      <div className={styles.editForm}>
        <label htmlFor="edit">{"Внесите изменения"}</label>
        <input
          name="edit"
          type="text"
          value={value}
          onChange={({ target }) => setEditedTaskValue(target.value)}
        />
        <div className={styles.editForm__buttons}>
          <button onClick={edit}>{"Сохранить"}</button>
          <button onClick={closeEditer}>{"Отмена"}</button>
        </div>
      </div>
    </>
  );
};
