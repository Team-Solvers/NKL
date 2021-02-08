import {reloadCards} from "../controllers/reloadFeedCards.js";

export async function addPost(userid, content) {
    let db = new Localbase('Poetry');
    await db.collection('posts').add({
        content: content,
        user_id: userid,
        post_time: Date.now(),
        like_count: 0
    });
    reloadCards(userid,content);
}