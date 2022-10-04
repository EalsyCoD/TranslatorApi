import axios from "axios";

import { environment } from "src/environments/environment";

export const apiGet = axios.create({
  baseURL: environment.apiUrl,
  headers: {
    "Content-type": "application/json",
  },
});
export const apiPost = axios.create({
  baseURL: environment.rapidapi,
  headers: {
    "Content-type": "application/json",
  },
});
