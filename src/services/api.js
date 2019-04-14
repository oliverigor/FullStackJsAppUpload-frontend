import axios from "axios";

const api = axios.create({
  baseURL: "https://full-stack-app-upload.herokuapp.com/"
});

export default api;
