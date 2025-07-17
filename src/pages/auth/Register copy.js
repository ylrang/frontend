import { useState } from "react";
import "./Register.css";
import StepOneForm from "./StepOneForm";
import StepTwoForm from "./StepTwoForm";
import FormButtons from "./FormButton";


const Register = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep((prev) => prev + 1)
    }
    const previousStep = () => {
        setStep((prev) => prev - 1)
    }
    
    const displayForm = (step) => {
        switch (step) {
            case 1:
                return (
                    <div class="card auth-box">
                        <div class="row align-items-center">
                            <div class="col-lg-6 text-center">
                                <div class="card-body p-4">
                                    <div class="mt-5">
                                        <img src="/assets/images/auth/sign-up.png" alt="background" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="auth-content card-body p-5 text-white">
                                    <div class="w-100">
                                        <div class="text-center mb-4">
                                            <h5>회원가입</h5>
                                            <p class="text-white-70">KINS 심층처분시스템 안전규제 데이터베이스</p>
                                        </div>
                                        <form method="post" class="auth-form dirty-check">
                                            <div class="auth-form-fields">
                                                <StepOneForm />
                                            </div>
                                            <div class="text-center">
                                                {displayButton()}
                                            </div>
                                        </form>
                                        <div class="mt-4 text-center">
                                            <p class="mb-0">Don't have an account ? <a href="#" class="fw-medium text-white text-decoration-underline"> Sign Up </a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 2:
                return (
                <div class="card auth-box-plain">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="card-body p-5">
                                <div class="w-100">
                                    <div class="text-center mb-4">
                                        <h5>회원가입</h5>
                                        <p class="text-white-70">KINS 심층처분시스템 안전규제 데이터베이스</p>
                                    </div>
                                    <form method="post" class="auth-form dirty-check">
                                        <div class="auth-form-fields">
                                            <StepTwoForm />
                                        </div>
                                        <div class="mt-5 text-center">
                                            {displayButton()}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
        }
    }
    
    const displayButton = () => {
        return (
            <FormButtons onNext={nextStep} onPrevious={previousStep} step={step} minStep={1} maxStep={2}/>
        )
    }

    return(
        <section class="bg-auth">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12">
                        {displayForm(step)}
                    </div>
                </div>
            </div>
        </section>
        )
}
export default Register;