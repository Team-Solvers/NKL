import {
    addPost
} from "../controllers/addPost.js";
import { likePost } from "../controllers/likePost.js";
import {addCards} from "../feedLoad.js";
import {getUserSpecificPost} from "../controllers/userSpecificPost.js" //remove this as not gonna be used here
import {getTrendingAuthors} from "../controllers/tredingAuthors.js"  //remove this as not gonna be used here

const postIcon = document.querySelector('.fa-paper-plane');
const postContent = document.querySelector('.content_textarea');
const postTitle = document.querySelector('.add-post-title');


//add new post listner
postIcon.addEventListener('click', addPostTODB);
// postLikeButton.addEventListener('click',likePostTODB);

//like a post listner
//since the cards are loaded after async call 
addLikeEventListener();
async function addLikeEventListener() {    
    let posts = await addCards(); //adds the cards after getting the array         
    let postLikeButtons = document.querySelectorAll('.like-count-section'); 
    postLikeButtons.forEach((postLikeButton,index) => {                        
        postLikeButton.addEventListener('click',likePostTODB);
    })    
}



async function addPostTODB() {
    let postContentValue = postContent.value;
    let postTitleValue = postTitle.value;
    
    if (postContentValue.length > 7) {
        await addPost("natyman12", postContentValue,postTitleValue);
    }
}

//change to async
function likePostTODB(e){    
    if(e.target.classList.contains("fa-heart")){
        let nodeType = e.target.classList[0];
        let postId = e.target.classList[2];    
        let username = 'natyman12';          
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


async function customGetPostsTest(){
    let userPosts = await getUserSpecificPost();
    console.log(userPosts);
}

async function getTrendingAuthorsTest(){
    let trendingAuthors = await getTrendingAuthors();
    console.log(trendingAuthors);
}

getTrendingAuthors();

