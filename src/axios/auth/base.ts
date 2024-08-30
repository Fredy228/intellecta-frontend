import axios from "axios";

const $authAPI = axios.create({
  withCredentials: true,
  baseURL: process.env.SERVER_AUTH_URL,
});

export default $authAPI;
