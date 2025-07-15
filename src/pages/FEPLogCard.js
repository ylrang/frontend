import { Link } from "react-router-dom";
const FEPLogCard = ({log}) => {
    return (
    <div class="card mt-2">
        <div class="card-body p-3">
            <h6>{log.text}</h6>
            <ul class="list-inline mb-0 text-muted text-dark">
                <li class="list-inline-item">
                   {log.updated_at}
                </li>
                <li class="list-inline-item">
                    <i class="mdi mdi-account-circle"></i> {log.updated_by}
                </li>
                <li class="list-inline-item">
                    <Link to={`/fepdocs/${log.fep_id}/log/${log.id}`} class="fs-15 data">{log.fep_type}: {log.fep_index_num}. {log.fep_title}</Link>
                </li>
            </ul>
        </div>
    </div>
    );
}
export default FEPLogCard;