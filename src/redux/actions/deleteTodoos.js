import { TODOOS } from "../../components/shared/constant";

export const deleteTodoos = (id) => async (dispatch) => {
  try {
    const res = await fetch(`${TODOOS}/${id}`, {
      method: "DELETE",
    });
    dispatch({ type: "TODOOS_DELETE" });
  } catch (error) {
    console.error(error);
  }
};
