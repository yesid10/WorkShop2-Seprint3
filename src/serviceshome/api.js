import axios from "axios";
//configuración inicial del axios

const API_BASE_URL = "https://backendpizza-production.up.railway.app/";

export const instanceAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
