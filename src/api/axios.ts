import axios from "axios";

import { environment } from "src/environments/environment";

const api = axios.create({
  baseURL: environment.apiUrl,
  headers: {
    // "Ocp-Apim-Subscription-Key": environment.,
    "Content-type": "application/json",
  },
});

export default api;
