import axios, { AxiosInstance } from "axios";

export const Api:AxiosInstance = axios.create({
   baseURL: "http://192.168.1.15:8080/"
})