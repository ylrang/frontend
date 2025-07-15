import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ pageCount, pageRange, currentPage, setCurrentPage }) => {
    const [start, setStart] = useState(1);
    const noPrev = start === 1;
    const noNext = start + pageRange - 1 >= pageCount;

    useEffect(() => {
        if(currentPage > start + pageRange - 1) {
            setStart((prev) => prev + pageRange)
        }
        if (currentPage < start) {
            setStart((prev) =>  Math.max(prev - pageRange, 1))
        }
    }, [currentPage, pageRange, start])

    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination job-pagination mb-0 justify-content-center">
                <li className={`page-item${noPrev ? " invisible" : ""}`}>
                    <button onClick={() => setCurrentPage(start - 1)} className="page-link" tabIndex="-1">
                        <i className="mdi mdi-chevron-double-left fs-15"></i>
                    </button>
                </li>
                <li className={`page-item${currentPage === 1 ? " invisible" : ""}`}>
                    <button onClick={() => setCurrentPage(currentPage - 1)} className="page-link" tabIndex="-1">
                        <i className="mdi mdi-chevron-left fs-15"></i>
                    </button>
                </li>
                {[...Array(Math.min(pageRange, pageCount - start + 1))].map((_, i) => (
                    <li key={i} className={`page-item${currentPage === start + i ? " active": ""}`}>
                        {start + i <= pageCount &&(<button onClick={() => setCurrentPage(start + i)} className="page-link">{start + i}</button>)}
                    </li>
                ))}
                <li className={`page-item${currentPage === pageCount ? " invisible" : ""}`}>
                    <button onClick={() => setCurrentPage(currentPage + 1)} className="page-link" tabIndex="-1">
                        <i className="mdi mdi-chevron-right fs-15"></i>
                    </button>
                </li>
                <li className={`page-item${noNext ? " invisible" : ""}`}>
                    <button onClick={() => setCurrentPage(start + pageRange)} className="page-link" tabIndex="-1">
                        <i className="mdi mdi-chevron-double-right fs-15"></i>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination