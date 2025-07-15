import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getReport } from "../api/kinsdbApi";
import PageTitle from "../components/PageTitle";
import useParsedText from "../hooks/useParsedText";

const Report = () => {
    const [data, setData] = useState([]);
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    const renderText = (text) => {
        if (!text) return null;
        const items = text.split("\n")
                    .filter((line) => line.trim().startsWith("●"))
                    .map((line, idx) => <li key={idx}>{line.replace(/^●\s*/, "")}</li>);
        return <ul>{items}</ul>
    }
    useEffect(() => {
        const fetchReport = async () => {
            setLoading(true);
            try {
                const res = await getReport(id);
                console.log(res.data);
                setData(res.data.report);
                setIssues(res.data.issueList);
            } catch(e) {
                setError(e)
            } finally {
                setLoading(false);
            }
        }
        fetchReport();
    }, [id]);

    const parsedText = useParsedText(data.background)

    return (
        <>
        <PageTitle title="규제 검토 사례 상세 내용" />
        <section class="section">
            <div class="container">
                <div class="text-end mb-3">
                    <Link to={"/unist/" }class="btn btn-primary fs-14 px-3 py-2 me-1">메인화면 돌아가기</Link>
                </div>
                <div class="text-center mb-4">
                    <h4>{data.title}</h4>
                </div>
                <h5>Background</h5>
                {data.image && (
                    <div class="mt-5">
                        <img src={data.image} alt="Image" class="img-fluid"></img>
                    </div>
                )}
                <div class="mt-4">
                    {parsedText}
                </div>
                <div class="pb-2 mt-5 border-bottom">
                    <h5>적용된 법령(시행령) 및 규정(지침)</h5>
                </div>
                <ul class="mt-4">
                    <li>법령(시행령): ACT on Nuclear Activities 1984:3, Ordinance on Nuclear Activities 1984:14</li>
                    <li>규정(규제 지침): SSMFS 2008:21, SSMFS 2008:37</li>
                </ul>
                <div class="pb-2 mt-5 border-bottom">
                    <h5>관련 이슈 사례</h5>
                </div>
                <div class="mt-4">
                    {issues.map((issue, idx) => 
                        <div class="candidate-list-box card mt-4">
                            <div class="card-body p-4">
                                <div class="candidate-list-content mt-lg-0">
                                    <h5 class="fs-16"><Link key={idx} to={`/issue/${issue.id}`} class="primary-link">{issue.title}</Link></h5>
                                    <p class="fs-14 text-muted mb-0">[Technical Issue]</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
        </>
    )
}
export default Report;