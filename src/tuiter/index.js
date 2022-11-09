import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import Nav from "../nav";
import {Route, Routes} from "react-router";
import HomeComponent from "./home";

function Tuiter() {
    return (
        <div className="row mt-2 d-flex">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-11 col-xl-10"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route index   element={<HomeComponent/>}/>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Tuiter