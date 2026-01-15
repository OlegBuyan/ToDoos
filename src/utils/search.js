export const find = (searchValue, toDoList) => {
  const findedTask = Object.values(toDoList).filter((task) => {
    return task.title.toLowerCase().includes(searchValue.toLowerCase());
  });
  return findedTask;
};
