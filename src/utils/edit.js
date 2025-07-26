import { TODOOS } from "../components/shared/constant";
export const editTask = (
  editingTask,
  editedTaskValue,
  setRefreshTask,
  refreshTask
) => {
  fetch(`${TODOOS}/${editingTask}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      title: editedTaskValue,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Данные не получен`);
      }
      res.json();
    })
    .then(() => setRefreshTask(!refreshTask))
    .catch((error) => console.error(error));
};
