import { TodolistLayout } from "./todolistLayout";
import { useState, useEffect } from "react";
import { EditingForm } from "./editingFrom";
import { Form } from "../form/form";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoos, fetchTodoos, editTodoos } from "../../redux/actions";
import { store } from "../../redux/store";

export const Todolist = () => {
  const [editingTask, setEditingTask] = useState(null);
  const [editedTaskValue, setEditedTaskValue] = useState("");
  const [todoosParcer, setTodoosParcer] = useState([]);
  const dispatch = useDispatch();
  const todoos = useSelector((state) => state.todoos);
  useEffect(() => {
    dispatch(fetchTodoos());
  }, [dispatch]);

  useEffect(() => {
    setTodoosParcer(todoos);
  }, [todoos]);

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
        todoosParcer={todoosParcer}
        setTodoosParcer={setTodoosParcer}
        todoos={todoos}
      />
      {
        <TodolistLayout
          todoosParcer={todoosParcer}
          deleteItem={deleteItem}
          callForm={callForm}
        />
      }

      {
        <EditingForm
          edit={edit}
          editedTaskValue={editedTaskValue}
          setEditedTaskValue={setEditedTaskValue}
          closeEditer={closeEditer}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />
      }
    </>
  );
};
