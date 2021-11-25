import * as c from "../constants/actionTypes";

export default (session = [], action) => {
  switch (action.type) {
    case c.SESSION:
      return action.payload?.result?.user;
    default:
      return session;
  }
};
