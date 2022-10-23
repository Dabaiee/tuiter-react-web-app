import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle, faComment, faEllipsisH, faHeart, faRetweet, faUpload} from "@fortawesome/free-solid-svg-icons";

const PostItem = (
    {
        post = {
            "avatarIcon": 'https://pbs.twimg.com/profile_images/1561483954519040000/_HQu12ca_400x400.jpg',
            "userName": '<a href="https://twitter.com/hbomax" class="text-decoration-none text-white">HBO Max</a>',
            "handle": 'hbomax',
            "time": 'Oct 14',
            "text": 'Sometimes family ties don’t bind. Catch up on the first eight episodes of <a href="#" class="text-decoration-none">#HouseoftheDragon</a> on HBO Max.',
            "image": 'https://pbs.twimg.com/media/FfDVJceVEAE6ex3?format=jpg&name=small',
            "imageAuthor":'hbomax',
            "imageTitle":'',
            "imageDesc": '<a href="#" class="text-decoration-none">#HouseoftheDragon</a> is streaming on HBO Max.' +
                ' #TheWhiteLotus Sicily' +
                ' premieres October 30.',
            "imageLink":'https://twitter.com/hbomax/status/1580997845431115776/photo/1',
            "retweetAvatar":"",
            "retweetUserName":"",
            "retweetHandle":"",
            "retweetTime":"",
            "retweetText":"",
            "comments": '4.2k',
            "retuit": '3.5k',
            "likes": '37.5k',
        }
    }
) => {
    return(

        <li className="pt-3 pb-3 pe-3 d-flex flex-row">
            <div className="wd-bookmark-aside">
                <div className="wd-profile-img-holder ms-1 me-3">
                    <img className="wd-profile-img rounded-circle" height="45px" width="45px"
                         src={`${post.avatarIcon}`}></img>
                </div>
            </div>
            <div className="wd-bookmark-content">
                <div className="wd-authorbox d-flex flex-row justify-content-between">
                    <div className="wd-author-name-box">
                        <span className="wd-author-name fw-bold">{post.userName}</span>
                        {/*<i className="fas fa-check-circle ps-1"></i>*/}
                        <FontAwesomeIcon icon={faCheckCircle} className="text-primary ps-1"/>
                        <span className="wd-text-at text-muted ps-1">@{post.handle}</span>
                        <span className="wd-post-timestamp text-muted"> · {post.time}</span>
                    </div>
                    <div className="wd-more text-muted pe-1">
                        <FontAwesomeIcon icon={faEllipsisH}/>
                    </div>
                </div>
                <p className="wd-plaintext">
                    {post.text}
                </p>
                <div className={`wd-bookmark-img-box rounded ${post.image.length< 1? 'd-none': ''}`} style={{border:"solid" +
                        " 1px" +
                        " lightgray"}}>
                    <div className="wd-bookmark-img-holder">
                        <a href="{post.imageLink}">
                            <img className="wd-bookmark-img rounded-top" width="100%" height="100%"
                                 src={`${post.image}`}></img></a>
                    </div>
                    <div className="card-body p-3">
                        <div className="wd-img-title">{post.imageTitle}</div>
                        <div className="wd-img-brief opacity-75">{post.imageDesc}@{post.imageAuthor}</div>
                    </div>
                </div>
                <div className={`wd-retweet-box rounded ${post.retweetText.length< 1?'d-none':''}`} style={{border:"solid" +
                        " 1px" +
                        " lightgray"}}>
                    <div className="wd-author-name-box d-flex flex-row p-2">
                        <img className="rounded-circle" height="30px" width="30px"
                             src={`${post.retweetAvatar}`}></img>
                        <span className="wd-author-name fw-bold align-self-center">{post.retweetUserName}</span>
                        <FontAwesomeIcon icon={faCheckCircle} className="text-primary ps-1 align-self-center"/>
                        <span className="wd-text-at text-muted ps-1 align-self-center">@{post.retweetHandle}</span>
                        <span className="wd-post-timestamp text-muted ps-1 align-self-center"> · {post.retweetTime}</span>
                    </div>
                    <p className="wd-plaintext p-1">
                        {post.retweetText}
                    </p>
                </div>
                <div className="wd-action-container mt-3">
                    <ul className="wd-action-list list-unstyled pe-4 opacity-75 d-flex flex-row justify-content-between">
                        <li className="wd-icon-sm"><a href="#"></a>
                            {/*<i className="fas fa-comment"></i>*/}
                            <FontAwesomeIcon icon={faComment}/>
                            {post.comments}</li>
                        <li className="wd-icon-sm"><a href="#"></a>
                            {/*<i className="fas fa-retweet"></i>*/}
                            <FontAwesomeIcon icon={faRetweet}/>
                            {post.retuit}</li>
                        <li className="wd-icon-sm"><a href="#"></a>
                            {/*<i className="fas fa-heart"></i>*/}
                            <FontAwesomeIcon icon={faHeart}/>
                            {post.likes}</li>
                        <li className="wd-icon-sm"><a href="#"></a>
                            {/*<i className="fas fa-upload"></i>*/}
                            <FontAwesomeIcon icon={faUpload}/>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-primary mt-3">Show this thread</p>
                </div>
            </div>
        </li>
    );
};
export default PostItem;