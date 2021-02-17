import {getTrendingAuthors} from "./controllers/tredingAuthors.js";
import {trendingAvatar} from "./components/trendingAvatar.js"

let postMainDiv = document.querySelector(".stories-wrapper");
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

let imgLink = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";

export async function addTrendingAvatars(){
    let trendingFromDB = await getTrendingAuthors();    
    trendingFromDB.forEach(author => {                                            
        let postCardFromDB = trendingAvatar(author);                 
        postMainDiv.innerHTML += postCardFromDB;
    });    
    return trendingFromDB;
}





