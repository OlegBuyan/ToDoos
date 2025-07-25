import styles from "./form.module.css";

export const FormLayout = ({
  onSubmit,
  task,
  setTask,
  setSearchValue,
  searchValue,
  sort,
}) => {
  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.container}>
          <label htmlFor="createFiled">{"Create task"}</label>
          <input
            type="text"
            name="createFiled"
            value={task}
            onChange={({ target }) => setTask(target.value)}
          />
          <button type="submit">{"Создать"}</button>
        </div>
        <div className={styles.container}>
          <label htmlFor="search">{"Search"}</label>

          <input
            value={searchValue}
            onChange={({ target }) => setSearchValue(target.value)}
            type="search"
            name="search"
          />
        </div>
        <button type="button" onClick={sort}>
          {"Сортировать"}
        </button>
      </form>
    </>
  );
};
