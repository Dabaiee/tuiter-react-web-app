import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBirthdayCake, faCalendarAlt, faLongArrowLeft, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import {createTuit} from "../tuits/tuits-reducer";
import {Link, useNavigate} from 'react-router-dom'

const ProfileComponent  = () => {
    const userProfile = useSelector(
        (state) => state.profile);
    const navigate = useNavigate();
    const editProfileHandler = () => {

        navigate('/tuiter/edit-profile');
    }
    return(
        <div className="col mt-2">
            <div className="row">
                <FontAwesomeIcon className="align-self-center pe-3" icon={faLongArrowLeft}  style={{height:30,width:30}}></FontAwesomeIcon>
                <div className="col-3">
                    <h4>{userProfile.firstName} {userProfile.lastName}</h4>
                    <p className="text-muted">{userProfile.tweetsCount} Tweets</p>
                </div>
            </div>
            <div className="position-relative mb-2">
                <img className="w-100" src={`/images/${userProfile.bannerPicture}`}/>
                <img className="position-absolute wd-nudge-up text-white rounded-circle ms-3" style={{height:125,width:125,marginBottom:-65}} src={`/images/${userProfile.profilePicture}`}/>
            </div>
            <div className="content mt-5">

                <button className="rounded-pill btn btn-outline-secondary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={editProfileHandler}>
                    Edit profile
                </button>


                <h5 className="pt-3">{userProfile.firstName} {userProfile.lastName}</h5>
                <p className="text-muted">@{userProfile.handle}</p>
                <p className="mt-2">{userProfile.bio}</p>
                <div className="d-flex justify-content-start text-muted mt-2">
                    <div className="">
                        <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                        {userProfile.location}</div>
                    <div className="ms-5">
                        <FontAwesomeIcon className="me-2" icon={faBirthdayCake}></FontAwesomeIcon>
                        {userProfile.dateOfBirth}</div>
                    <div className="ms-5">
                        <FontAwesomeIcon className="me-2" icon={faCalendarAlt}></FontAwesomeIcon>
                        {userProfile.dateJoined}</div>
                </div>
                <div className="row mt-3">
                    <div className="col-2">
                        <span className="fw-bold">{userProfile.followingCount}</span>Following</div>
                    <div className="col-2">
                        <span className="fw-bold">{userProfile.followersCount} </span>Followers</div>
                </div>
            </div>


        </div>
    );
};
export default ProfileComponent ;