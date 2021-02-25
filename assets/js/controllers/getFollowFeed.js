export async function getFollowFeed(user_id){
    let db = new Localbase('Poetry');
    let allUsers = await db.collection('users').get({keys : true});
    let usersIfollow = await db.collection('following').doc(user_id).get();
    let usersIfollowArr = usersIfollow.follows;
    
    let row = await db.collection('userPreferences').doc(user_id).get(); 
    let likePrefsRow = row.userPrefs.likes;

    let followFeed = [];

    for(let i = 0; i < allUsers.length;i++){
        let user = allUsers[i];
        if(usersIfollowArr.indexOf(user.key) == -1 && (user.key != user_id)){
            let rowa = await db.collection('userPreferences').doc(user.key).get(); 
            let writePrefsRowa = rowa.userPrefs.posts;
            let userScore = getScore(likePrefsRow,writePrefsRowa);
            console.log(userScore);
            followFeed.push(user.key);
        }
    }    
    
    // followFeed.sort((a,b) => {
       
    // })

    return followFeed;
}

function getScore(like,posts){
    console.log(like,posts)
    let score = 0;
    for(let category in like){
        if(like[category] != 0 && posts[category]){
            score += 1;
        }
    }
    return score;
}