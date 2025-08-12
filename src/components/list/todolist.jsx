import { TodolistLayout } from "./todolistLayout";
import { deleteTask, editTask, AppContext } from "../../utils";
import { useState, useContext } from "react";
import { EditingForm } from "./editingFrom";

export const Todolist = ({ isLoading, setRefreshTask, refreshTask }) => {
  const [editingTask, setEditingTask] = useState(null);
  const [editedTaskValue, setEditedTaskValue] = useState("");
  const { filteredList } = useContext(AppContext);

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
