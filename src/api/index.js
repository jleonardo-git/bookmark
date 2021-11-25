import axios from "axios";

const API = axios.create({
  baseURL: "https://readlater-test.azurewebsites.net",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("token")).result.accessToken
    }`;
  }

  return req;
});
export const fetchBookmarks = () =>
  API.get("/api/services/app/Bookmark/GetAll");
export const createBookmark = (newBookmark) =>
  API.post("/api/services/app/Bookmark/Create", newBookmark);
export const updateBookmark = (id, newBookmark) =>
  API.put("/api/services/app/Bookmark/Update", { ...newBookmark, id });
export const deleteBookmark = (id) =>
  API.delete(`/api/services/app/Bookmark/Delete?Id=${id}`);

export const fetchCategories = () =>
  API.get("/api/services/app/Category/GetAll");
export const createCategory = (newCategory) =>
  API.post("/api/services/app/Category/Create", newCategory);
export const updateCategory = (id, newCategory) =>
  API.put("/api/services/app/Category/Update", { ...newCategory, id });
export const deleteCategory = (id) =>
  API.delete(`/api/services/app/Category/Delete?Id=${id}`);

export const login = (formData) =>
  API.post("/api/TokenAuth/Authenticate", formData);
export const session = () =>
  API.get("/api/services/app/Session/GetCurrentLoginInformations");
