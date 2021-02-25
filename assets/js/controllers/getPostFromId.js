import { followOtherUser } from "./follow.js";

export async function getPostFromPostId(post_id){
    let db = new Localbase('Poetry');        
    let post =  await db.collection('posts').doc(post_id).get();
    return post;
}