export default (bookmarks = [], action) => {
  switch (action.type) {
    case "GET_BOOKMARKS":
      return action.payload?.result?.items;
    case "CREATE_BOOKMARK":
      return [...bookmarks, action.payload];
    case "UPDATE_BOOKMARK":
      return bookmarks?.result?.items?.map((bookmark) =>
        bookmark?.id === action.payload?.result?.id ? action.payload : bookmark
      );
    case "DELETE_BOOKMARKS":
      return bookmarks?.result?.items?.filter(
        (bookmark) => bookmark?.id !== action.payload
      );

    default:
      return bookmarks;
  }
};
