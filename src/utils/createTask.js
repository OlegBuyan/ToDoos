import { TODOOS } from "../components/shared/constant";
export const creatNewTask = (refreshTask, setRefreshTask, task) => {
  fetch(TODOOS, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      userId: 10,
      title: task,
      completed: false,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Данные не получен`);
      }
      res.json();
    })
    .then((res) => {
      console.log("Задача добавлена", res);
      setRefreshTask(!refreshTask);
    })
    .catch((error) => console.error(error));
};
