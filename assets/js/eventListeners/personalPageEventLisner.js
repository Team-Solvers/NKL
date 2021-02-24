import {getUserSpecificPost} from "../controllers/userSpecificPost.js";
import {getProfilePostCard} from "../components/profilePostCards.js";
import {deletePost} from "../controllers/deletePost.js";
import {getUserStats} from "../controllers/userStats.js";
import{goToPersonalPage} from "./profileCardEventListners.js";
import { likePost } from "../controllers/likePost.js";
import { addtoFavourites } from "../controllers/saveFavourites.js";
import { getFullName } from "../controllers/getFullName.js";

const postMainDiv = document.querySelector(".my-posts");
const fullNameDiv = document.querySelector(".content_avatar_name_propic");

const urlParams = new URLSearchParams(window.location.search);
const profileUsername = urlParams.get('profileuser');
const username = urlParams.get('username');

let imgLink = "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80";

addProfilesCards();
changeNameHolder();

async function addProfilesCards(){
    let postsFromDB = await getUserSpecificPost(profileUsername);        
    postsFromDB.forEach(post => {                
        let postTime = new Date(post.data.post_time * 1000);            
        let postCardFromDB = getPostCard(imgLink,post.data.post_title,post.data.user_id,'moment(postTime).format("dd hA ")',post.data.content,post.data.like_count,post.key,post.isLiked,post.isInFavs);        
        postMainDiv.append( postCardFromDB);
    })

    let postLikeButtons = document.querySelectorAll('.like-count-section'); 
    let addToFavButtons = document.querySelectorAll('.add-tofav-section');  

    postLikeButtons.forEach((postLikeButton,index) => {                        
        postLikeButton.addEventListener('click',likePostTODB);
    })    

    addToFavButtons.forEach((addToFavButton) => {
        addToFavButton.addEventListener('click',addPostTOFavouritedTODB);
    })
    
    let images = document.querySelectorAll('.go-profile');    
    let adding = await addImageToPersonalPageEventListner(images)

    return postsFromDB;
}

async function changeNameHolder(){
    let fullName = await getFullName(profileUsername);
    fullNameDiv.innerHTML = fullName;
}

function likePostTODB(e){    
    if(e.target.classList.contains("fa-heart")){
        let nodeType = e.target.classList[0];
        let postId = e.target.classList[2];            
        likePost(postId,username)
        .then(function(likeResult) {            
            if(likeResult == "firstLike"){
                let parentDiv = e.target.parentElement;
                let likeCountDiv = parentDiv.children[1];
                likeCountDiv.innerText = parseInt(likeCountDiv.innerText) + 1;
                e.target.classList.toggle('post_liked');
            }
        });
    }            
}

async function addPostTOFavouritedTODB(e){
    console.log(e.target);
    if(e.target.classList.contains("fa-star")){                
        let postId = e.target.classList[2];    
        let parentDiv = e.target.parentElement;
        let starElement = parentDiv.children[0];
        if(!starElement.classList.contains("post_favourited")){
            starElement.classList.toggle("post_favourited");
        }                
        addtoFavourites(username,postId);
    }  
}

function addImageToPersonalPageEventListner(images){   
    console.log(images); 
    images.forEach(image => {
        image.addEventListener('click',goToPersonalPage);
    })
}


async function updateStats(){
    let stats = await getUserStats(profileUsername);
    let followerCountDiv = document.querySelector('.followersNumber');
    let followingCountDiv = document.querySelector('.followingNumber');
    let postCountDiv = document.querySelector('.postNumber');

    followerCountDiv.innerText = stats.followerCount;
    followingCountDiv.innerText = stats.followingCount;
    postCountDiv.innerText = stats.postCount;
    console.log(stats);
}


updateStats()