import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const FEPDocsEdit= ({ content, onChange }) => {
    const descriptionRef = useRef(null);
    const psRelavanceRef = useRef(null);
    const TSPARef = useRef(null);
    useEffect(() => {
        const resizeTextarea = (ref) => {
            if (ref?.current) {
                ref.current.style.height = 'auto';
                ref.current.style.height = `${ref.current.scrollHeight}px`;
            }
        };
        resizeTextarea(descriptionRef);
        resizeTextarea(psRelavanceRef);
        resizeTextarea(TSPARef);
    }, [content])
    return (
        <>
            <div class="mb-4">
                <h5 class="mb-2">설명</h5>
                <textarea ref={descriptionRef} class="form-control" id="descriptionInput" name="description" value={content.description} onChange={(e) => onChange("description", e.target.value)}/>
            </div>
            <div class="mb-4">
                <h5 class="mb-2">범주</h5>
                <input type="text" class="form-control" value={content.category}/>
            </div>
            <div class="mb-4">
                <h5 class="mb-2">성능과 안전에 관한 사항</h5>
                <textarea ref={psRelavanceRef} class="form-control" id="psRelavanceInput" name="psRelavance" value={content.ps_relavance} onChange={(e) => onChange("ps_relavance", e.target.value)}/>
            </div>
            <div class="mb-4">
                <h5 class="mb-2">관련 규제 FEP</h5>
                <input type="text" class="form-control" value={content.regulatory_fep}/>
            </div>
            <div class="mb-4">
                <h5 class="mb-2">관련 사업자 FEP</h5>
                <input type="text" class="form-control" value={content.license_fep} />
            </div>
            <div class="mb-4">
                <h5 class="mb-2">참고 국외 FEP</h5>
                <input type="text" class="form-control" value={content.reference_fep}/>
            </div>
            <div class="mb-4">
                <h5 class="mb-2">TSPA Model</h5>
                <textarea ref={TSPARef} class="form-control" id="TSPAModelInput" name="TSPAModel" value={content.TSPA_Model} onChange={(e) => onChange("TSPA_Model", e.target.value)}/>
            </div>

        </>
    )
}
export default FEPDocsEdit;