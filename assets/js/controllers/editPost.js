let db = new Localbase('Poetry');
export async function editPost(postId,newTitle,newContent) {     
    let post = await db.collection('posts').doc(postId).get();
    post.post_title = newTitle;
    post.content = newContent;  
    await db.collection('posts').doc(postId).update(post);
}