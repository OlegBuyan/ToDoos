export const fireBaseParser = (loadedTodos) => {
  if (!loadedTodos || typeof loadedTodos !== "object") return [];
  return Object.entries(loadedTodos).map(([id, data]) => ({
    id,
    ...data,
  }));
};
