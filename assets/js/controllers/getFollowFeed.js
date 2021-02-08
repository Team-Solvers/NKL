export async function getFollowFeed(user_id){
    let db = new Localbase('Poetry');
    let allUsers = await db.collection('users').doc({keys : 'true'}).get();
    console.log(allUsers);
}