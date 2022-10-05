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
  baseURL: environment.rapidapi,
  headers: {
    "Content-type": "application/json",
    "X-RapidAPI-Key": "b823df7ae0mshc187bf2e6786d47p18a7b7jsnd315b345ae93",
    "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
  },
});
