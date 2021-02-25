import {reloadCards} from "../controllers/reloadFeedCards.js";
import {Post} from "../models/post.js"

export async function addPost(userid, content,title,category) {
    let db = new Localbase('Poetry');    
    let newPost = new Post(content,userid,Date.now(),title,true,category);    
    await db.collection('posts').add(newPost);    

    //getting the id of post just inserted
    let posts = await db.collection('posts').get({ keys: true });    
    let currentPost = posts[posts.length - 1];    

    let row = await db.collection('userPreferences').doc(userid).get(); // doc(postId).update({usersWhoLiked : usersWhoLiked});    

    let contentRow = row.userPrefs.posts;        
    contentRow[category] += 1;    
    console.log(contentRow[category]);
    db.collection('userPreferences').doc(userid).update({userPrefs : row.userPrefs});

    //get id of the post just added from db
    reloadCards(userid,content,title,currentPost.key);
    return currentPost.key;
}