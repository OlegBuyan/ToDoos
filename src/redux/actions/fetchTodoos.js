import { TODOOS } from "../../components/shared/constant";

export const fetchTodoos = () => async (dispatch) => {
  dispatch({ type: "TODOOS_REQUEST" });
  try {
    const res = await fetch(TODOOS);
    if (!res.ok) throw new Error(`Нет данных`);
    const data = await res.json();

    dispatch({ type: "TODOOS_SUCCESS", payload: data });
  } catch (e) {
    dispatch({ type: "TODOOS_ERROR", error: e.message });
  }
};
