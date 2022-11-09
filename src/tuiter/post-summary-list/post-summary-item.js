import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item d-flex flex-row flex-nowrap justify-content-between p-2 ps-3 pe-3">
            <div className="wd-post-content">
                <div className="wd-post-topic text-muted">{post.topic}</div>
                <div className="wd-post-authorbox">
                    <div className="wd-post-author">{post.userName}
                        <i className="fab fa-google pe-1"></i>
                        <span className="wd-post-timestamp text-muted"> ·{post.time}</span>
                        <i className="fas fa-check-circle ps-2"></i>
                    </div>

                </div>
                <div className="wd-post-title">{post.tuit}</div>
            </div>
            <div className="wd-post-aside">
                <img className="wd-post-img rounded-3 mt-2 mb-2" src={`${post.image}`} width="75" height="75"></img>
            </div>
        </li>
    );
};
export default PostSummaryItem;