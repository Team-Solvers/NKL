export async function addtoFavourites(userId, postId) {
    let db = new Localbase('Poetry');    
    let existsInDB = await db.collection('favourites').doc(userId).get(); 

    if(existsInDB != null){
        let savedPostsDB = existsInDB.savedPosts;
        if(!savedPostsDB.has(postId)){
            savedPostsDB.add(postId);
            db.collection('favourites').doc(userId).update({savedPosts : savedPostsDB});
            return "added to fav"
        }         
        else{
            savedPostsDB.delete(postId);
            db.collection('favourites').doc(userId).update({savedPosts : savedPostsDB});
            return "deleted from fav"
        }       

    }
    else{
        let savedPosts = new Set();
        savedPosts.add(postId);
        await db.collection('favourites').add({                    
            savedPosts: savedPosts
        },userId);
    }   
}