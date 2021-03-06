import {getFollowFeed} from "./controllers/getFollowFeed.js";
import {SuggestionCard} from "./components/suggesstionCard.js"


let postMainDiv = document.querySelector(".suggestion-card-container");
let username = Cookies.get('_poet');
if(!username){
    window.location.href = `./index.html`;
}

let imgLink = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";

export async function addSuggestionCards(){    
    postMainDiv.innerHTML = "";
    let suggestionsFromDB = await getFollowFeed(username);    
    suggestionsFromDB.forEach(suggestion => {                                            
        let postCardFromDB = SuggestionCard(suggestion);         
        postMainDiv.innerHTML += postCardFromDB;
    });
    return suggestionsFromDB;
}





