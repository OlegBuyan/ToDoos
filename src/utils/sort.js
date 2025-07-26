export const sort = () => {
  const sorted = [...toDoList].sort((a, b) => a.title.localeCompare(b.title));
  return setFilteredList(sorted);
};
