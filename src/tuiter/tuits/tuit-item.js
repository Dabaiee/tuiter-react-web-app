import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faComment, faEllipsisH, faHeart, faRetweet, faUpload} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";



const TuitItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and",
            "image": "tesla.png",
            "liked":false
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    const updateLikeDislike = (like) => {
        let newPost

        if (like) {
            newPost = {
                ...post,
                liked: true,
                likes: post.likes + 1
            }
        } else {
            newPost = {
                ...post,
                dislikes: post.dislikes + 1
            }
        }
        dispatch(updateTuitThunk(newPost))
    }
    return(

        <li className="list-group-item pt-3 pb-3 pe-3 d-flex flex-row">
            <div className="wd-bookmark-aside">
                <div className="wd-profile-img-holder ms-1 me-3">
                    <img className="wd-profile-img rounded-circle" height="45px" width="45px"
                         src={`${post.image}`}></img>
                </div>
            </div>
            <div className="wd-bookmark-content w-100">
                <div className="wd-authorbox d-flex flex-row justify-content-between">

                    <div className="wd-author-name-box">
                        <span className="wd-author-name fw-bold">{post.userName}</span>
                        {/*<i className="fas fa-check-circle ps-1"></i>*/}
                        <FontAwesomeIcon icon={faCheckCircle} className="text-primary ps-1"/>
                        <span className="wd-text-at text-muted ps-1">@{post.handle}</span>
                        <span className="wd-post-timestamp text-muted"> · {post.time}</span>
                    </div>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                </div>
                <p className="wd-plaintext">
                    {post.tuit}
                </p>
                <div className="wd-action-container mt-3">
                    <ul className="wd-action-list list-unstyled pe-4 opacity-75 d-flex flex-row justify-content-between w-75">
                        <li className="wd-icon-sm"><a href="#"></a>
                            {/*<i className="fas fa-comment"></i>*/}
                            <FontAwesomeIcon icon={faComment}/>
                            {post.comments}</li>
                        <li className="wd-icon-sm"><a href="#"></a>
                            {/*<i className="fas fa-retweet"></i>*/}
                            <FontAwesomeIcon icon={faRetweet}/>
                            {post.retuit}</li>
                        <li className="wd-icon-sm" onClick={() => {
                            updateLikeDislike(true);
                        }}>
                            {/*<i className="fas fa-heart"></i>*/}
                            {/*<FontAwesomeIcon icon={faHeart} color={`${post.liked == true ? 'red' : ''}`}/>*/}
                            <i className={`fa-solid fa-heart ${post.liked ? "text-danger" : ""}`}></i>
                            {post.likes}</li>
                        <li className="wd-icon-sm"><a href="#"></a>
                            {/*<i className="fas fa-upload"></i>*/}
                            <FontAwesomeIcon icon={faUpload}/>
                        </li>
                    </ul>
                </div>
                {/*<div>*/}
                {/*    <p className="text-primary mt-3">Show this thread</p>*/}
                {/*</div>*/}
            </div>
        </li>
    );
};
export default TuitItem;