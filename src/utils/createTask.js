import { ref, push } from "firebase/database";
import { db } from "../data/firebase";
export const creatNewTask = (task) => {
  const todosDbRef = ref(db, "todos");
  push(todosDbRef, {
    title: task,
    completed: false,
  })
    .then((res) => {
      console.log("Задача добавлена");
    })
    .catch(() => console.error("Ошибка"));
};
