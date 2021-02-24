import { followOtherUser } from "./follow.js";

export async function getPost(user_id){
    let db = new Localbase('Poetry');    
    //to be changed to following from db
    //create a user that follows everyone to add every post not seen on
    let friends = ['kidcore','natyman12']

    let usersBeingFollowed = new Set();
    usersBeingFollowed.add('kidcore');
    usersBeingFollowed.add('natyman12');

    let allPosts = [];
    let feed = [];    

    await db.collection('posts').get({ keys: true }).then(allPostsFromDB => {
        allPosts = allPostsFromDB;
      })    
    
    // console.log(allPosts);
    allPosts.forEach(post => { 
        // console.log(post,post.data.visible)
        if(post.data.visible != false){
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