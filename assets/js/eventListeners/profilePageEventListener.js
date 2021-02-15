import {getUserSpecificPost} from "../controllers/userSpecificPost.js";
import {getProfilePostCard} from "../components/profilePostCards.js";
import {deletePost} from "../controllers/deletePost.js";
import {getUserStats} from "../controllers/userStats.js";

const postMainDiv = document.querySelector(".my-posts");

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

let imgLink = "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80";

// loadSelfPostCards();

async function refreshSelfCards(){
    console.log("refreshing");
    postMainDiv.innerHTML = "";
    let userPosts = await getUserSpecificPost(username);    
    userPosts.forEach(post => {
        let postTime = new Date(post.data.post_time * 1000);            
        let postCardFromDB = getProfilePostCard(imgLink,post.data.post_title,post.data.user_id,'moment(postTime).format("dd hA ")',post.data.content,post.data.like_count,post.key,post.isLiked,post.isInFavs);                
        postMainDiv.innerHTML += postCardFromDB;
    })
}

async function loadSelfPostCards(){
    await refreshSelfCards();

    //delete event listners
    let cards = document.querySelectorAll(".icon-trash");
    cards.forEach(card => {
        card.addEventListener('click',deletePostFromDB);
    })
}



async function deletePostFromDB(e){
    console.log('clicked');
    let postIcon = e.target;
    let postId = postIcon.classList[2];
    await deletePost(postId);
    loadSelfPostCards();
}

async function updateStats(){
    let stats = await getUserStats(username);
    console.log(stats);
}

updateStats()