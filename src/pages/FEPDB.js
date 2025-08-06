import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import "./FEPDB.css";
import { ArcherContainer, ArcherElement } from "react-archer";

const FEPDB = () => {
    return(
        <>
            <PageTitle title="FEP List" />
            <section class="section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                        
                            <div class="card mt-3">
                                <div class="card-body px-4 py-5">
                                    <ArcherContainer>
                                    <div class="vstack gap-5 col-md-5 mx-auto">
                                        <ArcherElement id="element" relations={[
                                            {
                                                targetId: "element2",
                                                targetAnchor: "top",
                                                sourceAnchor: "bottom",
                                                style: { strokeColor: "var(--bs-secondary-color)", strokeWidth: 1 },
                                            },
                                        ]}>
                                                <Link to={`/fepdb/docs`} class="btn btn-soft-primary">KINS-KIGAM General FEP List</Link>
                                        </ArcherElement>
                                        <ArcherElement id="element2">
                                                <Link to={""} class="btn btn-outline-primary">GeoDART FEP List</Link>
                                        </ArcherElement>
                                    </div>
                                    </ArcherContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default FEPDB;