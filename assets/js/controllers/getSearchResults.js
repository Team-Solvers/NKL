export async function getSearchPost(titleQuery,user_id){
    let db = new Localbase('Poetry');        
    let allPosts = [];
    let livePosts = [];       
    let feed = []; 

    allPosts =  await db.collection('posts').get({ keys: true });
    // console.log(allPosts);
    allPosts.forEach(post => { 
        // console.log(post,post.data.visible)
        if(post.data.visible != false){
            livePosts.push(post);    
        }                             
    })     

    livePosts.forEach(post => {
        let title = post.data.post_title.toLowerCase();        
        titleQuery = titleQuery.toLowerCase();
        // console.log(`${title},${titleQuery},${title.indexOf(titleQuery)}`);
        if(title.indexOf(titleQuery) != -1){
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
    
    // console.log(feed);
    return feed;

}