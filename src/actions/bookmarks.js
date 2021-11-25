import * as api from "../api";
import * as c from "../constants/actionTypes";

export const getBookmarks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBookmarks();

    dispatch({ type: c.GET_BOOKMARKS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createBookmark = (bookmark) => async (dispatch) => {
  try {
    const { data } = await api.createBookmark(bookmark);

    dispatch({ type: c.CREATE_BOOKMARK, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateBookmark = (id, bookmark) => async (dispatch) => {
  try {
    const { data } = await api.updateBookmark(id, bookmark);

    dispatch({ type: c.UPDATE_BOOKMARK, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBookmark = (id) => async (dispatch) => {
  try {
    await api.deleteBookmark(id);

    dispatch({ type: c.DELETE_BOOKMARK, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
