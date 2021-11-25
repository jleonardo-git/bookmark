import * as api from "../api";
import * as c from "../constants/actionTypes";

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategories();

    dispatch({ type: c.GET_CATEGORIES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCategory = (category) => async (dispatch) => {
  try {
    const { data } = await api.createCategory(category);

    dispatch({ type: c.CREATE_CATEGORY, payload: data });
    dispatch({ type: c.GET_CATEGORIES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateCategory = (id, category) => async (dispatch) => {
  try {
    const { data } = await api.updateCategory(id, category);

    dispatch({ type: c.UPDATE_CATEGORY, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    await api.deleteCategory(id);

    dispatch({ type: c.DELETE_CATEGORY, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
