export const find = (searchValue, todoos) => {
  const findedTask = todoos.filter((task) => {
    return task.title.toLowerCase().includes(searchValue.toLowerCase());
  });
  return findedTask;
};
