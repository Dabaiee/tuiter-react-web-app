const PostItem = (post) => {
    return(`
    <li class="list-group-item pt-3 pb-3 pe-3" style="display: flex;flex-direction: row;background-color: black">
        <div class="wd-bookmark-aside">
            <div class="wd-profile-img-holder ms-1 me-3">
                <img class="wd-profile-img rounded-circle" height="55px" width="55px" src="${post.avatarIcon}"></img>
            </div>
        </div>
        <div class="wd-bookmark-content">
            <div class="wd-authorbox" style="display: flex;flex-direction: row">
                <div class="wd-author-name-box">
                    <span class="wd-author-name fw-bold">${post.userName}</span>
                    <i class="fas fa-check-circle ps-1"></i>
                    <span class="wd-text-at text-muted">@${post.handle}</span>
                    <span class="wd-post-timestamp text-muted"> · ${post.time}</span>
                </div>
                <div class="wd-more text-muted pe-1" style="display: flex;flex: 1;justify-content: end;align-self: center">
                <i class="fas fa-ellipsis-h"></i></div>
            </div>
            <p class="wd-plaintext">
                ${post.text}
            </p>
            <div class="wd-bookmark-img-box rounded-4" style="border: 1px rgba(99, 99, 99, .5) solid">
                <div class="wd-bookmark-img-holder">
                    <a href="${post.imageLink}" >
                    <img class="wd-bookmark-img rounded-4" width="100%" height="100%"
                                                         src="${post.image}"></img></a>
                </div>
                <div class="card-body p-3">
                    <div class="wd-img-title text-white">${post.imageTitle}</div>
                    <div class="wd-img-brief opacity-25">${post.imageDesc}<br>@${post.imageAuthor}</div>
                </div>
                
            </div>
            <div class="wd-action-container mt-3">
                <ul class="wd-action-list list-unstyled pe-4 opacity-50" style="display: flex;flex-direction: row;justify-content: space-between">
                    <li class="wd-icon-sm"><a href="#"></a><i class="fas fa-comment"></i>&nbsp&nbsp${post.comments}</li>
                    <li class="wd-icon-sm"><a href="#"></a><i class="fas fa-retweet"></i>&nbsp&nbsp${post.retuit}</li>
                    <li class="wd-icon-sm""><a href="#"></a><i class="fas fa-heart"></i>&nbsp&nbsp${post.likes}</li>
                    <li class="wd-icon-sm"><a href="#"></a><i class="fas fa-upload"></i></i></li>
<!--                     style="color: indianred-->
                </ul>
            </div>
        </div>
    </li>`
    );
}
export default PostItem ;