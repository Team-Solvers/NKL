export async function getFavouritePosts(userId) {
    let db = new Localbase('Poetry');    
    let existsInDB = await db.collection('favourites').doc(userId).get(); 

    if(existsInDB != null){
        let savedPostsDB = existsInDB.savedPosts;
        //check if a post has not been deleted before returning
        //and return the real post not just ids
        return savedPostsDB;
    }
    else{
        return new Set();
    }   
}