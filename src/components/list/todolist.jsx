import { TodolistLayout } from "./todolistLayout";
import { useState, useEffect } from "react";
import { TODOOS } from "../shared/constant";
import styles from "./todolist.module.css";
import { Form } from "../form/form";

export const Todolist = () => {
  const [toDoList, setToDoList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [refreshTask, setRefreshTask] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(TODOOS);
        if (!response.ok) throw new Error("Ошибочка");
        const data = await response.json();
        setToDoList(data);
        setFilteredList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [refreshTask]);

  return (
    <>
      <Form
        setRefreshTask={setRefreshTask}
        refreshTask={refreshTask}
        toDoList={toDoList}
        setToDoList={setToDoList}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
      />
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <TodolistLayout filteredList={filteredList} />
      )}
    </>
  );
};
