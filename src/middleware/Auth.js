import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useDispatch } from "react-redux";

export default function AuthMiddleware() {
    const dispatch = useDispatch();
    const { accessToken } = useSelector(state => state.auth)

    if (typeof window !== 'undefined' && !loading && !isAuthenticated)
        router.push('/auth/login');

    console.log(accessToken)
    const location = useLocation()
    return (accessToken ? <Outlet /> : <Navigate to="/auth/login" state={{ from: location }} replace />)

}