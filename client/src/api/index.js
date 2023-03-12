import axios from "axios";
const API = axios.create({ baseURL: "https://stackover-clone.onrender.com" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});
export const LOGIN = (authData) => API.post("/user/login", authData);
export const SIGNUP = (authData) => API.post("/user/signup", authData);
export const POSTQUESTION = (questionData) =>
  API.post("/question/Ask", questionData);
export const GETQUESTIONS = () => API.get("/question/get");
export const DELETEQUESTION = (id) => API.delete(`/question/delete/${id}`);
export const VOTEQUESTION = (id, value, userId) =>
  API.patch(`/question/vote/${id}`, { value, userId });

export const POSTANSWER = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  API.patch(`/answer/post/${id}`, {
    noOfAnswers,
    answerBody,
    userAnswered,
    userId,
  });
export const DELETEANSWER = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const FETCHUSERS = () => API.get("/user/getAllUsers");
export const UPDATEPROFILE = (id, updateData) =>
  API.patch(`/user/updateProfile/${id}`, updateData);
