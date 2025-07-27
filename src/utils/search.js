export const find = (searchValue, toDoList) => {
  const findedTask = Object.values(toDoList).filter((task) => {
    return task.title.toLowerCase().startsWith(searchValue.toLowerCase());
  });
  return findedTask;
};
