export async function getFollowFeed(user_id){
    let db = new Localbase('Poetry');
    let allUsers = await db.collection('users').get({keys : true});
    let usersIfollow = await db.collection('following').doc(user_id).get();
    let usersIfollowArr = usersIfollow.follows;
    
    let followFeed = [];
    allUsers.forEach(user => {
        if(usersIfollowArr.indexOf(user.key) == -1 && (user.key != user_id)){
            followFeed.push(user.key);
        }
    })
    console.log(followFeed);
}