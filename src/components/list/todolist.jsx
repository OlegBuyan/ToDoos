import { TodolistLayout } from "./todolistLayout";
import { deleteTask, editTask } from "../../utils";
import { useState } from "react";
import { EditingForm } from "./editingFrom";

export const Todolist = ({
  isLoading,

  filteredList,
}) => {
  const [editingTask, setEditingTask] = useState(null);
  const [editedTaskValue, setEditedTaskValue] = useState("");
  const [refresh, setRefresh] = useState(true);

  const onClick = (id) => {
    deleteTask(id);
  };

  const callForm = (id, title) => {
    setEditingTask(id);
    setEditedTaskValue(title);
  };

  const closeEditer = () => {
    setEditingTask(null);
  };

  const edit = () => {
    editTask(editingTask, editedTaskValue);
    closeEditer();
  };

  return (
    <>
      {
        <TodolistLayout
          isLoading={isLoading}
          filteredList={filteredList}
          onClick={onClick}
          callForm={callForm}
        />
      }
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
