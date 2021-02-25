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
        // console.log(userFavObj);
        let userFavs = userFavObj.savedPosts;
        let isInFavs = false;
        if(userFavs.has(currPostToAddLike.key)){
            isInFavs = true;
        };    
        
        feed[i].data.like_count = likeCount;
        feed[i].isLiked = isLiked;
        feed[i].isInFavs = isInFavs;        
    }    
    
    let row = await db.collection('userPreferences').doc(user_id).get();
    let likePrefsRow = row.userPrefs.likes;
        
    feed.sort(function(a,b){
        let ascore = likePrefsRow[a.data.category];
        let bscore = likePrefsRow[b.data.category];

        let aposttime = a.data.post_time;
        let bposttime = b.data.post_time;
        if(!outOfWeek(aposttime) & outOfWeek(bposttime)){
            return -1;
        }
        else if(outOfWeek(aposttime) & !outOfWeek(bposttime)){
            return 1;
        }
        return ascore > bscore ? -1 : 1;
    })
    
    return feed
}


function outOfWeek(post_time){
    let weekInSecs = 604800;
    if((Date.now() - post_time) / 1000 <= weekInSecs){
        return false
    }
    return true;
}