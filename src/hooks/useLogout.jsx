import useAuth from "./useAuth"
import useAxiosPrivate from "./useAxiosPrivate"

export default function useLogout() {
    const { accessToken,setCurrentUser, setAccessToken, setCSRFToken } = useAuth()
    const axiosPrivateInstance = useAxiosPrivate()
    const logout = async () => {
        try {
            console.log(accessToken)
            const response = await axiosPrivateInstance.post("/logout")
            setAccessToken()
            setCSRFToken()
            setCurrentUser({})
        } catch (error) {
            console.log(error)
        }
    }

    return logout
}