const postMainDiv = document.querySelector(".post-card");

let imgLink = "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80";
export async function reloadCards(user_id,content,title){
    let postTime = new Date(Date.now() * 1000);
    let postCardFromDB = getPostCard(imgLink,title,user_id,postTime,content,0,0,false,false);
    postMainDiv.prepend(postCardFromDB);
}
