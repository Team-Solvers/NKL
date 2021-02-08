export async function getPost(){
    let db = new Localbase('Poetry');

    //to be changed to following from db
    //create a user that follows everyone to add every post not seen on
    let friends = ['kidcore']

    let allPostsDict = new Map();
    let allPosts = [];
    let feed = [];
    

    await db.collection('posts').get({ keys: true }).then(post => {
        allPosts = post;
      })
    
    allPosts.forEach(post => {             
        if(allPostsDict.has(post.data.user_id)){
            allPostsDict.get(post.data.user_id).push(post);
        }
        else{
            allPostsDict.set(post.data.user_id,[post]);
        }
    })
    
    friends.forEach(friend => {
        if(allPostsDict.has(friend)){
            let friendPosts = allPostsDict.get(friend);
            friendPosts.forEach(friendPost => {
                feed.push(friendPost);
            })
        }
    })

    allPosts.forEach(post => {
        if(allPosts.indexOf(post) == -1){
            feed.push(post);
        }
    })

    console.log(feed);
    return feed
}