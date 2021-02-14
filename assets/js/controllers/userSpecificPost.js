import { followOtherUser } from "./follow.js";

//TODO: accept user id 
export async function getUserSpecificPost(){
    let db = new Localbase('Poetry');
    let user_id = 'kidcore';

    //to be changed to following from db
    //create a user that follows everyone to add every post not seen on    

    let allUserPosts = [];
    let userFeed = [];    

    await db.collection('posts').get({ keys: true }).then(allPostsFromDB => {
        allUserPosts = allPostsFromDB;
      })
    
      allUserPosts.forEach(post => {                      
        userFeed.push(post);    
    })        

    for(let i = 0; i < userFeed.length; i++){
        let currPostToAddLike = userFeed[i];
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
        userFeed[i].data.like_count = likeCount;
        userFeed[i].isLiked = isLiked;
    }    
    
    userFeed.sort(function(a,b){
        return a.data.post_time > b.data.post_time ? -1 : 1;
    })
    return userFeed
}