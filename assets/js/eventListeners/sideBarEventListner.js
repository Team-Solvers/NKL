import {getFullName} from "../controllers/getFullName.js"

const homeButton = document.querySelector(".home-btn");
const profileButton = document.querySelector(".profile-btn");
const savedButton = document.querySelector(".saved-btn");
const logoutButton = document.querySelector(".logout-btn");
const sidebarName = document.querySelector(".sidebar-avatar-name");

let username = Cookies.get('_poet');
if(!username){
    window.location.href = `./index.html`;
}

const urlParams = new URLSearchParams(window.location.search);
// const username = urlParams.get('username');

getFullName(username).then(fullName =>{
    sidebarName.innerText = fullName;
});

profileButton.addEventListener('click',passToProfilePage);
savedButton.addEventListener('click',passToSavedPage);
homeButton.addEventListener('click',passToHomePage);
logoutButton.addEventListener('click',signOut);

function passToProfilePage(e){
    window.location.href = `./profile.html`;
}

function passToSavedPage(e){
    window.location.href = `./savedPosts.html`;
}

function passToHomePage(e){
    window.location.href = `./feed.html`;
}

function signOut(){
    Cookies.remove('_poet');
    window.location.href = `./index.html`;
}