import axios from "axios";
import { useAuthenticateStore } from "@/stores/authenticate";
const auth = useAuthenticateStore();

// const axiosClient = axios.create({
//   baseURL: `http://api.adnafrica.com/api`,
// });

// const axiosClientFile = axios.create({
//   baseURL: `http://api.adnafrica.com/api`,
// });

const axiosClient = axios.create({
  baseURL: `http://api-adna.test/api`,
});

const axiosClientFile = axios.create({
  baseURL: `http://api-adna.test/api`,
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${auth.token}`;
  return config;
});

axiosClientFile.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${auth.token}`;
  config.headers.post["Content-Type"] = `multipart/form-data`;
  return config;
});

export { axiosClient, axiosClientFile };
