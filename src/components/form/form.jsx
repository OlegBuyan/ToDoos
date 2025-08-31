import { FormLayout } from "./formLayout";
import { useState, useEffect } from "react";
import { find, useDebounce } from "../../utils";
import { createTodoos } from "../../redux/actions";
import { useDispatch } from "react-redux";

export const Form = ({ todoos, todoosParser, setTodoosParcer }) => {
  const [task, setTask] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isSorted, setIsSorted] = useState(false);
  const debouncedSearch = useDebounce(searchValue, 500);
  const dispatch = useDispatch();

  useEffect(() => {
    if (debouncedSearch) {
      setTodoosParcer(find(searchValue, todoos));
    }
  }, [debouncedSearch, searchValue]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(createTodoos(task));
    setTask("");
  };
  useEffect(() => {
    let updatedList = [...todoos];

    if (isSorted) {
      updatedList.sort((a, b) => a.title.localeCompare(b.title));
    }

    setTodoosParcer(updatedList);
  }, [todoos, isSorted]);

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
