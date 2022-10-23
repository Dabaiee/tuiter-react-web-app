import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import WhoToFollowList from "../who-to-follow-list";
const ExploreComponent = () => {
    return(
        <div className="d-flex flex-row">
            <div class="col-10 col-md-10 col-lg-7 col-xl-6">
                <div className="row">
                    <div className="col-11 position-relative">
                        <input placeholder="Search Tuiter"
                               className="form-control rounded-pill ps-5"/>
                        <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                    </div>
                    <div className="col-1">
                        <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                    </div>
                </div>
                <ul className="nav nav-pills mb-2">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">For You</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sports</a>
                    </li>
                    <li className="nav-item d-none d-sm-none d-md-inline">
                        <a className="nav-link" href="#">Entertainment</a>
                    </li>
                </ul>
                <div className="position-relative mb-2">
                    <img src="/images/starship.jpg" className="w-100"/>
                    <h1 className="position-absolute wd-nudge-up text-white">
                        SpaceX Starship</h1>
                </div>
                <PostSummaryList/>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ms-3">
                <WhoToFollowList/>
            </div>

        </div>
    );
};
export default ExploreComponent;