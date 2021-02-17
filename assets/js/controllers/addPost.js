import {reloadCards} from "../controllers/reloadFeedCards.js";

export async function addPost(userid, content,title) {
    let db = new Localbase('Poetry');
    await db.collection('posts').add({
        content: content,
        user_id: userid,
        post_time: Date.now(),
        post_title : title
    });
    reloadCards(userid,content,title);
}