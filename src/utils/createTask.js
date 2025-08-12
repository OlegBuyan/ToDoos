import { TODOOS } from "../components/shared/constant";
export const creatNewTask = (task, setRefreshTask, refreshTask) => {
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
    .then(() => {
      setRefreshTask(!refreshTask);
      console.log("Задача добавлена");
    })
    .catch((error) => console.error(error));
};
