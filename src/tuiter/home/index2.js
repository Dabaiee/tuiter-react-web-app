import React from "react";
import "./index.css";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";
import PostList from "../post-list";
import PostSummaryList from "../post-summary-list";
import WhoToFollowList from "../who-to-follow-list";

const HomeComponent2 = () => {
    return(
        <div className="row mt-2">
            <h2>Home</h2>
            <div className="col-10 col-lg-7 col-xl-6">
                <WhatsHappening/>
                <TuitsList/>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>

        </div>
    );
};
export default HomeComponent2;