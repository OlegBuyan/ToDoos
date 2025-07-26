export const find = (searchValue, toDoList) => {
  const findedTask = toDoList.filter((task) => {
    return task.title.toLowerCase().startsWith(searchValue.toLowerCase());
  });
  return findedTask;
};
