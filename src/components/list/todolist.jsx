import { TodolistLayout } from "./todolistLayout";
import { deleteTask, editTask } from "../crud";
import { useState } from "react";
import { EditingForm } from "./editingFrom";

export const Todolist = ({
  toDoList,
  setRefreshTask,
  refreshTask,
  filteredList,
}) => {
  const [editingTask, setEditingTask] = useState(null);
  const [editedTaskValue, setEditedTaskValue] = useState("");

  const onClick = (id) => {
    deleteTask(id, refreshTask, setRefreshTask);
  };

  const callForm = (id, title) => {
    setEditingTask(id);
    setEditedTaskValue(title);
  };

  const closeEditer = () => {
    setEditingTask(null);
  };

  const edit = () => {
    editTask(editingTask, editedTaskValue, setRefreshTask, refreshTask);
    closeEditer();
  };

  return (
    <>
      <TodolistLayout
        filteredList={filteredList}
        onClick={onClick}
        callForm={callForm}
      />
      {editingTask && (
        <EditingForm
          edit={edit}
          editedTaskValue={editedTaskValue}
          setEditedTaskValue={setEditedTaskValue}
          closeEditer={closeEditer}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />
      )}
    </>
  );
};
