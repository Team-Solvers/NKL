export async function deletePost(post_id){
    let db = new Localbase('Poetry');    
    let post_content = await db.collection('posts').doc(post_id).get();
    post_content.visible = false;
    await db.collection('posts').doc(post_id).update(post_content);
}