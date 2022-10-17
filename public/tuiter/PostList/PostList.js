import PostItem from "./PostItem.js";
import posts from "./posts.js"

const PostList = () => {
    return (`
       <ul class="list-group">
           <!-- continue here -->
            ${
            posts.map(one => {
            return(PostItem(one));
        }).join('')
    }
       </ul>
`); }

export default PostList ;