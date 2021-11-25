export default (categories = [], action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return action.payload?.result?.items;
    case "CREATE_CATEGORY":
      return [...categories, action.payload];

    default:
      return categories;
  }
};
