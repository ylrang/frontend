const FormButtons = ({ step, minStep, maxStep, onPrevious, onNext }) => {
    if (minStep == step) {
        return (
            <button class="btn btn-primary w-100" type="button" onClick={onNext}>다음으로</button>
        )
    }
    return (
        <>
        {minStep < step && (
            <button class="btn btn-primary mt-2" type="button" onClick={onPrevious}>이전으로
            {/* <svg class="icon svg-icon-ti-ti-arrow-narrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12l14 0"></path>
                <path d="M15 16l4 -4"></path>
                <path d="M15 8l4 4"></path>
            </svg> */}
        </button>
        )}
        <button class="btn btn-primary mt-2 ms-md-2" type="button" onClick={onNext}>{step == maxStep ? "가입하기" : "다음으로"}</button>
        </>
    )
}
export default FormButtons;