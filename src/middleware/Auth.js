import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"

export default function AuthMiddleware() {
    const { accessToken } = useAuth()
    console.log(accessToken)
    const location = useLocation()
    return (accessToken ? <Outlet /> : <Navigate to="/auth/login" state={{ from: location }} replace />)

}