import PostItem from "./PostItem.js";
import posts from "./posts.js"

const Index = () => {
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

export default Index ;