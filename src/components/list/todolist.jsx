import { TodolistLayout } from "./todolistLayout";
import { useState, useEffect } from "react";
import { EditingForm } from "./editingFrom";
import { Form } from "../form/form";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoos, fetchTodoos, editTodoos } from "../../redux/actions";

export const Todolist = () => {
  const [editingTask, setEditingTask] = useState(null);
  const [editedTaskValue, setEditedTaskValue] = useState("");
  const dispatch = useDispatch();
  const todoos = useSelector((state) => state.todoos);
  const loading = useSelector((state) => state.loading);
  const [todoosParser, setTodoosParcer] = useState([]);

  useEffect(() => {
    dispatch(fetchTodoos());
    setTodoosParcer(todoos);
  }, [dispatch, todoos]);

  const deleteItem = (id) => {
    dispatch(deleteTodoos(id));
  };

  const callForm = (task) => {
    setEditingTask(task);
    setEditedTaskValue(task.title);
  };

  const closeEditer = () => {
    setEditingTask(null);
  };

  const edit = () => {
    dispatch(editTodoos(editingTask, editedTaskValue));
    closeEditer();
  };

  return (
    <>
      <Form
        todoos={todoos}
        todoosParser={todoosParser}
        setTodoosParcer={setTodoosParcer}
      />
      {
        <TodolistLayout
          loading={loading}
          todoosParser={todoosParser}
          deleteItem={deleteItem}
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
