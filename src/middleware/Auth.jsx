import useAuth from "../hooks/useAuth"
import { Navigate, Outlet, useLocation, useNavigate, useSearchParams } from "react-router-dom"

export default function AuthMiddleware() {
    const { accessToken } = useAuth()
    const location = useLocation()
    return (accessToken ? <Outlet /> : <Navigate to={"/login?next="+location.pathname} state={{ from: location }} replace />)

}

function AnonymousMiddleware() {
    const { accessToken } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const [nextParams] = useSearchParams();
    const nextLocation = nextParams.get('next')||'/' 
    return (
        accessToken ? <Navigate to={nextLocation} state={{ from: location }} replace /> : <Outlet />
    )
} 
export {
    AnonymousMiddleware
}