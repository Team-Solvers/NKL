import { followOtherUser } from "./follow.js";

export async function getUserSpecificPost(user_id){
    let db = new Localbase('Poetry');        

    let allPosts = [];
    let feed = [];        
    
    allPosts = await db.collection('posts').get({ keys: true });    
    
    allPosts.forEach(post => {
        if(post.data.user_id === user_id){
            feed.push(post);
        }
    })

    for(let i = 0; i < feed.length; i++){
        let currPostToAddLike = feed[i];
        let firstLike = await db.collection('likeActivity').doc(currPostToAddLike.key + "").get();
        let likeCount = 0;            
        let isLiked = false;        
        if(firstLike != null){
            likeCount = firstLike.usersWhoLiked.size;            
            let usersWhoLikedAtFeed = firstLike.usersWhoLiked;
            if(usersWhoLikedAtFeed.has(user_id)){
                isLiked = true;
            }
        }        

        let userFavObj = await db.collection('favourites').doc(user_id).get();
        let userFavs = userFavObj.savedPosts;
        let isInFavs = false;
        if(userFavs.has(currPostToAddLike.key)){
            isInFavs = true;
        };    
        
        feed[i].data.like_count = likeCount;
        feed[i].isLiked = isLiked;
        feed[i].isInFavs = isInFavs;        
    }    
    
    feed.sort(function(a,b){
        return a.data.post_time > b.data.post_time ? -1 : 1;
    })
    return feed
}