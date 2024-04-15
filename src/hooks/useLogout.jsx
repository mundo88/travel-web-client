import { useNavigate } from "react-router-dom"
import useAuth from "./useAuth"
import useAxiosPrivate from "./useAxiosPrivate"

export default function useLogout() {
    const { accessToken,setCurrentUser, setAccessToken, setCSRFToken } = useAuth()
    const navigate = useNavigate()

    const axiosPrivateInstance = useAxiosPrivate()
    const logout = async () => {
        try {
            const response = await axiosPrivateInstance.get("/logout")
            setAccessToken()
            setCSRFToken()
            setCurrentUser({})
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return logout
}