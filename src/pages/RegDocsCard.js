import { Link } from "react-router-dom"

const RegDocsCard = ({id, title, index_num, index_title_kor, sector, document}) => {
    return(
    <div class="card candidate-list-box mt-3">
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="candidate-list-content mt-3 mt-lg-0">
                        <p class="text-muted mb-3 fs-15">{document}&nbsp;&nbsp;{index_title_kor}</p>
                        <h5 class="fs-19 mb-2"><Link to={`/regdocs-detail/?regdocs=${id}`} class="primary-link">{title} {index_num}</Link></h5>
                    </div>
                </div>
                <div class="col-lg-6 text-end">
                    <div class="mt-2 mt-lg-0">
                        <span class="badge bg-soft-primary text-primary fs-14 mt-1">{sector}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RegDocsCard