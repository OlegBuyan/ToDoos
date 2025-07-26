import { TODOOS } from "./components/shared/constant";
import { useEffect, useState } from "react";
import { Todolist, Form } from "./components";
function App() {
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
      <Todolist
        isLoading={isLoading}
        filteredList={filteredList}
        toDoList={toDoList}
        setRefreshTask={setRefreshTask}
        refreshTask={refreshTask}
      />
    </>
  );
}

export default App;
