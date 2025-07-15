import { Link } from "react-router-dom";
import useParsedText from "../hooks/useParsedText";

const FEPDocsView = ({ content }) => {
    const [parsedDescription] = useParsedText(content.description);
    const [parsedPSRelavance] = useParsedText(content.ps_relavance);
    const [parsedTSPAModel] = useParsedText(content.TSPA_Model);
    return (
        <>
            <div class="mb-4">
                <h5 class="mb-2">설명</h5>
                {parsedDescription}
            </div>
            <div class="mb-4">
                <h5 class="mb-2">범주</h5>
                <p class="input-plaintext">{content.category}</p>
            </div>
            <div class="mb-4">
                <h5 class="mb-2">성능과 안전에 관한 사항</h5>
                {parsedPSRelavance}
            </div>
            <div class="mb-4">
                <h5 class="mb-2">관련 규제 FEP</h5>
                <p class="input-plaintext">{content.regulatory_fep}</p>
            </div>
            <div class="mb-4">
                <h5 class="mb-2">관련 사업자 FEP</h5>
                <p class="input-plaintext">{content.license_fep}</p>
            </div>
            <div class="mb-4">
                <h5 class="mb-2">참고 국외 FEP</h5>
                <p class="input-plaintext">{content.reference_fep}</p>
            </div>
            <div class="mb-4">
                <h5 class="mb-2">TSPA Model</h5>
                {parsedTSPAModel}
            </div>

        </>
    )
}
export default FEPDocsView;