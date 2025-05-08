import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://103.31.39.151:9900/sms-mgmt",
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Ambil langsung dari localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
