import { FormLayout } from "./formLayout";
import { useState, useEffect } from "react";
import { creatNewTask } from "../../utils/createTask";
import { find, useDebounce } from "../../utils";
export const Form = ({ toDoList, setFilteredList }) => {
  const [task, setTask] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  const debouncedSearch = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedSearch) {
      setFilteredList(find(searchValue, toDoList));
    }
  }, [debouncedSearch, searchValue]);

  const onSubmit = (event) => {
    event.preventDefault();
    creatNewTask(task);
    setTask("");
  };
  useEffect(() => {
    if (!toDoList) return;
    let updatedList = Object.values(toDoList);

    if (isSorted) {
      updatedList.sort((a, b) => a.title.localeCompare(b.title));
    }
    setFilteredList(updatedList);
  }, [toDoList, isSorted]);

  return (
    <FormLayout
      setIsSorted={setIsSorted}
      isSorted={isSorted}
      searchValue={searchValue}
      onSubmit={onSubmit}
      setSearchValue={setSearchValue}
      setTask={setTask}
      task={task}
    />
  );
};
