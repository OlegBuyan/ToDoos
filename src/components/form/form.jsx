import { FormLayout } from "./formLayout";
import { useState, useEffect } from "react";
import { creatNewTask } from "../../utils/createTask";
import { find, useDebounce } from "../../utils";
export const Form = ({
  setRefreshTask,
  refreshTask,
  toDoList,
  setFilteredList,
}) => {
  const [task, setTask] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearch = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedSearch) {
      setFilteredList(find(searchValue, toDoList));
    }
  }, [debouncedSearch, searchValue]);

  const onSubmit = (event) => {
    event.preventDefault();
    creatNewTask(refreshTask, setRefreshTask, task);
    setTask("");
  };

  const sort = () => {
    const sorted = [...toDoList].sort((a, b) => a.title.localeCompare(b.title));
    return setFilteredList(sorted);
  };

  return (
    <FormLayout
      sort={sort}
      searchValue={searchValue}
      onSubmit={onSubmit}
      setSearchValue={setSearchValue}
      setTask={setTask}
      task={task}
    />
  );
};
