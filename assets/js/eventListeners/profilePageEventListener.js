import {getUserSpecificPost} from "../controllers/userSpecificPost.js";
import {getProfilePostCard} from "../components/profilePostCards.js";
import {getFollowComponent} from "../components/followingProfileComponent.js";
import {deletePost} from "../controllers/deletePost.js";
import {getUserStats} from "../controllers/userStats.js";
import { getFullName } from "../controllers/getFullName.js";
import { getUsersIFollow } from "../controllers/getUsersIFollow.js";
import { unFollowAuser } from "../controllers/unfollow.js";


const postMainDiv = document.querySelector(".my-posts");
const fullNameDiv = document.querySelector(".content_avatar_name_propic");
let followingTab = document.querySelector("#tabs-2");

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

let imgLink = "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80";

loadSelfPostCards();
changeNameHolder();
addUsersIfollow();

async function changeNameHolder(){
    let fullName = await getFullName(username);
    fullNameDiv.innerHTML = fullName;
}

async function refreshSelfCards(){    
    postMainDiv.innerHTML = "";
    let userPosts = await getUserSpecificPost(username);    
    userPosts.forEach(post => {
        let postTime = new Date(post.data.post_time * 1000);            
        let postCardFromDB = getProfilePostCard(imgLink,post.data.post_title,post.data.user_id,'moment(postTime).format("dd hA ")',post.data.content,post.data.like_count,post.key,post.isLiked,post.isInFavs);                
        postMainDiv.innerHTML += postCardFromDB;
    })
}

async function addUsersIfollow(){    
    followingTab.innerHTML = "";
    let usersIfollow = await getUsersIFollow(username);    
    usersIfollow.forEach((userIfollow) => {      
        followingTab.innerHTML += getFollowComponent(userIfollow);
    })    

    let unfollowBtns = document.querySelectorAll('.unfollow-btn');
    unfollowBtns.forEach((unfollowBtn) => {
        unfollowBtn.addEventListener('click',unfollowAuserFun);
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
    let postIcon = e.target;
    let postId = postIcon.classList[2];
    let card = postIcon.parentElement.parentElement.parentElement;    
    // card.classList.push("delete");
    card.classList.toggle('delete');
    await deletePost(postId);
    // loadSelfPostCards();
}


async function updateStats(){
    let stats = await getUserStats(username);
    let followerCountDiv = document.querySelector('.followersNumber');
    let followingCountDiv = document.querySelector('.followingNumber');
    let postCountDiv = document.querySelector('.postNumber');

    followerCountDiv.innerText = stats.followerCount;
    followingCountDiv.innerText = stats.followingCount;
    postCountDiv.innerText = stats.postCount;    
}

async function unfollowAuserFun(e){    
    let unfollowComp = e.target.parentElement;    
    unfollowComp.classList.toggle('delete');
    unfollowComp.style.display = 'none';
    await unFollowAuser(username,e.target.classList[0]);               
    // followingTab.innerHTML = "";
    // setTimeout(addUsersIfollow,0.001);
}

updateStats()