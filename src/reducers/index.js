import { combineReducers } from "redux";

import bookmarks from "./bookmarks";
import categories from "./categories";
import auth from "./auth";
import session from "./session";

export default combineReducers({
  bookmarks,
  categories,
  auth,
  session,
});
