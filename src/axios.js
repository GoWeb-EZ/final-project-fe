import axios from "axios";

const API = axios.create({
    baseURL: "http://20.196.96.170:8080/api",
    // headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Credentials": true,
    //     "Access-Control-Allow-Origin": true,
    // },
    // withCredentials: true,
});

export default API;
