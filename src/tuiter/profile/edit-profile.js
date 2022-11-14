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
import {updateProfile} from "./profile-reducer";

const EditProfileComponent = () => {

    const userProfile = useSelector((state) => state.profile);
    const initialData = {...userProfile};
    const [profileState, setProfileState] = useState(userProfile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changesHandler = (event) => {
        const fieldName = event.target.name;
        const changedValue = event.target.value;
        const newProfile = {
            ...profileState,
            [fieldName]: changedValue
        }
        setProfileState(newProfile);
    }

    const saveHandler = () => {
        dispatch(updateProfile(profileState));
        navigate('/tuiter/profile');
    }

    const cancelEditHandler = () => {
        dispatch(updateProfile(initialData));
    }
    let name= userProfile.firstName+" "+userProfile.lastName
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
                <img className="w-100 opacity-50" src={`/images/${profileState.bannerPicture}`}/>
                <div className="position-absolute top-50 start-50">
                    <button className="rounded-circle p-2" >
                        <FontAwesomeIcon icon={faCamera} style={{height:40,width:40}}></FontAwesomeIcon>
                    </button>
                    <button className="rounded-circle p-2 ms-3" >
                        <FontAwesomeIcon icon={faTimes} style={{height:40,width:40}}></FontAwesomeIcon>
                    </button>
                </div>
                <img className="position-absolute wd-nudge-up text-white rounded-circle ms-3  opacity-50"
                     style={{height:125,width:125,marginBottom:-65}} src={`/images/${profileState.profilePicture}`}/>
                <button className="position-absolute wd-nudge-up rounded-circle p-2" style={{marginBottom: -35,marginLeft:50}}>
                    <FontAwesomeIcon icon={faCamera} style={{height:40,width:40}}></FontAwesomeIcon>
                </button>
            </div>
            <div className="content mt-5">
                <form className="">
                    <div className="form-floating wd-top-margin-form">
                        <input type="text" className="form-control text-bg-light" id="firstName" name="firstName"
                               value={profileState.firstName} onChange={changesHandler}/>
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="text" className="form-control text-bg-light" id="lastName" name="lastName"
                               value={profileState.lastName} onChange={changesHandler}/>
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="form-floating mt-2">
                <textarea className="form-control h-auto text-bg-light" id="bio" name="bio" value={profileState.bio}
                          onChange={changesHandler}/>
                        <label htmlFor="bio">Bio</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="text" className="form-control text-bg-light" id="location" name="location" value={profileState.location}
                               onChange={changesHandler}/>
                        <label htmlFor="location">Location</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="text" className="form-control text-bg-light" id="website" name="website"
                               value={profileState.website} onChange={changesHandler}/>
                        <label htmlFor="website">Web Site</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="date" className="form-control text-bg-light" id="dateOfBirth" name="dateOfBirth"
                               value={profileState.dateOfBirth} onChange={changesHandler}/>
                        <label htmlFor="dateOfBirth">Date Of Birth</label>
                    </div>
                    Switch to professional
                    <FontAwesomeIcon className="float-end" icon={faArrowRight}></FontAwesomeIcon>
                </form>
            </div>


        </div>
    );
};


export default EditProfileComponent;