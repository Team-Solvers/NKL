export async function followOtherUser(follower,followee){

    let db = new Localbase('Poetry');
    let alreadyFollowingObj = await db.collection('following').doc(follower).get(); 
    if(alreadyFollowingObj != null){
        let alreadyFollowing = alreadyFollowingObj.follows;   
        console.log(alreadyFollowing);
        if(alreadyFollowing.indexOf(followee) == -1){
            alreadyFollowing.push(followee);
            db.collection('following').doc(follower).update({follows : alreadyFollowing});
        }
        else{
            console.log('already following');
        }
    }
    else{
        db.collection('following').add({                        
            follows : [followee]
        },follower)
    }
    

}
