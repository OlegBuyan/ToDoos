import { TODOOS } from "../../constant";
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
    .then((res) => res.json())
    .then(() => setRefreshTask(!refreshTask));
};
