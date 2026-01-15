import { ref, update } from "firebase/database";
import { db } from "../data/firebase";

export const editTask = (editingTask, editedTaskValue) => {
  const todosDbRef = ref(db, `todos/${editingTask}`);

  update(todosDbRef, {
    title: editedTaskValue,
  })
    .then(() => console.log("Данные обновлены"))
    .catch(() => console.error("error"));
};
