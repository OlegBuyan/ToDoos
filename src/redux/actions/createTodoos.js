import { TODOOS } from "../../components/shared/constant";
import { fetchTodoos } from "./fetchTodoos";

export const createTodoos = (task) => async (dispatch) => {
  try {
    const res = await fetch(TODOOS, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: task,
        completed: false,
      }),
    });
    if (!res.ok) throw new Error(`Не получилось`);
    const data = await res.json();
    dispatch({ type: "CREATE_TODOO", payload: data });
  } catch (error) {
    console.error(error);
  }
  await dispatch(fetchTodoos());
};
