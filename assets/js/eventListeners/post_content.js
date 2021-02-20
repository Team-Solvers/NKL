import {
    addPost
} from "../controllers/addPost.js";
import { addCards } from "../feedLoad.js";
import { addSuggestionCards } from "../getSuggestionCards.js";
import { likePost } from "../controllers/likePost.js";
import { addtoFavourites } from "../controllers/saveFavourites.js";
import { getFavouritePosts } from "../controllers/getFavourites.js";
import { addTrendingAvatars } from "../getTrendingCards.js"
import { getUserSpecificPost } from "../controllers/userSpecificPost.js" //remove this as not gonna be used here
import { getTrendingAuthors } from "../controllers/tredingAuthors.js"  //remove this as not gonna be used here

const postIcon = document.querySelector('.fa-paper-plane');
const postContent = document.querySelector('.content_textarea');
const postTitle = document.querySelector('.add-post-title');


const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

/**
 *     const tinyData = tinymce.get("post").getContent();
    console.log(tinyData);
 */


//add new post listner
postIcon.addEventListener('click', addPostTODB);
// postLikeButton.addEventListener('click',likePostTODB);

//like a post listner
//since the cards are loaded after async call 
addLikeAndSaveFavEventListener();

async function addLikeAndSaveFavEventListener() {
    let posts = await addCards(); //adds the cards after getting the array         
    let postLikeButtons = document.querySelectorAll('.like-count-section');
    let addToFavButtons = document.querySelectorAll('.add-tofav-section');

    postLikeButtons.forEach((postLikeButton, index) => {
        postLikeButton.addEventListener('click', likePostTODB);
    })

    addToFavButtons.forEach((addToFavButton) => {
        addToFavButton.addEventListener('click', addPostTOFavouritedTODB);
    })

    //add follow event-listner here
    let suggestions = await addSuggestionCards();

    let trendingAuthors = await addTrendingAvatars();
    let tredingAuthorAvatars = document.querySelectorAll('.top');
    tredingAuthorAvatars.forEach((avatar) => {
        avatar.addEventListener("click", goToPersonalPage);
    })

}

async function addPostTODB() {
    let postContentValue = postContent.value;
    let postTitleValue = postTitle.value;

    if (postContentValue.length > 7) {
        await addPost(username, postContentValue, postTitleValue);
    }

}

//change to async
function likePostTODB(e) {
    if (e.target.classList.contains("fa-heart")) {
        let nodeType = e.target.classList[0];
        let postId = e.target.classList[2];
        likePost(postId, username)
            .then(function (likeResult) {
                if (likeResult == "firstLike") {
                    let parentDiv = e.target.parentElement;
                    let likeCountDiv = parentDiv.children[1];
                    likeCountDiv.innerText = parseInt(likeCountDiv.innerText) + 1;
                    e.target.classList.toggle('post_liked');
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

function goToPersonalPage(e) {
    let avatardiv = e.target;
    let parentofAvatar = avatardiv.parentElement;
    let avatarUserName = parentofAvatar.children[2].innerText;
    //redirect to personal page based on this
    console.log(avatarUserName);
}

async function customGetPostsTest() {
    //function gets posts posted by single user
    let userPosts = await getUserSpecificPost();
    console.log(userPosts);
}

async function getTrendingAuthorsTest() {
    let trendingAuthors = await getTrendingAuthors();
    console.log(trendingAuthors);
}

async function AddtoFavouritesTest() {
    addtoFavourites("kidcore", "11eb6a569c8892e092174b98892e7e4f");
    addtoFavourites("kidcore", "11eb6a582f07aab091d60958a7319f81");
}

async function getFavouritePostsTest() {
    getFavouritePosts("natyman12");
}

// getTrendingAuthors();
// AddtoFavouritesTest();
// getFavouritePostsTest();

