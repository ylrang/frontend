import { useState } from "react"
import { useNavigate } from "react-router-dom";

const StepTwoForm = ({ email, password, password2, username, company, dept, onChange, emailError, passwordError, password2Error, usernameError, companyError }) => {
    return (
            <div class= "row">
                <div class="col-lg-12">

                    <div class="mb-3 position-relative">
                        <label class="form-label required" for="email">이메일 (ID)</label>
                        {/* <div class="input-group justify-content-center justify-content-lg-end">
                            <input type="text" class="form-control" id="confirm_id" placeholder="Enter your email" />
                            <button class="btn btn-primary" type="button" id="confirmIDBtn">중복 확인</button>
                        </div> */}
                        <div class="position-relative">
                            <span class="auth-input-icon input-group-text">
                                <svg class="icon svg-icon-ti-ti-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
                            </span>
                            <input class={`form-control ps-5 ${emailError ? ' is-invalid' : ''}`} data-counter="60" placeholder="Email address" required="required" name="email" type="email" id="email" aria-required="true" onChange={onChange} value={email}/>
                            {emailError &&(<div id="emailFeedback" class="invalid-feedback">
                                {emailError}
                            </div>)}
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="mb-3 position-relative">
                        <label class="form-label required" for="password">비밀번호</label>
                        <div class="position-relative">
                            <span class="auth-input-icon input-group-text">
                                <svg class="icon svg-icon-ti-ti-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path><path d="M8 11v-4a4 4 0 1 1 8 0v4"></path></svg>
                            </span>
                            <div class="input-group">
                                <input type="password" name="password" id="password" class="form-control ps-5" data-counter="250" placeholder="Password" required="required" data-bb-password="" aria-required="true" onChange={onChange} value={password}/>
                                <span class="input-password-toggle" data-bb-toggle-password="">
                                    <svg class="icon svg-icon-ti-ti-eye" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="mb-3 position-relative">
                        <label class="form-label required" for="password2">비밀번호 확인</label>
                        <div class="position-relative">
                            <span class="auth-input-icon input-group-text">
                                <svg class="icon svg-icon-ti-ti-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path><path d="M8 11v-4a4 4 0 1 1 8 0v4"></path></svg>
                            </span>
                            <div class="input-group">
                                <input type="password" name="password2" id="password2" class="form-control ps-5" data-counter="250" placeholder="Password confirmation" required="required" data-bb-password="" aria-required="true" onChange={onChange} value={password2}/>
                                <span class="input-password-toggle" data-bb-toggle-password="">
                                    <svg class="icon svg-icon-ti-ti-eye" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="mb-3 position-relative">
                        <label class="form-label required" for="username">이름</label>
                        <div class="position-relative">
                            <span class="auth-input-icon input-group-text">
                                <svg class="icon svg-icon-ti-ti-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path></svg>
                            </span>
                            <input class="form-control ps-5" data-counter="250" placeholder="이름" required="required" name="username" type="text" id="username" aria-required="true" onChange={onChange} value={username}/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="mb-3 position-relative">
                        <label class="form-label required" for="company">소속 기관</label>
                        <select class="form-select" required="required" name="company" id="company" onChange={onChange} value={company}>
                            <option selected>소속 기관 선택</option>
                            <option value="ncs">NCS</option>
                            <option value="brnc">BRNC</option>
                            <option value="unist">UNIST</option>
                            <option value="kins">KINS</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="mb-3 position-relative">
                        <label class="form-label" for="dept">소속 부서</label> 
                        <div class="position-relative">
                            <span class="auth-input-icon input-group-text">
                                <svg class="icon svg-icon-ti-ti-building" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l18 0"></path><path d="M9 8l1 0"></path><path d="M9 12l1 0"></path><path d="M9 16l1 0"></path><path d="M14 8l1 0"></path><path d="M14 12l1 0"></path><path d="M14 16l1 0"></path><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path></svg>
                            </span>
                            <input class="form-control ps-5" data-counter="250" placeholder="First name" required="required" name="dept" type="text" id="dept" aria-required="true" onChange={onChange} value={dept}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default StepTwoForm;