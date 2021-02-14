export async function addtoFavourites(userId, postId) {
    let db = new Localbase('Poetry');    
    let existsInDB = await db.collection('favourites').doc(userId).get(); 

    if(existsInDB != null){
        let savedPostsDB = existsInDB.savedPosts;
        savedPostsDB.add(postId);
        db.collection('favourites').doc(userId).update({savedPosts : savedPostsDB});
    }
    else{
        let savedPosts = new Set();
        savedPosts.add(postId);
        await db.collection('favourites').add({                    
            savedPosts: savedPosts
        },userId);
    }   
}