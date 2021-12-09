import axios from "axios";

const api = axios.create({
  baseURL: "http://homologacao3.azapfy.com.br",
});

export default api;