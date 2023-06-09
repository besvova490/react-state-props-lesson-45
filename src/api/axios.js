import baseAxios from "axios";

// helpers
import { REST_API_URL } from "./constants";


const axios = baseAxios.create({
  baseURL: REST_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Custom-Auth-Header": localStorage.getItem("token")
  }
});


export default axios;
