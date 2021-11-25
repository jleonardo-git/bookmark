import * as api from "../api";
import * as c from "../constants/actionTypes";

export const session = () => async (dispatch) => {
  try {
    const { data } = await api.session();

    dispatch({ type: c.SESSION, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
