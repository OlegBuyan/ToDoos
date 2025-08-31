import styles from "./form.module.css";
import { Button, Input } from "../shared/components";

export const FormLayout = ({
  onSubmit,
  task,
  setTask,
  setSearchValue,
  searchValue,
  setIsSorted,
  isSorted,
  sorted,
}) => {
  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.container}>
          <Input
            required
            htmlFor={"createFiled"}
            placeholder={"Создать задачу"}
            type="text"
            name="createFiled"
            value={task}
            onChange={({ target }) => setTask(target.value)}
          >
            {"Создать задачу "}
          </Input>

          <Button type={"submit"}>{"Создать"}</Button>
        </div>
        <div className={styles.container}>
          <Input
            htmlFor={"search"}
            placeholder={"Найти задачу"}
            type="search"
            name="search"
            value={searchValue}
            onChange={({ target }) => setSearchValue(target.value)}
          >
            {"Найти задачу"}
          </Input>
          <Button
            className={isSorted ? styles.red : ""}
            type={"button"}
            onClick={() => setIsSorted(!isSorted)}
          >
            {isSorted ? "Сбросить сортировку" : "Сортировать"}
          </Button>
        </div>
      </form>
    </>
  );
};
