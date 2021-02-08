import {addPost} from "../controllers/addPost.js";

const postIcon =  document.querySelector('.fa-paper-plane');
const textArea  = document.querySelector('.content_textarea');

postIcon.addEventListener('click',addPostTODB);

console.log("page loaded");

async function addPostTODB(){    
    let postContent = textArea.value;
    if(postContent.length > 7){
        await addPost("kidcore",postContent);
    }    
}