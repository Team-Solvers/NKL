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
    editProfile
} from "../controllers/editPost.js"
import {
    editPost
} from "../controllers/editPost.js"

import { getDailtyActivity } from "../controllers/getDailtyActivity.js"
import { getPostFromPostId } from "../controllers/getPostFromId.js"


const postMainDiv = document.querySelector(".my-posts");
const fullNameDiv = document.querySelector(".content_avatar_name_propic");
const editDone = document.querySelector(".editpro-modal-done");
const deleteModalBtn = document.querySelector("#delete");
const searchInput = document.querySelector('.Search-input');



let bioSpan = document.querySelector(".bio-out");
let editFullNameInput = document.querySelector(".edit-name");
let editBioInput = document.querySelector(".edit-bio");
let editProfileBtn = document.querySelector(".close");

let editPostDone = document.querySelector(".edit-modal-done");
let editPostTitle = document.querySelector(".edit-post-title")
let followingTab = document.querySelector("#tabs-2");

searchInput.addEventListener('keyup', getSearchResults);
deleteModalBtn.addEventListener('click', deleteWithModal);

let postBeingChangedID = 0;
let postBeingDeletedID = 0;
let postBeingDeletedCard = '';

let shouldDelete = false;

let username = Cookies.get('_poet');
if (!username) {
    window.location.href = `./index.html`;
}

function getSearchResults(e) {
    let query = e.target.value;
    if (query.length > 0) {
        loadSelfPostCards(query.toLowerCase())
    }
    else {
        loadSelfPostCards("")
    }
}


let imgLink = "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80";

loadSelfPostCards("");
changeNameHolder();
addUsersIfollow();
getActivityfromDB();


editDone.addEventListener('click', changeBio);
editPostDone.addEventListener('click', editPostToDB);

async function getActivityfromDB() {
    let history = await getDailtyActivity(username);
    console.log(history)
    // let history = await [["Mar 5th, 2021", 2], ["Mar 5th, 2021", 1],["Mar 4th, 2021", 5]]
    let data = []
    let lables = []
    for (const item of history) {
        lables.push(item[0])
        data.push(item[1])
    }
    const ctx = document.getElementById('myChart').getContext('2d');

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels:lables,
            datasets: [{
                label: 'Activity',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data:data,
                fill: false
            }]
        },

        // Configuration options go here
        options: {}
    });
    return history;
}
async function changeBio() {
    let newName = editFullNameInput.value;
    let newBio = editBioInput.value;
    await editProfile(username, newName, newBio);
    changeNameHolder();
}

async function deleteWithModal() {
    postBeingDeletedCard.classList.toggle('delete');
    await deletePost(postBeingDeletedID);
}

async function changeNameHolder() {
    let userinfo = await getFullName(username);
    editFullNameInput.value = userinfo.full_name;
    editBioInput.value = userinfo.bio;
    fullNameDiv.innerHTML = userinfo.full_name;
    if (userinfo.bio) {
        bioSpan.textContent = userinfo.bio;
    }
}

async function refreshSelfCards(query) {
    postMainDiv.innerHTML = "";
    let userPosts = await getUserSpecificPost(username);
    userPosts.forEach(post => {
        let title = post.data.post_title.toLowerCase();
        let author = post.data.user_id.toLowerCase();

        if (post.data.visible && (title.indexOf(query) != -1 || author.indexOf(query) != -1 || query === "")) {
            let postCardFromDB = getProfilePostCard(imgLink, post.data.post_title, post.data.user_id, 'moment(postTime).format("dd hA ")', post.data.content, post.data.like_count, post.key, post.isLiked, post.isInFavs);
            // let postCardFromDB = getPostCard(imgLink,post.post_title,post.user_id,'moment(postTime).format("dd hA ")',post.content,post.like_count,post.key,post.isLiked,post.isInFavs);                    
            postMainDiv.innerHTML += postCardFromDB;
        };
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


async function loadSelfPostCards(query) {
    await refreshSelfCards(query);
    //delete event listners
    let cards = document.querySelectorAll(".icon-trash");
    cards.forEach(card => {
        card.addEventListener('click', deletePostFromDB);
    })
}

async function deletePostFromDB(e) {
    //setting global post to delete id
    let postIcon = e.target;
    let postId = postIcon.classList[2];
    let card = postIcon.parentElement.parentElement.parentElement;

    postBeingDeletedID = postId;
    postBeingDeletedCard = card;

    $("#confirm-delete").modal();
    return
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
                else if (likeResult == "postUnliked") {
                    e.target.classList.toggle('post_liked');
                    likeCountDiv.innerText = parseInt(likeCountDiv.innerText) - 1;
                }
            });
    }
}



async function addPostTOFavouritedTODB(e) {
    if (e.target.classList.contains("fa-star")) {
        let postId = e.target.classList[2];
        let parentDiv = e.target.parentElement;
        let starElement = parentDiv.children[0];
        let favResult = addtoFavourites(username, postId);
        starElement.classList.toggle("post_favourited");
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

async function setPostIdtoChange(e) {
    let editClasses = e.target.classList;
    postBeingChangedID = editClasses[0];
    let currentPost = await getPostFromPostId(postBeingChangedID);
    tinymce.get("post").setContent(currentPost.content);
    editPostTitle.value = currentPost.post_title;
}

async function editPostToDB(e) {
    let editedPostData = tinymce.get("post").getContent();
    let editedPostTitleData = editPostTitle.value;
    await editPost(postBeingChangedID, editedPostTitleData, editedPostData);
    refreshSelfCards("");
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