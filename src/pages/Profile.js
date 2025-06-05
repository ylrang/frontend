import React from "react";
import PageTitle from "../components/PageTitle";

const Profile = () => {
    return (
        <>
            <PageTitle title="내 정보" />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card profile-sidebar me-lg-4">
                                <div className="card-body p-4">
                                    <div className="text-center pb-4 border-bottom">
                                        <img src="assets/images/profile.jpg" alt="" className="avatar-lg img-thumbnail rounded-circle mb-4" />
                                        <h5 className="mb-0">Jansh Dickens</h5>
                                        <p className="text-muted">Developer</p>
                                        <ul className="list-inline d-flex justify-content-center align-items-center ">
                                            <li className="list-inline-item text-warning fs-19">
                                                <i className="mdi mdi-star"></i>
                                                <i className="mdi mdi-star"></i>
                                                <i className="mdi mdi-star"></i>
                                                <i className="mdi mdi-star"></i>
                                                <i className="mdi mdi-star-half-full"></i>
                                            </li>
                                        </ul>
                                        <ul className="candidate-detail-social-menu list-inline mb-0">
                                            <li className="list-inline-item">
                                                <a href="javascript:void(0)" className="social-link rounded-3 btn-soft-primary"><i className="uil uil-facebook-f"></i></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="javascript:void(0)" className="social-link rounded-3 btn-soft-info"><i className="uil uil-twitter-alt"></i></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="javascript:void(0)" className="social-link rounded-3 btn-soft-success"><i className="uil uil-whatsapp"></i></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="javascript:void(0)" className="social-link rounded-3 btn-soft-danger"><i className="uil uil-phone-alt"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-4 border-bottom pb-4">
                                        <h5 className="fs-17 fw-bold mb-3">Documents</h5>
                                        <ul className="profile-document list-unstyled mb-0">
                                            <li>
                                                <div className="profile-document-list d-flex align-items-center mt-4 ">
                                                    <div className="icon flex-shrink-0">
                                                        <i className="uil uil-file"></i>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h6 className="fs-16 mb-0">Resume.pdf</h6>
                                                        <p className="text-muted mb-0">1.25 MB</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <a href="assets/images/dark-logo.png" download="" className="fs-20 text-muted"><i className="uil uil-import"></i></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="profile-document-list d-flex align-items-center mt-4 ">
                                                    <div className="icon flex-shrink-0">
                                                        <i className="uil uil-file"></i>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h6 className="fs-16 mb-0">Cover-letter.pdf</h6>
                                                        <p className="text-muted mb-0">1.25 MB</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <a href="assets/images/dark-logo.png" download="dark-logo" className="fs-20 text-muted"><i className="uil uil-import"></i></a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-4">
                                        <h5 className="fs-17 fw-bold mb-3">Contacts</h5>
                                        <div className="profile-contact">
                                            <ul className="list-unstyled mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <label>Email</label>
                                                        <div>
                                                            <p className="text-muted text-break mb-0">
                                                                Jansh@gmail.com
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <label>Phone Number</label>
                                                        <div>
                                                            <p className="text-muted mb-0">+2 345 678 0000</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <label>Location</label>
                                                        <div>
                                                            <p className="text-muted mb-0">New Caledonia</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card profile-content-page mt-4 mt-lg-0">
                                <ul className="profile-content-nav nav nav-pills border-bottom mb-4" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="overview-tab" data-bs-toggle="pill" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="false" tabindex="-1">
                                                Overview
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="settings-tab" data-bs-toggle="pill" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="true">
                                                Settings
                                            </button>
                                        </li>
                                    </ul>
                                <div className="card-body p-4">
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                            <div>
                                                <h5 className="fs-18 fw-bold">About</h5>
                                                <p className="text-muted mt-4">
                                                    Developer with over 5 years' experience working in both
                                                    the public and private sectors. Diplomatic, personable,
                                                    and adept at managing sensitive situations. Highly
                                                    organized, self-motivated, and proficient with
                                                    computers. Looking to boost students’ satisfactions
                                                    scores for <b>International University</b>. Bachelor's
                                                    degree in communications.
                                                </p>
                                                <p className="text-muted">
                                                    It describes the candidate's relevant experience,
                                                    skills, and achievements. The purpose of this career
                                                    summary is to explain your qualifications for the job in
                                                    3-5 sentences and convince the manager to read the whole
                                                    resume document.
                                                </p>
                                            </div>
                                            <div className="candidate-education-details mt-4">
                                                <h6 className="fs-18 fw-bold mb-0">Education</h6>
                                                <div className="candidate-education-content mt-4 d-flex">
                                                    <div className="circle flex-shrink-0 primary-bg-subtle">
                                                        B
                                                    </div>
                                                    <div className="ms-4">
                                                        <h6 className="fs-16 mb-1">
                                                            BCA - Bachelor of Computer Applications
                                                        </h6>
                                                        <p className="mb-2 text-muted">
                                                            International University - (2004 - 2010)
                                                        </p>
                                                        <p className="text-muted">
                                                            There are many variations of passages of available,
                                                            but the majority alteration in some form. As a
                                                            highly skilled and successfull product development
                                                            and design specialist with more than 4 Years of My
                                                            experience.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="candidate-education-content mt-3 d-flex">
                                                    <div className="circle flex-shrink-0 primary-bg-subtle">
                                                        M
                                                    </div>
                                                    <div className="ms-4">
                                                        <h6 className="fs-16 mb-1">
                                                            MCA - Master of Computer Application
                                                        </h6>
                                                        <p className="mb-2 text-muted">
                                                            International University - (2010 - 2012)
                                                        </p>
                                                        <p className="text-muted">
                                                            There are many variations of passages of available,
                                                            but the majority alteration in some form. As a
                                                            highly skilled and successfull product development
                                                            and design specialist with more than 4 Years of My
                                                            experience.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="candidate-education-content mt-3 d-flex">
                                                    <div className="circle flex-shrink-0 primary-bg-subtle">
                                                        D
                                                    </div>
                                                    <div className="ms-4">
                                                        <h6 className="fs-16 mb-1">Design Communication Visual</h6>
                                                        <p className="text-muted mb-2">
                                                            International University - (2012-2015)
                                                        </p>
                                                        <p className="text-muted">
                                                            There are many variations of passages of available,
                                                            but the majority alteration in some form. As a
                                                            highly skilled and successfull product development
                                                            and design specialist with more than 4 Years of My
                                                            experience.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="candidate-education-details mt-4">
                                                <h6 className="fs-18 fw-bold mb-0">Experiences</h6>
                                                <div className="candidate-education-content mt-4 d-flex">
                                                    <div className="circle flex-shrink-0 primary-bg-subtle"> W </div>
                                                    <div className="ms-4">
                                                        <h6 className="fs-16 mb-1">Web Design &amp; Development Team Leader</h6>
                                                        <p className="mb-2 text-muted">Creative Agency - (2013 - 2016)</p>
                                                        <p className="text-muted">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                                    </div>
                                                </div>
                                                <div className="candidate-education-content mt-4 d-flex">
                                                    <div className="circle flex-shrink-0 primary-bg-subtle"> P </div>
                                                    <div className="ms-4">
                                                        <h6 className="fs-16 mb-1">Project Manager</h6>
                                                        <p className="mb-2 text-muted">Jobcy Technology Pvt.Ltd - (Pressent)</p>
                                                        <p className="text-muted mb-0">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <h5 className="fs-18 fw-bold">Skills</h5>
                                                <span className="badge fs-13 bg-primary-subtle text-primary mt-2">Cloud Management</span>
                                                <span className="badge fs-13 bg-primary-subtle text-primary mt-2">Responsive Design</span>
                                                <span className="badge fs-13 bg-primary-subtle text-primary mt-2">Network Architecture</span>
                                                <span className="badge fs-13 bg-primary-subtle text-primary mt-2">PHP</span>
                                                <span className="badge fs-13 bg-primary-subtle text-primary mt-2">Bootstrap</span>
                                                <span className="badge fs-13 bg-primary-subtle text-primary mt-2">UI &amp; UX Designer</span>
                                            </div>
                                            <div className="mt-4">
                                                <h5 className="fs-18 fw-bold">Spoken languages</h5>
                                                <span className="badge fs-13 bg-success-subtle text-success mt-2">English</span>
                                                <span className="badge fs-13 bg-success-subtle text-success mt-2">German</span>
                                                <span className="badge fs-13 bg-success-subtle text-success mt-2">French</span>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade active show" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                                            <form action="#">
                                                <div>
                                                    <h5 className="fs-17 fw-semibold mb-3 mb-0">My Account</h5>
                                                    <div className="text-center">
                                                        <div className="mb-4 profile-user">
                                                            <img src="assets/images/user/img-02.jpg" className="rounded-circle img-thumbnail profile-img" id="profile-img" alt=""/>
                                                            <div className="p-0 rounded-circle profile-photo-edit">
                                                                <input id="profile-img-file-input" type="file" className="profile-img-file-input" />
                                                                <label for="profile-img-file-input" className="profile-photo-edit avatar-xs">
                                                                    <i className="uil uil-edit"></i>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label for="firstName" className="form-label">First Name</label>
                                                                <input type="text" className="form-control" id="firstName" value="Jansh" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label for="lastName" className="form-label">Last Name</label>
                                                                <input type="text" className="form-control" id="lastName" value="Dickens" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label for="choices-single-categories" className="form-label">Account Type</label>
                                                                <div className="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                                                                    <div className="choices__inner">
                                                                        <select className="form-select choices__input" data-trigger="" name="choices-single-categories" id="choices-single-categories" aria-label="Default select example" hidden="" tabindex="-1" data-choice="active">
                                                                            <option value="4" selected="">Accounting</option>
                                                                            <option value="1">IT &amp; Software</option>
                                                                            <option value="3">Marketing</option>
                                                                            <option value="5">Banking</option>
                                                                        </select>
                                                                        <div className="choices__list choices__list--single" role="listbox">
                                                                            <div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="4" aria-selected="true" role="option">Accounting</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="choices__list choices__list--dropdown" aria-expanded="false">
                                                                        <input type="search" className="choices__input choices__input--cloned" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" aria-label="Account Type" placeholder="" />
                                                                        <div className="choices__list" role="listbox">
                                                                            <div id="choices--choices-single-categories-item-choice-1" className="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="4" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Accounting</div>
                                                                            <div id="choices--choices-single-categories-item-choice-4" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="5" data-select-text="Press to select" data-choice-selectable="">Banking</div>
                                                                            <div id="choices--choices-single-categories-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="1" data-select-text="Press to select" data-choice-selectable="">IT &amp;amp; Software</div>
                                                                            <div id="choices--choices-single-categories-item-choice-3" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="3" data-select-text="Press to select" data-choice-selectable="">Marketing</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label for="email" className="form-label">Email</label>
                                                                <input type="text" className="form-control" id="email" value="Jansh@gmail.com" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <h5 className="fs-17 fw-semibold mb-3">Profile</h5>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="mb-3">
                                                                <label for="exampleFormControlTextarea1" className="form-label">Introduce Yourself</label>
                                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5">Developer with over 5 years' experience working in both the public and private sectors. Diplomatic, personable, and adept at managing sensitive situations. Highly organized, self-motivated, and proficient with computers. Looking to boost students’ satisfactions scores for International University. Bachelor's degree in communications.</textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label for="languages" className="form-label">Languages</label>
                                                                <input type="text" className="form-control" id="languages" value="English, German, French" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label for="choices-single-location" className="form-label">Location</label>
                                                                <div className="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"><div className="choices__inner"><select className="form-select choices__input" data-trigger="" name="choices-single-location" id="choices-single-location" aria-label="Default select example" hidden="" tabindex="-1" data-choice="active">
                                                                    <option value="ME" selected="">Montenegro</option>
                                                                    <option value="MS">Montserrat</option>
                                                                    <option value="MA">Morocco</option>
                                                                    <option value="MZ">Mozambique</option>
                                                                </select>
                                                                <div className="choices__list choices__list--single" role="listbox">
                                                                    <div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="ME" aria-selected="true" role="option">Montenegro</div>
                                                                </div>
                                                            </div>
                                                            <div className="choices__list choices__list--dropdown" aria-expanded="false">
                                                                <input type="search" className="choices__input choices__input--cloned" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" aria-label="Location" placeholder="" />
                                                                <div className="choices__list" role="listbox">
                                                                    <div id="choices--choices-single-location-item-choice-1" className="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="ME" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Montenegro</div>
                                                                    <div id="choices--choices-single-location-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="MS" data-select-text="Press to select" data-choice-selectable="">Montserrat</div>
                                                                    <div id="choices--choices-single-location-item-choice-3" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="MA" data-select-text="Press to select" data-choice-selectable="">Morocco</div>
                                                                    <div id="choices--choices-single-location-item-choice-4" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="MZ" data-select-text="Press to select" data-choice-selectable="">Mozambique</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div className="col-lg-12">
                                                        <div className="mb-3">
                                                            <label for="attachmentscv" className="form-label">Attachments
                                                                CV</label>
                                                            <input className="form-control" type="file" id="attachmentscv" />
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <h5 className="fs-17 fw-semibold mb-3">Social Media</h5>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label for="facebook" className="form-label">Facebook</label>
                                                                <input type="text" className="form-control" id="facebook" value="https://www.facebook.com" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label for="twitter" className="form-label">Twitter</label>
                                                                <input type="text" className="form-control" id="twitter" value="https://www.twitter.com" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label for="linkedin" className="form-label">Linkedin</label>
                                                                <input type="text" className="form-control" id="linkedin" value="https://www.linkedin.com" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label for="whatsapp" className="form-label">Whatsapp</label>
                                                                <input type="text" className="form-control" id="whatsapp" value="https://www.whatsapp.com" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <h5 className="fs-17 fw-semibold mb-3 mb-3">
                                                        Change Password
                                                    </h5>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="mb-3">
                                                                <label for="current-password-input" className="form-label">Current
                                                                    password</label>
                                                                <input type="password" className="form-control" placeholder="Enter Current password" id="current-password-input" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label for="new-password-input" className="form-label">New
                                                                    password</label>
                                                                <input type="password" className="form-control" placeholder="Enter new password" id="new-password-input" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label for="confirm-password-input" className="form-label">Confirm Password</label>
                                                                <input type="password" className="form-control" placeholder="Confirm Password" id="confirm-password-input" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="verification" />
                                                                <label className="form-check-label" for="verification">
                                                                    Enable Two-Step Verification via email
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4 text-end">
                                                    <a href="javascript:void(0)" className="btn btn-primary">Update</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Profile;