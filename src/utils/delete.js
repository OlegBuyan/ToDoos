import { TODOOS } from "../components/shared/constant";
export const deleteTask = (id, refreshTask, setRefreshTask) => {
  fetch(`${TODOOS}/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Данные не получен`);
      }
      res.json();
    })
    .then(() => {
      console.log("Задача удалена");
      setRefreshTask(!refreshTask);
    })
    .catch((error) => console.error(error));
};
