export async function likePost(postId, userId) {
    let db = new Localbase('Poetry');
    let firstLike = await db.collection('likeActivity').doc(postId).get();
    let usersWhoLiked;
    console.log(firstLike);
    if(firstLike != null){
        usersWhoLiked = firstLike.usersWhoLiked;
        if(!usersWhoLiked.has(userId)){
            usersWhoLiked.add(userId);
        }
        db.collection('likeActivity').doc(postId).update({usersWhoLiked : usersWhoLiked});
    }
    else{
        usersWhoLiked = new Set();
        usersWhoLiked.add(userId);
        await db.collection('likeActivity').add({
            usersWhoLiked : usersWhoLiked
        },postId);
    }       
}