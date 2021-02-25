import {
    getUserSpecificPost
} from "../controllers/userSpecificPost.js";
import {
    getProfilePostCard
} from "../components/profilePostCards.js";
import {
    getFollowComponent
} from "../components/followingProfileComponent.js";
import {
    deletePost
} from "../controllers/deletePost.js";
import {
    getUserStats
} from "../controllers/userStats.js";
import {
    getFullName
} from "../controllers/getFullName.js";
import {
    getUsersIFollow
} from "../controllers/getUsersIFollow.js";
import {
    unFollowAuser
} from "../controllers/unfollow.js";
import {
    likePost
} from "../controllers/likePost.js";
import {
    addtoFavourites
} from "../controllers/saveFavourites.js";
import {
    editPost
} from "../controllers/editPost.js"

import {getDailtyActivity} from "../controllers/getDailtyActivity.js"


const postMainDiv = document.querySelector(".my-posts");
const fullNameDiv = document.querySelector(".content_avatar_name_propic");
const editModalBtn = document.querySelector(".edit-modal-done");
let postBeingChangedID = 0;

editModalBtn.addEventListener('click', editPostToDB);

let followingTab = document.querySelector("#tabs-2");

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

let imgLink = "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80";

loadSelfPostCards();
changeNameHolder();
addUsersIfollow();
getDailtyActivity(username);

async function changeNameHolder() {
    let fullName = await getFullName(username);
    fullNameDiv.innerHTML = fullName;
}

async function refreshSelfCards() {
    postMainDiv.innerHTML = "";
    let userPosts = await getUserSpecificPost(username);
    userPosts.forEach(post => {
        let postTime = new Date(post.data.post_time * 1000);
        let postCardFromDB = getProfilePostCard(imgLink, post.data.post_title, post.data.user_id, 'moment(postTime).format("dd hA ")', post.data.content, post.data.like_count, post.key, post.isLiked, post.isInFavs);
        postMainDiv.innerHTML += postCardFromDB;
    })

    let postLikeButtons = document.querySelectorAll('.like-count-section');
    let addToFavButtons = document.querySelectorAll('.add-tofav-section');

    postLikeButtons.forEach((postLikeButton, index) => {
        postLikeButton.addEventListener('click', likePostTODB);
    })

    addToFavButtons.forEach((addToFavButton) => {
        addToFavButton.addEventListener('click', addPostTOFavouritedTODB);
    })

    const editBtns = document.querySelectorAll(".edit-btn");        

    editBtns.forEach(editBtn => {
        editBtn.addEventListener('click', setPostIdtoChange);
    })    

}

async function addUsersIfollow() {
    followingTab.innerHTML = "";
    let usersIfollow = await getUsersIFollow(username);
    usersIfollow.forEach((userIfollow) => {
        followingTab.innerHTML += getFollowComponent(userIfollow);
    })

    let unfollowBtns = document.querySelectorAll('.unfollow-btn');
    unfollowBtns.forEach((unfollowBtn) => {
        unfollowBtn.addEventListener('click', unfollowAuserFun);
    })
}


async function loadSelfPostCards() {
    await refreshSelfCards();
    //delete event listners
    let cards = document.querySelectorAll(".icon-trash");
    cards.forEach(card => {
        card.addEventListener('click', deletePostFromDB);
    })
}

async function deletePostFromDB(e) {
    let postIcon = e.target;
    let postId = postIcon.classList[2];
    let card = postIcon.parentElement.parentElement.parentElement;
    // card.classList.push("delete");
    card.classList.toggle('delete');
    await deletePost(postId);
    // loadSelfPostCards();
}

function likePostTODB(e) {
    console.log(e.target.classList)
     if (e.target.classList.contains("fa-heart")) {
        let nodeType = e.target.classList[0];
        let postId = e.target.classList[2];
        likePost(postId, username)
            .then(function (likeResult) {
                let parentDiv = e.target.parentElement;
                let likeCountDiv = parentDiv.children[1];
                if (likeResult == "firstLike") {                    
                    likeCountDiv.innerText = parseInt(likeCountDiv.innerText) + 1;
                    e.target.classList.toggle('post_liked');
                }
                else if(likeResult == "postUnliked") {
                    e.target.classList.toggle('post_liked');
                    likeCountDiv.innerText = parseInt(likeCountDiv.innerText) - 1;
                }
            });
    }
}



async function addPostTOFavouritedTODB(e) {
    console.log(e.target);
    if (e.target.classList.contains("fa-star")) {
        let postId = e.target.classList[2];
        let parentDiv = e.target.parentElement;
        let starElement = parentDiv.children[0];
        if (!starElement.classList.contains("post_favourited")) {
            starElement.classList.toggle("post_favourited");
        }
        addtoFavourites(username, postId);
    }
}


async function updateStats() {
    let stats = await getUserStats(username);
    let followerCountDiv = document.querySelector('.followersNumber');
    let followingCountDiv = document.querySelector('.followingNumber');
    let postCountDiv = document.querySelector('.postNumber');

    followerCountDiv.innerText = stats.followerCount;
    followingCountDiv.innerText = stats.followingCount;
    postCountDiv.innerText = stats.postCount;
}

function setPostIdtoChange(e) {
    let editClasses = e.target.classList;
    postBeingChangedID = editClasses[0];
    // console.log(postBeingChangedID);
}

async function editPostToDB(e) {
    await editPost(postBeingChangedID,"updated title 4","updated content");
    refreshSelfCards();
}

async function unfollowAuserFun(e) {
    let unfollowComp = e.target.parentElement;
    unfollowComp.classList.toggle('delete');
    unfollowComp.style.display = 'none';
    await unFollowAuser(username, e.target.classList[0]);
    // followingTab.innerHTML = "";
    // setTimeout(addUsersIfollow,0.001);
}

updateStats()