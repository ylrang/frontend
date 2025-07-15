import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { axiosInstance } from "../../api/api"
import useAuth from "../../hooks/useAuth"
import { Link } from "react-router-dom"
import { login } from "../../store/AuthAction"
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
    // const { setAccessToken, setCSRFToken } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const fromLocation = location?.state?.from?.pathname || '/'
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    
    function onEmailChange(e) {
        setEmail(e.target.value)
    }

    function onPasswordChange(e) {
        setPassword(e.target.value)
    }

    // async function onSubmitForm(e) {
    //     e.preventDefault()
    //     setLoading(true)
    //     try {
    //         const response = await axiosInstance.post('login', JSON.stringify({email, password}))
    //         setAccessToken(response?.data?.access)
    //         setCSRFToken(response.headers["x-csrftoken"])
    //         setEmail()
    //         setPassword()
    //         setLoading(false)
    //         navigate(fromLocation, { replace: true })

    //     } catch (error) {
    //         setLoading(false)
    //     }
    // }
    async function onSubmitForm(e) {
        e.preventDefault();

        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(login(email, password));
        }
    };

    if (typeof window !== 'undefined' && isAuthenticated) {
        navigate(fromLocation, { replace: true })
    }

    return(
        <section class="bg-auth">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12">
                        <div class="card auth-box">
                            <div class="row g-0">
                                <div class="col-lg-6 text-center">
                                    <div class="card-body p-4">
                                        <a href="{% url 'index'%}"></a>
                                        <div class="mt-5">
                                            <img src="/assets/images/auth/sign-in.png" alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="auth-content card-body p-5 h-100 text-white">
                                        <div class="w-100">
                                            <div class="text-center mb-4">
                                                <h5>기관 로그인</h5>
                                                <p class="text-white-70">KINS 심층처분시스템 안전규제 데이터베이스</p>
                                            </div>
                                            <form class="auth-form" onSubmit={onSubmitForm}>
                                                <div class="mb-3">
                                                    <label for="emailInput" class="form-label">Email ID</label>
                                                    <input type="email" class="form-control" id="emailInput" placeholder="Enter your email ID" required onChange={onEmailChange}/>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="passwordInput" class="form-label">Password</label>
                                                    <input type="password" class="form-control" id="passwordInput" placeholder="Enter your password" required onChange={onPasswordChange}/>
                                                </div>
                                                <div class="mb-4">
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="flexCheckDefault" />
                                                        <a href="#" class="float-end text-white">Forgot Password?</a>
                                                        <label class="form-check-label" for="flexCheckDefault">Remember me</label>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button disabled={loading} type="submit" class="btn btn-white btn-hover w-100">로그인</button>
                                                </div>
                                            </form>
                                            <div class="mt-4 text-center">
                                                <p class="mb-0">Don't have an account ? <Link to={'/auth/register'} class="fw-medium text-white text-decoration-underline"> Sign Up </Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login;