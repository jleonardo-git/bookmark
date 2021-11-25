import { combineReducers } from "redux";

import bookmarks from "./bookmarks";
import categories from "./categories";

export default combineReducers({
  bookmarks,
  categories,
});
