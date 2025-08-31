export const initialCrudState = {};

export const crudReducer = (state = initialCrudState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TODOOS_CREATE":
      return { ...state, payload };
    case "TODOOS_DELETE":
      return { ...state };
    case "TODOOS_EDIT":
      return { ...state, payload };
    default:
      return state;
  }
};
