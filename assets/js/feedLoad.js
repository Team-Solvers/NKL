import {addSomeUsers} from "./controllers/dummyData.js";
import {loadDB} from "./controllers/loadDatabase.js";
import {getPost} from "./controllers/getPost.js";
import {followOtherUser} from "./controllers/follow.js";
import {addPost} from "./controllers/addPost.js";
import {likePost} from "./controllers/likePost.js";
import {getFollowFeed} from "./controllers/getFollowFeed.js";

// loadDB();
// addPost("natyman12","this is a post dummy");
// // addSomeUsers();
// followOtherUser('natyman12','lingeman69');
// likePost("11eb6a2f2c1da6c08d823ffa44a56a76","kidcore");
// getFollowFeed("natyman12");

let postMainDiv = document.querySelector(".post-card");
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

let imgLink = "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80";

export async function addCards(){
    let postsFromDB = await getPost(username);
    postsFromDB.forEach(post => {                
        let postTime = new Date(post.data.post_time * 1000);            
        let postCardFromDB = getPostCard(imgLink,post.data.post_title,post.data.user_id,'moment(postTime).format("dd hA ")',post.data.content,post.data.like_count,post.key,post.isLiked,post.isInFavs);        
        postMainDiv.innerHTML += postCardFromDB;
    })
    return postsFromDB;
}





