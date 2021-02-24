export async function getUsersIFollow(user_id){
    let db = new Localbase('Poetry');            
    let usersIfollowObj = await db.collection('following').doc(user_id).get();    
    let usersIfollow = usersIfollowObj.follows;
    return usersIfollow;
}