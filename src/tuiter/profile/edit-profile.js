import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faBirthdayCake,
    faCalendarAlt, faCamera, faCameraAlt,
    faLongArrowLeft,
    faMapMarkerAlt,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {createTuit} from "../tuits/tuits-reducer";

const EditProfileComponent = (
    {
        profile= {
            firstName: 'Jose', lastName: 'Annunziato', handle: 'jannunzi',
            profilePicture: 'node.png', 	bannerPicture: 'banner.jpg',
            bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
            website: 'youtube.com/webdevtv',
            location: 'Boston, MA',	dateOfBirth: '7/7/1968',	dateJoined: '4/2009',
            followingCount: 340,	followersCount: 223, tweetsCount: 6112
        }
    }
) => {
    let name= profile.firstName+" "+profile.lastName
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const saveHandler = () => {
        navigate('/tuiter/profile');
    }
    return(
        <div className="col mt-2">
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                    <a href="javascript:history.back()">
                        <FontAwesomeIcon className="align-self-center pe-3 pb-2 d-flex justify-content-center" icon={faTimes}  style={{height:25,width:25}}></FontAwesomeIcon>
                    </a>
                    <div>
                        <h4 className="m-0 ">Edit profile</h4>
                    </div>
                </div>

                <div>
                    <button className="rounded-pill btn btn-dark float-end ps-3 pe-3 fw-bold"
                            onClick={saveHandler}>
                        Save
                    </button>
                </div>

            </div>
            <div className="position-relative mt-2 mb-2">
                <img className="w-100 opacity-50" src={`/images/${profile.bannerPicture}`}/>
                <div className="position-absolute top-50 start-50">
                    <button className="rounded-circle p-2" >
                        <FontAwesomeIcon icon={faCamera} style={{height:40,width:40}}></FontAwesomeIcon>
                    </button>
                    <button className="rounded-circle p-2 ms-3" >
                        <FontAwesomeIcon icon={faTimes} style={{height:40,width:40}}></FontAwesomeIcon>
                    </button>
                </div>
                <img className="position-absolute wd-nudge-up text-white rounded-circle ms-3  opacity-50"
                     style={{height:125,width:125,marginBottom:-65}} src={`/images/${profile.profilePicture}`}/>
                <button className="position-absolute wd-nudge-up rounded-circle p-2" style={{marginBottom: -35,marginLeft:50}}>
                    <FontAwesomeIcon icon={faCamera} style={{height:40,width:40}}></FontAwesomeIcon>
                </button>
            </div>
            <div className="content mt-5">
                <form className="">
                    Name
                    <textarea placeholder={name}
                              className="form-control">
                    </textarea>
                    Bio
                    <textarea placeholder={profile.bio}
                              className="form-control">
                    </textarea>
                    Location
                    <textarea placeholder={profile.location}
                              className="form-control">
                    </textarea>
                    Website
                    <textarea placeholder={profile.website}
                              className="form-control">
                    </textarea>
                    Switch to professional
                    <FontAwesomeIcon className="float-end" icon={faArrowRight}></FontAwesomeIcon>
                </form>
            </div>


        </div>
    );
};


export default EditProfileComponent;