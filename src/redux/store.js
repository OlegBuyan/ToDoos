import { thunk } from "redux-thunk";
import { fetchReducer, crudReducer } from "./reducers";
import { applyMiddleware, combineReducers, createStore } from "redux";

const reducer = combineReducers({
  fetchReducer: fetchReducer,
  crudReducer: crudReducer,
});

export const store = createStore(fetchReducer, applyMiddleware(thunk));
console.log(store.getState());
