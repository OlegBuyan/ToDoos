import { useEffect, useState } from "react";
import { Todolist, Form } from "./components";
import { ref, onValue } from "firebase/database";
import { db } from "./data/firebase";
import { fireBaseParser } from "./utils";

function App() {
  const [toDoList, setToDoList] = useState({});
  const [filteredList, setFilteredList] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const todosDbRef = ref(db, "todos");

    return onValue(todosDbRef, (snapshot) => {
      const loadedTodos = snapshot.val();
      const parsedData = fireBaseParser(loadedTodos);
      setToDoList(parsedData);
      setFilteredList(parsedData);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <Form
        toDoList={toDoList}
        setToDoList={setToDoList}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
      />
      <Todolist
        isLoading={isLoading}
        filteredList={filteredList}
        toDoList={toDoList}
      />
    </>
  );
}

export default App;
