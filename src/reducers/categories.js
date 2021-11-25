import * as c from "../constants/actionTypes";

export default (categories = [], action) => {
  switch (action.type) {
    case c.GET_CATEGORIES:
      return action.payload?.result?.items;
    case c.CREATE_CATEGORY:
      return [...categories, action.payload];

    default:
      return categories;
  }
};
