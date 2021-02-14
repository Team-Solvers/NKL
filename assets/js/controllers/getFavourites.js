export async function getFavouritePosts(userId) {
    let db = new Localbase('Poetry');    
    let existsInDB = await db.collection('favourites').doc(userId).get(); 

    if(existsInDB != null){
        let savedPostsDB = existsInDB.savedPosts;
        return savedPostsDB;
    }
    else{
        return new Set();
    }   
}