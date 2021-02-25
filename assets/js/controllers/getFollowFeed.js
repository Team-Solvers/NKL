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
            console.log(user.key,userScore);
            if(userScore != 0){
                followFeed.push(user.key);
            }               
        }
    }    
    
    console.log(followFeed);
    // followFeed.sort((a,b) => {
       
    // })

    return followFeed;
}

function getScore(like,posts){      
    let score = 0;
    for(let category in like){
        console.log(like[category],posts[category])
        if(like[category] != 0 && posts[category] != 0){
            score += 1;
        }
    }
    return score;
}