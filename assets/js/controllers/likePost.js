let db = new Localbase('Poetry');
export async function likePost(postId, userId) {     
    let firstLike = await db.collection('likeActivity').doc(postId).get();
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

async function updatePreferences(userId,category) {    
    let row = await db.collection('userPreferences').doc(userId).get();
    let contentRow = row.userPrefs.likes;
    console.log(contentRow,category);
    contentRow[category] += 1;
    db.collection('userPreferences').doc(userId).update({
        userPrefs: row.userPrefs
    });
}

async function getPostCategory(postId){
    let post = await db.collection('posts').doc(postId).get();
    console.log(post.category);
    return post.category;
}