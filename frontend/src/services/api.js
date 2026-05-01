import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const sendMessage = (data) => {
  return api.post("/chat", data);
};