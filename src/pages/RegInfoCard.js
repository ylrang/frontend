import React from "react"
import { Link } from "react-router-dom"

const RegInfoCard = ({id, title, created_at, writer}) => {
    return (
        <div className="card mt-2">
            <div className="card-body p-4">
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                    <div>
                        <h5 className="post-title fs-17 mb-0"><Link to={`/regulation/${id}`} className="primary-link">{title}</Link></h5>
                    </div>
                    <ul className="list-inline mb-0 text-muted d-flex">
                        <li className="list-inline-item">
                            <i className="mdi mdi-calendar-clock"></i>&nbsp;{created_at}
                        </li>
                        <li>
                            <i className="mdi mdi-account-circle"></i>&nbsp;{writer}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RegInfoCard