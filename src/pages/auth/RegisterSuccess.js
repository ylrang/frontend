import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { axiosInstance } from "../../api/api"
import useAuth from "../../hooks/useAuth"
import { Link } from "react-router-dom"
import { login } from "../../store/AuthAction"
import { useSelector, useDispatch } from 'react-redux';
const RegisterSuccess = () => {
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
                                                <h5>가입 신청 완료</h5>
                                                <p class="text-white-70">관리자 승인 후 회원가입이 완료됩니다.</p>
                                            </div>
                                            <a href="/" class="btn btn-white btn-hover w-100">메인화면으로 돌아가기</a>
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
export default RegisterSuccess;