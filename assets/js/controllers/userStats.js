export async function getUserStats(user_id){
    let db = new Localbase('Poetry');            
    let followerCount = 0;
    let followingCount = 0;
    let postCount = 0;    
    
    let allPosts = await db.collection('posts').get({ keys: true });    
    // console.log(allPosts);

    allPosts.forEach(post => {
        
        if(post.data.user_id === user_id && post.data.visible == true){
            postCount += 1;
        }
    })

    let usersIfollow = await db.collection('following').doc(user_id).get();
    // console.log(usersIfollow);
    followingCount = usersIfollow.follows.length;

    let allUserFollowStatusObj = await db.collection('following').get();
    allUserFollowStatusObj.forEach(user => {
        let userFollows = user.follows;
        if(userFollows.includes(user_id)){
            followerCount += 1;
        }
    })

    
    let userstatObj = {postCount,followingCount,followerCount};    
    return userstatObj;
}