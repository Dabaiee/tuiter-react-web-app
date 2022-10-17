import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row w-100 ps-2 pe-0 mb-2">
                       <!-- search field and cog -->
                <div class="form-group p-0" style="display: flex;align-items: center;justify-content: center">
                    <form class="wd-search-bar w-100 rounded-pill" style="display: flex;background-color: white;height: 36px">
                        <i class="fas fa-search ps-3 align-self-center text-dark" id="wd-search-icon"></i>
                        <input class="wd-search-input ps-3 border-0" style="flex: 1;background-color: transparent" type="text" placeholder="Search"/></input>
                    </form>
<!--                  <i class="fas fa-search fa-lg align-self-center" id="wd-search-icon"></i>-->
<!--                  <input type="text" class="form-control rounded-pill" placeholder="Search" />-->
                  <i class="fas fa-cog fa-xl ms-3 form-control-feedback text-primary"></i>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-sm-none d-md-inline">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="wd-header-imgbox" style="position: relative;text-align: center">
<!--                <img class="wd-header-img" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">-->
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                 class="d-block" width="100%" height="100%" 
                 aria-label="Placeholder: Image cap" focusable="false" 
                 role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" 
                 style="font-size:1.125rem;text-anchor:middle">
<!--    <rect width="100%" height="100%" fill="#868e96" data-darkreader-inline-fill="" style="&#45;&#45;darkreader-inline-fill:#646b6f;"></rect>-->
<!--    <text x="50%" y="50%" fill="#dee2e6" dy=".3em" data-darkreader-inline-fill="" style="&#45;&#45;darkreader-inline-fill:#e1ddd8;">Image cap</text>-->
  </img>
                <h2 class="wd-header-img-title" style="position: absolute;bottom: 20px;left: 10px">SpaceX's Starship<img class="wd-header-title-icon"
                style="height: 45px;width: 45px;rotate: 45deg"
                src="https://freedesignfile.com/upload/2017/08/spaceship-icon-vector.png"></h2>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
