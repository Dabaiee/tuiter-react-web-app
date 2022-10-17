import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"
const PostSummaryList = () => {
    return (`
       <ul class="list-group mt-2">
           <!-- continue here -->
            ${
            posts.map(one => {
            return(PostSummaryItem(one));
        }).join('')
    }
       </ul>
`); }

export default PostSummaryList ;