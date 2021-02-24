import {reloadCards} from "../controllers/reloadFeedCards.js";
import {Post} from "../models/post.js"

export async function addPost(userid, content,title) {
    let db = new Localbase('Poetry');
    let newPost = new Post(content,userid,Date.now(),title,true);
    await db.collection('posts').add(newPost);
    //get id of the post just added from db
    reloadCards(userid,content,title);
}