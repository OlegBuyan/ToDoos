import { TODOOS } from "../../constant";
export const deleteTask = (id, refreshTask, setRefreshTask) => {
  fetch(`${TODOOS}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
      console.log("Задача удалена");
      setRefreshTask(!refreshTask);
    });
};
