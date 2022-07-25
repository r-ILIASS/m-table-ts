import axios from "axios";

axios.defaults.baseURL = String(import.meta.env.VITE_DB_API);

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
