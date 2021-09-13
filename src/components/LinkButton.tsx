import React from "react";
import { Link } from "react-router-dom";

const LinkButton = (props:any) => {
    return (
        <div className="stat42-btn">
            <Link to={props.linkTo}>
                {props.linkText}
            </Link>
        </div>
    );
}

export default LinkButton;