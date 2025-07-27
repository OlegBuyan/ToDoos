export const fireBaseParser = (loadedTodos) => {
  return Object.entries(loadedTodos).map(([id, data]) => ({
    id,
    ...data,
  }));
};
