import { TODOOS } from "./constant";
import { useEffect, useState } from "react";
import { List } from "./components";
function App() {
  const [toDoList, setToDoList] = useState([]);
  useEffect(() => {
    fetch(TODOOS)
      .then((response) => response.json())
      .then((data) => setToDoList(data));
  }, []);
  return (
    <>
      <List toDoList={toDoList} />
    </>
  );
}

export default App;
