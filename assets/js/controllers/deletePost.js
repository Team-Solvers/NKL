export async function deletePost(post_id){
    let db = new Localbase('Poetry');    
    await db.collection('posts').doc(post_id).delete();
}