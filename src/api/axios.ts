import axios from "axios";

import { environment } from "src/environments/environment";

export const apiGet = axios.create({
  baseURL: environment.apiUrl,
  params: {
    "api-version": "3.0",
  },
  headers: {
    "Content-type": "application/json",
  },
});
export const apiPost = axios.create({
  baseURL: environment.rapidApi,
  headers: {
    "Content-type": "application/json",
    "X-RapidAPI-Key": environment.X_RapidAPI_Key,
    "X-RapidAPI-Host": environment.X_RapidAPI_Host,
  },
});
