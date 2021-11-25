import * as c from "../constants/actionTypes";

export default (bookmarks = [], action) => {
  switch (action.type) {
    case c.GET_BOOKMARKS:
      return action.payload?.result?.items;
    case c.CREATE_BOOKMARK:
      return [...bookmarks, action.payload];
    case c.UPDATE_BOOKMARK:
      return bookmarks?.result?.items?.map((bookmark) =>
        bookmark?.id === action.payload?.result?.id ? action.payload : bookmark
      );
    case c.DELETE_BOOKMARK:
      return bookmarks?.result?.items?.filter(
        (bookmark) => bookmark?.id !== action.payload
      );

    default:
      return bookmarks;
  }
};
