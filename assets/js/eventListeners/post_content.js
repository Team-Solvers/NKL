import {
    addPost
} from "../controllers/addPost.js";
import {
    addCards, addSearchCards
} from "../feedLoad.js";
import {
    addSuggestionCards
} from "../getSuggestionCards.js";
import {
    likePost
} from "../controllers/likePost.js";
import {
    addtoFavourites
} from "../controllers/saveFavourites.js";
import {
    getFavouritePosts
} from "../controllers/getFavourites.js";
import {
    addTrendingAvatars
} from "../getTrendingCards.js"
import {
    getUserSpecificPost
} from "../controllers/userSpecificPost.js" //remove this as not gonna be used here
import {
    getTrendingAuthors
} from "../controllers/tredingAuthors.js" //remove this as not gonna be used here
import {
    goToPersonalPage
} from "./profileCardEventListners.js"
import {
    followOtherUser
} from "../controllers/follow.js"



const postIcon = document.querySelector('.fa-paper-plane');
const postContent = document.querySelector('.content_textarea');
const postTitle = document.querySelector('.add-post-title');
const categoryButtons = document.querySelectorAll('.cat-btn');
const searchInput = document.querySelector('.Search-input');

let username = Cookies.get('_poet');
if (!username) {
    window.location.href = `./index.html`;
}
// console.log(username);
const urlParams = new URLSearchParams(window.location.search);
// const username = urlParams.get('username');

let currentPostCategory = "Blank verse";

searchInput.addEventListener('keyup',getSearchResults);

categoryButtons.forEach(catButton => {
    catButton.addEventListener('click', changeCategoryType)
})


function changeCategoryType(e) {
    currentPostCategory = e.target.value;
}

//add new post listner
postIcon.addEventListener('click', addPostTODB);
// postLikeButton.addEventListener('click',likePostTODB);

//like a post listner
//since the cards are loaded after async call 
addLikeAndSaveFavEventListener(true);
loadSuggestionTab();


async function getSearchResults(e){
    let query = e.target.value;
    if(query.length > 0){
        // console.log(query);
        addSearchCards(query,username);
    }
    else{
        addLikeAndSaveFavEventListener(false);
    }
}

async function addLikeAndSaveFavEventListener(firstTime) {
    let posts = await addCards(); //adds the cards after getting the array    

    if(firstTime){
        let trendingAuthors = await addTrendingAvatars();
    }    

    let postLikeButtons = document.querySelectorAll('.like-count-section');
    let addToFavButtons = document.querySelectorAll('.add-tofav-section');

    postLikeButtons.forEach((postLikeButton, index) => {
        postLikeButton.addEventListener('click', likePostTODB);
    })

    addToFavButtons.forEach((addToFavButton) => {
        addToFavButton.addEventListener('click', addPostTOFavouritedTODB);
    })

    //add follow event-listner here

    let images = document.querySelectorAll('.go-profile');
    // console.log(images);
    let adding = await addImageToPersonalPageEventListner(images); //adding event listner to images; 
}

async function loadSuggestionTab() {
    let suggestions = await addSuggestionCards();
    let followButtons = document.querySelectorAll('.follow-btn');
    followButtons.forEach((followBtn) => {
        followBtn.addEventListener('click', followUnfollow);
    });
}

async function addImageToPersonalPageEventListner(images) {
    images.forEach(image => {
        image.addEventListener('click', goToPersonalPage);
    })
}

async function addPostTODB() {
    const tinyData = tinymce.get("post").getContent();
    let postContentValue = tinyData;
    let postTitleValue = postTitle.value;

    if (validatePost(postContentValue, postTitleValue)) {
        postIcon.style.color = 'black';
        let postid = await addPost(username, postContentValue, postTitleValue, currentPostCategory);
        let postLikeButtons = document.querySelectorAll('.like-count-section');
        let addToFavButtons = document.querySelectorAll('.add-tofav-section');

        postLikeButtons.forEach((postLikeButton, index) => {
            postLikeButton.addEventListener('click', likePostTODB);
        })

        addToFavButtons.forEach((addToFavButton) => {
            addToFavButton.addEventListener('click', addPostTOFavouritedTODB);
        })
        tinymce.get("post").setContent("")
        postTitle.value = "";

    }
    else {
        postIcon.style.color = 'red';
    }


}

function validatePost(content, title) {
    let lineLength = Math.max(content.split("<br />").length - 1,content.split("<div>").length - 1,content.split("<p>").length - 1  )    
    // console.log(content)
    // console.log(lineLength);
    if (title.length > 0 && lineLength >= 2) {
        return true;
    }
    return false;
}

//change to async
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
                } else if (likeResult == "postUnliked") {
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

async function getTrendingAuthorsTest() {
    let trendingAuthors = await getTrendingAuthors();
    // console.log(trendingAuthors);
}

async function AddtoFavouritesTest() {
    addtoFavourites("kidcore", "11eb6a569c8892e092174b98892e7e4f");
    addtoFavourites("kidcore", "11eb6a582f07aab091d60958a7319f81");
}

async function getFavouritePostsTest() {
    getFavouritePosts("natyman12");
}


async function followUnfollow(e) {
    let userToFollow = e.target.classList[0];
    await followOtherUser(username, userToFollow);
    e.target.parentElement.classList.toggle("feed-delete");
    // loadSuggestionTab();
}