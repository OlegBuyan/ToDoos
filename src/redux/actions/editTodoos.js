import { TODOOS } from "../../components/shared/constant";

export const editTodoos =
  (editingTask, editedTaskValue) => async (dispatch) => {
    try {
      const res = await fetch(`${TODOOS}/${editingTask.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({
          id: editingTask.id,
          title: editedTaskValue,
          completed: editingTask.completed,
        }),
      });
      if (!res.ok) throw new Error(`нет данных`);

      const data = await res.json();
      dispatch({ type: "TODOOS_EDIT", payload: data });
    } catch (error) {
      console.error(error);
    }
  };
