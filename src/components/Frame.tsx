import React from "react";
import StatWrapper from "./StatWrapper";
import TopMenu from "./TopMenu";

const Frame = () => {
    return (
        <div className="frame">
            <TopMenu />
            <StatWrapper />
        </div>
    );
}
export default Frame;