import useAuth from "../hooks/useAuth"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export default function AuthMiddleware() {
    const { accessToken } = useAuth()
    const location = useLocation()
    return (accessToken ? <Outlet /> : <Navigate to={"/login?next="+location.pathname} state={{ from: location }} replace />)

}

function AnonymousMiddleware() {
    const { accessToken } = useAuth()
    const location = useLocation()
    return (
        accessToken ? <Navigate to="/" state={{ from: location }} replace /> : <Outlet />
    )
} 
export {
    AnonymousMiddleware
}