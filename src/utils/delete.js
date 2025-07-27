import { ref, remove } from "firebase/database";
import { db } from "../data/firebase";

export const deleteTask = (id) => {
  const todosDbRef = ref(db, `todos/${id}`);

  remove(todosDbRef)
    .then(() => {
      console.log(`Задача удалена${id}`);
    })
    .catch(() => console.error("error"));
};
