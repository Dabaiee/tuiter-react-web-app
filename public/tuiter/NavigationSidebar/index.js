const NavigationSidebar = (status) => {
    return(`
   <div class="list-group">
    <a class="list-group-item d-flex flex-row p-3" href="https://twitter.com/">
        <div style="height: 30px;width: 30px"><i class="fab fa-twitter fa-lg me-2"></i></div> 
        <p class="d-none d-lg-none d-xl-inline m-0"></p>
    </a>
    ${status ==='home' ? `<a class="list-group-item active  d-flex flex-row p-3" href="#">`
        :`<a class="list-group-item d-flex flex-row p-3" href="#">`}
        <div style="height: 30px;width: 30px"><i class="fa-sharp fa-solid fa-house-chimney fa-lg me-2"></i></div>
        
        <p class="d-none d-lg-none d-xl-inline m-0">Home</p>
    </a>
    ${status ==='explore' ? `<a class="list-group-item active  d-flex flex-row p-3" href="#">`
        :`<a class="list-group-item d-flex flex-row p-3" href="#">`}
        <div style="height: 30px;width: 30px"><i class="fa-solid fa-hashtag fa-lg me-2"></i></div> 
        
        <p class="d-none d-lg-none d-xl-inline m-0">Explore</p>
    </a>
    <a class="list-group-item d-flex flex-row p-3" href="/">
        <div style="height: 30px;width: 30px"><i class="fa-sharp fa-solid fa-bell fa-lg me-2"></i></div>
        <p class="d-none d-lg-none d-xl-inline m-0">Notifications</p>
    </a>
    <a class="list-group-item d-flex flex-row p-3" href="/">
        <div style="height: 30px;width: 30px"><i class="fa-solid fa-message fa-lg me-2"></i></div> 
        <p class="d-none d-lg-none d-xl-inline m-0">Messages</p>
    </a>
    <a class="list-group-item d-flex flex-row p-3" href="/">
        <div style="height: 30px;width: 30px"><i class="fa-solid fa-bookmark fa-lg me-2"></i></div> 
        <p class="d-none d-lg-none d-xl-inline">Bookmarks</p>
    </a>
    <a class="list-group-item d-flex flex-row p-3" href="/">
        <div style="height: 30px;width: 30px"><i class="fa-solid fa-list fa-lg me-2"></i></div> 
        <p class="d-none d-lg-none d-xl-inline m-0">Lists</p>
    </a>
    <a class="list-group-item d-flex flex-row p-3" href="/">
        <div style="height: 30px;width: 30px"><i class="fa-solid fa-user fa-lg me-2"></i></div> 
        <p class="d-none d-lg-none d-xl-inline m-0">Profile</p>
    </a>
    <a class="list-group-item d-flex flex-row p-3" href="/">
        <div style="height: 30px;width: 30px"><i class="fas fa-ellipsis-h fa-lg me-2"></i></div> 
        <p class="d-none d-lg-none d-xl-inline m-0">More</p>
    </a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;