const homeButton = document.querySelector(".home-btn");
const profileButton = document.querySelector(".profile-btn");
const savedButton = document.querySelector(".saved-btn");
const logoutButton = document.querySelector(".logout-btn");
const sidebarName = document.querySelector(".sidebar-avatar-name");


const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

sidebarName.innerText = username;

profileButton.addEventListener('click',passToProfilePage);
savedButton.addEventListener('click',passToSavedPage);
homeButton.addEventListener('click',passToHomePage);
logoutButton.addEventListener('click',signOut);

function passToProfilePage(e){
    window.location.href = `./profile.html?username=${username}`;
}

function passToSavedPage(e){
    window.location.href = `./savedPosts.html?username=${username}`;
}

function passToHomePage(e){
    window.location.href = `./feed.html?username=${username}`;
}

function signOut(){
    window.location.href = `./index.html`;
}