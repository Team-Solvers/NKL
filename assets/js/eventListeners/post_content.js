import {
    addPost
} from "../controllers/addPost.js";
import { likePost } from "../controllers/likePost.js";
import {addCards} from "../feedLoad.js";

const postIcon = document.querySelector('.fa-paper-plane');
const textArea = document.querySelector('.content_textarea');


//add new post listner
postIcon.addEventListener('click', addPostTODB);

//like a post listner
//since the cards are loaded after async call 
addLikeEventListener();
async function addLikeEventListener() {    
    let posts = await addCards(); //adds the cards after getting the array    
    let checkbox = document.querySelectorAll(`.feed-bottom-left`);    
    checkbox.forEach((es,index) => {                        
        es.addEventListener('click',likePostTODB);
    })    
}



async function addPostTODB() {
    let postContent = textArea.value;
    if (postContent.length > 7) {
        await addPost("kidcore", postContent);
    }
}


function likePostTODB(e){    
    let nodeType = e.target.classList[0];
    let postId = e.target.classList[1];
    let parentDiv;

    if(nodeType == "like-click-PATH"){
        let parentDiv = e.target.parentElement.parentElement.parentElement
    }
    let username = 'lingeman69';
    likePost(postId,username);

}
