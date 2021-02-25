let db = new Localbase('Poetry');
export async function unlikePost(postId, userId) {     
    let post = await db.collection('likeActivity').doc(postId).get();
    console.log(postId);

    return
    let category = await getPostCategory(postId);
    
    let usersWhoLiked;
    if (firstLike != null) {
        usersWhoLiked = firstLike.usersWhoLiked;
        console.log(usersWhoLiked);
        if (!usersWhoLiked.has(userId)) {
            usersWhoLiked.add(userId);            
            updatePreferences(userId,category);

        } else {
            return "alreadyLiked";
        }
        db.collection('likeActivity').doc(postId).update({
            usersWhoLiked: usersWhoLiked
        });
    } else {
        usersWhoLiked = new Set();
        usersWhoLiked.add(userId);
        await db.collection('likeActivity').add({
            usersWhoLiked: usersWhoLiked
        }, postId);
        updatePreferences(userId,category);
    }
    return "firstLike"
}

