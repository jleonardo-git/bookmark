import * as c from "../constants/actionTypes";

export default (auth = null, action) => {
  switch (action.type) {
    case c.AUTH:
      localStorage.setItem("token", JSON.stringify({ ...action?.data }));
      return { ...auth, authData: action?.data, loading: false, errors: null };
    case c.SESSION:
      return action.payload?.result?.user;
    default:
      return auth;
  }
};
