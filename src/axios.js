import axios from "axios";

const API = axios.create({
    baseURL: "https://goweb10be.store/api",
});

API.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

API.interceptors.response.use(
    function (response) {
        console.log(`✨ ${response.config.url} \n>>`, response.data);
        return response.data;
    },

    function (error) {
        return Promise.reject(error);
    }
);

export default API;
