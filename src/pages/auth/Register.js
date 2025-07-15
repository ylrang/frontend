import "./Register.css";


const Register = () => {
    return(
        <section class="bg-auth">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12">
                        <div class="card auth-box">
                            <div class="row g-0">
                                <div class="col-lg-6 text-center">
                                    <div class="card-body p-4">
                                        <a href="/">
                                        </a>
                                        <div class="mt-5">
                                            <img src="/assets/images/auth/sign-up.png" alt="background" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="auth-content card-body p-5 h-100 text-white">
                                        <div class="w-100">
                                            <div class="text-center mb-4">
                                                <h5>회원가입</h5>
                                                <p class="text-white-70">KINS 심층처분시스템 안전규제 데이터베이스</p>
                                            </div>
                                            <form method="post" class="auth-form">
                                                <div class="mb-3">
                                                    <label class="form-label required">회원 유형</label>
                                                    <div class="account-type-selection">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="account-type-option">
                                                                    <input type="radio" id="jobseeker" name="account_type" value="job-seeker" class="form-check-input" required="" aria-required="true" />
                                                                    <label for="jobseeker" class="account-type-label">
                                                                        <div class="account-type-card">
                                                                            <div class="account-type-check">
                                                                            <svg class="icon svg-icon-ti-ti-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                                <path d="M5 12l5 5l10 -10"></path>
                                                                            </svg>
                                                                        </div>
                                                                        <div class="account-type-icon">
                                                                            <svg class="icon svg-icon-ti-ti-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                                                            </svg>
                                                                        </div>
                                                                            <div class="account-type-content">
                                                                                <h6>Job Seeker</h6>
                                                                                <p>Looking for job opportunities</p>
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="account-type-option">
                                                                    <input type="radio" id="employer" name="account_type" value="employer" class="form-check-input" required="" aria-required="true" />
                                                                    <label for="employer" class="account-type-label">
                                                                        <div class="account-type-card">
                                                                            <div class="account-type-check">
                                                                                <svg class="icon svg-icon-ti-ti-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                                    <path d="M5 12l5 5l10 -10"></path>
                                                                                </svg>
                                                                            </div>
                                                                            <div class="account-type-icon">
                                                                                <svg class="icon svg-icon-ti-ti-building" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                                <path d="M3 21l18 0"></path>
                                                                                <path d="M9 8l1 0"></path>
                                                                                <path d="M9 12l1 0"></path>
                                                                                <path d="M9 16l1 0"></path>
                                                                                <path d="M14 8l1 0"></path>
                                                                                <path d="M14 12l1 0"></path>
                                                                                <path d="M14 16l1 0"></path>
                                                                                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
                                                                                </svg>
                                                                            </div>
                                                                            <div class="account-type-content">
                                                                                <h6>Employer</h6>
                                                                                <p>Hiring talented professionals</p>
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-3 position-relative">
                                                    <input type="hidden" name="agree_terms_and_policy" value="0" />
                                                    <label class="form-check">
                                                        <input type="checkbox" id="agree_terms_and_policy_243f28785407323f2c450d79cc588bc4" name="agree_terms_and_policy" class="form-check-input" value="1" data-gtm-form-interact-field-id="2" />
                                                        <span class="form-check-label"> I agree to the Terms and Privacy Policy </span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <div class="row">
                                                        <div class="col-md-6"></div>
                                                        <div class="col-md-6">
                                                            <button class="btn btn-primary w-100" type="button">다음으로
                                                                <svg class="icon svg-icon-ti-ti-arrow-narrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                    <path d="M5 12l14 0"></path>
                                                                    <path d="M15 16l4 -4"></path>
                                                                    <path d="M15 8l4 4"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
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
                    </div>
                </div>
            </div>
        </section>
        )
}
export default Register;