import * as api from "../api";
import * as c from "../constants/actionTypes";

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);

    dispatch({ type: c.AUTH, data });

    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};
