export async function unFollowAuser(follower,followee){

    let db = new Localbase('Poetry');
    let alreadyFollowingObj = await db.collection('following').doc(follower).get(); 
    if(alreadyFollowingObj != null){
        let alreadyFollowing = alreadyFollowingObj.follows;           
        let result = [];
        alreadyFollowing.forEach(user => {
            if(user !== followee){
                result.push(user);
            }
        })    
        db.collection('following').doc(follower).update({follows : result});       
    } 
}
