import  axios  from "axios"
import { baseUrl as ourBaseUrl } from "./Api"
import Cookie from "cookie-universal"
const cookie = new Cookie()
export const TOKEN = cookie.get('Bearer')
export const Axios = axios.create({
    baseURL: ourBaseUrl,
    headers:{
        Authorization: "Bearer " + TOKEN
    }
})
