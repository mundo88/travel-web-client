import axios from "axios"
const API_URL = process.env.REACT_APP_API_ENDPOINT+"/api/"


export const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

export const axiosPrivateInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    timeout:10000,
    headers: {
        "Content-Type": "application/json"
    }
})