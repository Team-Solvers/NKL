import {getFavouritePosts} from "../controllers/getFavourites.js";
import {getPostFromPostId} from "../controllers/getPostFromId.js";
import {getProfilePostCard} from "../components/profilePostCards.js";
import {deletePost} from "../controllers/deletePost.js";
import {getUserStats} from "../controllers/userStats.js";
import{goToPersonalPage} from "./profileCardEventListners.js";
import { likePost } from "../controllers/likePost.js";
import { addtoFavourites } from "../controllers/saveFavourites.js";
import { getFullName } from "../controllers/getFullName.js";

const postMainDiv = document.querySelector(".posts-wrapper");
const searchInput = document.querySelector('.Search-input');
let query = ""

searchInput.addEventListener('keyup',getSearchResults);

const urlParams = new URLSearchParams(window.location.search);
let username = Cookies.get('_poet');
if(!username){
    window.location.href = `./index.html`;
}

let imgLink = "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80";

addProfilesCards("");

function getSearchResults(e){
    let query = e.target.value;    
    if(query.length > 0){        
        addProfilesCards(query.toLowerCase())
    }
    else{
        addProfilesCards("")
    }
}

async function addProfilesCards(query){
    let postsIdsFromDB = await getFavouritePosts(username);          
    postMainDiv.innerHTML = "";          
    for(let post of postsIdsFromDB){     
        let title = post.data.post_title.toLowerCase();
        let author = post.data.user_id.toLowerCase();                         

        if(post.data.visible && (title.indexOf(query) != -1 || author.indexOf(query) != -1 || query === "")){
            let postCardFromDB = getPostCard(imgLink,post.data.post_title,post.data.user_id,'moment(postTime).format("dd hA ")',post.data.content,post.data.like_count,post.key,post.isLiked,post.isInFavs);        
            // let postCardFromDB = getPostCard(imgLink,post.post_title,post.user_id,'moment(postTime).format("dd hA ")',post.content,post.like_count,post.key,post.isLiked,post.isInFavs);                    
            postMainDiv.append( postCardFromDB);        
        }                               
    }    

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
   
}


function likePostTODB(e) {
    // console.log(e.target.classList)
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
    if (e.target.classList.contains("fa-star")) {
        let postId = e.target.classList[2];
        let parentDiv = e.target.parentElement;
        let starElement = parentDiv.children[0];  
        let favResult = addtoFavourites(username, postId);
        starElement.classList.toggle("post_favourited");
    }
}


function addImageToPersonalPageEventListner(images){   
    // console.log(images); 
    images.forEach(image => {
        image.addEventListener('click',goToPersonalPage);
    })
}

