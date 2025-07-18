import { useState } from "react";
import "./Register.css";
import StepOneForm from "./StepOneForm";
import StepTwoForm from "./StepTwoForm";
import FormButtons from "./FormButton";
import { Link } from "react-router-dom";
import { register } from "../../store/AuthAction";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form"
// import Select from "react-select";

const Register = () => {
    const {register, handleSubmit, formState: { errors }, watch} = useForm({defaultValues: {company: "",}});
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
    const [formError, setFormError] = useState({
        emailError: "",
        passwordError: "",
        password2Error: "",
        usernameError: "",
        companyError: "",
    })
    const {emailError, passwordError, password2Error, usernameError, companyError} = formError
    const onFormChange = (e) => {
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
    // const validate = () => {
    //     let errors = {}
    //     if (!email) errors.emailError = "이메일(ID)을 입력하세요."
    //     if (!password) errors.passwordError = "비밀번호를 입력하세요.";
    //     if (!password2) errors.password2Error = "비밀번호를 다시 한번 입력하세요.";
    //     if (!username) errors.usernameError = "이름을 입력하세요.";
    //     if (!company) errors.companyError = "소속 기관을 선택하세요.";
    //     if (password && password2) {
    //         if (password !== password2) errors.password2Error = "비밀번호가 일치하지 않습니다."
    //     }
    //     return errors
    // }
    // const onSubmitForm = (e) => {
    //     e.preventDefault();
    //     console.log(formData)
    //     const validateErrors = validate();
    //     if (Object.keys(validateErrors).length > 0) {
    //         setFormError(validateErrors);
    //         return;
    //     }
    //     setFormError({});
    //     dispatch(register(email, password, password2, username, company, dept));
    // };
    const onSubmitForm = (e) => {
        e.preventDefault();
        dispatch(register(email, password, password2, username, company, dept));
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
                                            <form method="post" class="auth-form" onSubmit={handleSubmit(onSubmitForm)}>
                                            <div class= "row">
                                                <div class="col-lg-12">
                                                    <div class="position-relative mb-4">
                                                        <label class="form-label required" for="email">이메일 (ID)</label>
                                                        <input 
                                                        id="email"
                                                        type="email"
                                                        className={`form-control ${Boolean(errors.email?.message)? "is-invalid": ""}`}
                                                        {...register("email", {
                                                            required: "이메일을 입력해주세요.",
                                                            pattern:{
                                                                value:/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, 
                                                                message:"잘못된 형식의 이메일입니다.",
                                                            }
                                                        })} 
                                                        />
                                                        <div id="emailFeedback" class="invalid-feedback">{errors?.email && errors.email?.message}</div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="position-relative mb-4">
                                                        <label class="form-label required" for="password">비밀번호</label>
                                                        <input
                                                        id="password"
                                                        type="password"
                                                        className={`form-control ${Boolean(errors.password?.message)? "is-invalid": ""}`}
                                                        {...register("password", {
                                                            required:"비밀번호를 입력해주세요.",
                                                            minLength:{
                                                                value:8,
                                                                message:"비밀번호는 8자 이상이여야 합니다.",
                                                            }
                                                        })}
                                                        />
                                                        <div id="passwordFeedback" class="invalid-feedback">{errors?.password && errors.password?.message}</div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="position-relative mb-4">
                                                        <label class="form-label required" for="password2">비밀번호 확인</label>
                                                        <input
                                                        id="password2"
                                                        type="password"
                                                        className={`form-control ${Boolean(errors.password2?.message)? "is-invalid": ""}`}
                                                        {...register("password2", {
                                                            required:"비밀번호를 입력해주세요.",
                                                            minLength:{
                                                                value:8,
                                                                message:"비밀번호는 8자 이상이여야 합니다.",
                                                            },
                                                            validate: value => value === watch('password') || "비밀번호가 일치하지 않습니다."
                                                        })}
                                                        />
                                                        <div id="password2Feedback" class="invalid-feedback">{errors?.password2 && errors.password2?.message}</div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="position-relative mb-4">
                                                        <label class="form-label required" for="username">이름</label>
                                                        <input
                                                        id="username"
                                                        className={`form-control ${Boolean(errors.username?.message)? "is-invalid": ""}`}
                                                        {...register("username", {
                                                            required:"이름을 입력해주세요.",
                                                        })}
                                                        />
                                                        <div id="usernameFeedback" class="invalid-feedback">{errors?.username && errors.username?.message}</div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="position-relative mb-4">
                                                        <label class="form-label required" for="company">소속 기관</label>
                                                        <select
                                                        id="company"
                                                        className={`form-select ${Boolean(errors.company?.message)? "is-invalid": ""}`}
                                                        {...register("company", {
                                                            required: "소속 기관을 선택해주세요.",
                                                        })}>
                                                            <option value="">선택</option>
                                                            <option value="ncs">NCS</option>
                                                            <option value="brnc">BRNC</option>
                                                            <option value="unist">UNIST</option>
                                                            <option value="kins">KINS</option>
                                                        </select>
                                                        <div id="companyFeedback" class="invalid-feedback">{errors?.company && errors.company?.message}</div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label class="form-label" for="company">부서</label>
                                                        <input
                                                        id="dept"
                                                        className={`form-control`}
                                                        {...register("dept")}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                                {/* <StepTwoForm email={email} password={password} password2={password2} username={username} company={company} dept={dept} onChange={onFormChange} emailError={emailError} passwordError={passwordError} password2Error={password2Error} usernameError={usernameError} comapnyError={companyError}/> */}
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