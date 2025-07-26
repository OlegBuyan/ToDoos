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
    .then((response) => response.json())
    .then((response) => {
      console.log("Задача добавлена", response);
      setRefreshTask(!refreshTask);
    });
};
