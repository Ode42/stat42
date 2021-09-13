import React from "react";
import LinkButton from "./LinkButton";
import "./../styles/menu.css"

const TopMenu = () => {
    return (
        <header className="topmenu">
            <h1>Stat42</h1>
            <LinkButton linkText="New statistics" linkTo="/newstat" />
        </header>
    );
}

export default TopMenu;