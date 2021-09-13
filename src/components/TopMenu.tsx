import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";
import NewStat from "./NewStat";

const TopMenu = () => {
    return (
        <div className="topMenu">
            <h1>Stat42</h1>
            <LinkButton linkText="New statistics" linkTo="/newstat" />
        </div>
    );
}

export default TopMenu;