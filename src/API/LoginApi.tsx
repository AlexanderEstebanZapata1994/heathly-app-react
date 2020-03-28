import axios from "axios";

export const LoginApiService = (username: string | null, password: string | null) =>
  axios.post("https://localhost:44380/api/users", {
    username,
    password
  });