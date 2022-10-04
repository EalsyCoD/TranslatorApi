import axios from "axios";

import { environment } from "src/environments/environment";

export const apiGet = axios.create({
  baseURL: environment.apiUrl,
  params: { "api-version": "3.0" },
  headers: {
    "Content-type": "application/json",
  },
});
