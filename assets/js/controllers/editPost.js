let db = new Localbase('Poetry');
export async function editPost(postId,newTitle,newContent) {     
    let post = await db.collection('posts').doc(postId).get();
    post.post_title = newTitle;
    post.content = newContent;      
    await db.collection('posts').doc(postId).update(post);
}

export async function editProfile(username,newFullName,newBio) {     
    let user = await db.collection('users').doc(username).get();
    user.full_name = newFullName;
    user.bio = newBio;
    await db.collection('users').doc(username).update(user);
}