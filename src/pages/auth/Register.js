import { useState } from "react";
import "./Register.css";
import StepOneForm from "./StepOneForm";
import StepTwoForm from "./StepTwoForm";
import FormButtons from "./FormButton";
import { Link } from "react-router-dom";
import { register } from "../../store/AuthAction";
import { useDispatch } from "react-redux";

const Register = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password2: "",
        username: "",
        company: "",
        dept: "",
    })
    const { email, password, password2, username, company, dept } = formData;
    const onFormChange = (e) => {
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(formData)

        dispatch(register(email, password, password2, username, company, dept));
    };
    const validate = () => {
        let errors = {}
        let isValid = true;
        if (!email) errors.email = "이메일(ID)을 입력하세요."
        if (!password) errors.password = "비밀번호를 입력하세요.";
        if (!username) errors.username = "이름을 입력하세요.";
        if (!company) errors.company = "소속 기관을 선택하세요.";
        }
    }
    return(
        <section class="bg-auth">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12">
                        <div class="card auth-box-plain">
                            <div class="row align-items-center">
                                <div class="col-lg-12">
                                    <div class="card-body p-5">
                                        <div class="w-100">
                                            <div class="text-center mb-4">
                                                <h5>회원가입</h5>
                                                <p class="text-white-70">KINS 심층처분시스템 안전규제 데이터베이스</p>
                                            </div>
                                            <form method="post" class="auth-form dirty-check" onSubmit={onSubmitForm}>
                                                <StepTwoForm email={email} password={password} password2={password2} username={username} company={company} dept={dept} onChange={onFormChange}/>
                                                <div class="mt-5 text-end">
                                                    <button class="btn btn-primary btn-hover mt-2" type="submit">가입 신청 
                                                        <i class="uil uil-message ms-1"></i>
                                                    </button>
                                                </div>
                                            </form>
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
export default Register;