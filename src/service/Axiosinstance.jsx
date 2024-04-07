import axios from "axios"

const API_URL = process.env.REACT_APP_API_ENDPOINT

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    }
})
