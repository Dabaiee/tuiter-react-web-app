import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList
    from "./who-to-follow-list";
import {Route, Routes} from "react-router";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeComponent from "./home";
import HomeComponent2 from "./home/index2";
import Profile from "./profile";
import EditProfileComponent from "./profile/edit-profile";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2 d-flex">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-11 col-xl-10"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route index path=""   element={<HomeComponent2/>}/>
                        <Route path="home"    element={<HomeComponent2/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="edit-profile" element={<EditProfileComponent/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>

    );
}

export default Tuiter