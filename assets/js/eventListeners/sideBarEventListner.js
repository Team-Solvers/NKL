const homeButton = document.querySelector(".home-btn");
const profileButton = document.querySelector(".profile-btn");
const savedButton = document.querySelector(".saved-btn");


const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

profileButton.addEventListener('click',passToProfilePage);
savedButton.addEventListener('click',passToSavedPage);
homeButton.addEventListener('click',passToHomePage);

function passToProfilePage(e){
    window.location.href = `./profile.html?username=${username}`;
}

function passToSavedPage(e){
    // window.location.href = `./saved.html?username=${username}`;
}

function passToHomePage(e){
    window.location.href = `./feed.html?username=${username}`;
}

