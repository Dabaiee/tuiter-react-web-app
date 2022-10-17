import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
       <ul class="list-group list-unstyled">
           <a class="list-group-item d-flex gap-3 py-2"
               aria-current="true"  style="color: inherit">
                <strong>Who to follow</strong>
            </a>
           <!-- continue here -->
            ${
            who.map(one => {
                return(WhoToFollowListItem(one));
            }).join('')
        }
       </ul>
`); }

export default WhoToFollowList ;