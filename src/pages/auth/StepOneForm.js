const StepOneForm = () => {
    return (
        <>
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
        </>
    )
}

export default StepOneForm;