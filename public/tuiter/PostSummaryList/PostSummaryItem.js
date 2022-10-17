const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item d-flex flex-row flex-nowrap justify-content-between p-2 ps-3 pe-3">
      <div class="wd-post-content">
        <div class="wd-post-topic text-muted">${post.topic}</div>
        <div class="wd-post-authorbox">
          <div class="wd-post-author">${post.userName}
            <i class="fab fa-google pe-1"></i>
            <span class="wd-post-timestamp text-muted"> ·${post.time}</span>
            <i class="fas fa-check-circle ps-2"></i>
          </div>
    
        </div>
        <div class="wd-post-title">${post.title}</div>
      </div>
      <div class="wd-post-aside">
        <img class="wd-post-img rounded-3 mt-2 mb-2" src="${post.image}" width="75" height="75"></img>
      </div>
    </li>`
    );
}
export default PostSummaryItem ;