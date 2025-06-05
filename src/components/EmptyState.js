
import React from "react";

const EmptyState = ({primaryText, secondaryText, icon, action }) => (
  <div className="row">
    <div className="col-lg-12">
        <div className="d-flex flex-column justify-content-center align-items-center" style={{minHeight: "300px"}}>
            {icon && (<div>{icon}</div>)}
            <h5 className="mb-4 text-dark">{primaryText}</h5>
            {secondaryText && (<div class="text-muted"></div>)}
            {action && ({action})}
        </div>
    </div>
  </div>
);

export default EmptyState;