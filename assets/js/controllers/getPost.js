import { followOtherUser } from "./follow.js";

export async function getPost(user_id){
    let db = new Localbase('Poetry');        
    let allPosts = [];
    let feed = [];    

    allPosts =  await db.collection('posts').get({ keys: true });
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
    let scoreArr = [];    

        
    feed.sort(function(a,b){
        let ascore = getScore(likePrefsRow,a);
        let bscore = getScore(likePrefsRow,b);
        return ascore > bscore ? -1 : 1;
    })
    
    // console.log(row);    
    // feed.forEach(f => {
    //     console.log(f,getScore(likePrefsRow,f));
    // })
    return feed
}


function outOfWeek(post_time){
    let weekInSecs = 604800;
    if((Date.now() - post_time) / 1000 <= weekInSecs){
        return false
    }
    return true;
}

function getScore(likePrefsRow,post){
    let ascore = likePrefsRow[post.data.category];
    let aposttime = post.data.post_time;
    if(outOfWeek(aposttime)){
        return -1;
    }
    return ascore;
}