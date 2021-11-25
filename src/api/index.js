import axios from "axios";

const url = "https://readlater-test.azurewebsites.net";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic29wcm9hZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InNvcHJvYWRtaW5Ac29wcm8uaW8iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6Ikg3NDZGWENBSkFCQUlXS1Y0M01BUDNSRDZCU0REUFlJIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJzdWIiOiIzIiwianRpIjoiMmUzNDQzYzItNWJkNi00NzE1LTlmM2EtZGMyMmY1YWJmYTkzIiwiaWF0IjoxNjM3NzcwNDc0LCJuYmYiOjE2Mzc3NzA0NzQsImV4cCI6MTYzNzg1Njg3NCwiaXNzIjoiWmVyb0dlZWsiLCJhdWQiOiJaZXJvR2VlayJ9.GKF7IYDTIw3g7IpTeCk4ZOyhr1UoTbgNv2wBZ-kkntU";
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const bodyParameters = {
  key: "value",
};

export const fetchBookmarks = () =>
  axios.get(`${url}/api/services/app/Bookmark/GetAll`, config);
export const createBookmark = (newBookmark) =>
  axios.post(`${url}/api/services/app/Bookmark/Create`, newBookmark, config);
export const updateBookmark = (id, newBookmark) =>
  axios.put(
    `${url}/api/services/app/Bookmark/Update`,
    { ...newBookmark, id },
    config
  );
export const deleteBookmark = (id) =>
  axios.delete(`${url}/api/services/app/Bookmark/Delete?Id=${id}`, config);

export const fetchCategories = () =>
  axios.get(`${url}/api/services/app/Category/GetAll`, config);
export const createCategory = (newCategory) =>
  axios.post(`${url}/api/services/app/Category/Create`, newCategory, config);
export const updateCategory = (id, newCategory) =>
  axios.put(
    `${url}/api/services/app/Category/Update`,
    { ...newCategory, id },
    config
  );
export const deleteCategory = (id) =>
  axios.delete(`${url}/api/services/app/Category/Delete?Id=${id}`, config);
