import { followOtherUser } from "./follow.js";

export async function getPost(){
    let db = new Localbase('Poetry');

    //to be changed to following from db
    //create a user that follows everyone to add every post not seen on
    let friends = ['kidcore','natyman12']

    let allPostsDict = new Set();
    allPostsDict.add('kidcore');
    // allPostsDict.add('natyman12');
    let allPosts = [];
    let feed = [];
    

    await db.collection('posts').get({ keys: true }).then(allPostsFromDB => {
        allPosts = allPostsFromDB;
      })
    
    allPosts.forEach(post => {             
        // if(allPostsDict.has(post.data.user_id)){            
        //     feed.push(post);
        // }    
        feed.push(post);    
    })        

    for(let i = 0; i < feed.length; i++){
        let currPostToAddLike = feed[i];
        let firstLike = await db.collection('likeActivity').doc(currPostToAddLike.key + "").get();
        let likeCount = 0;            
        if(firstLike != null){
            likeCount = firstLike.usersWhoLiked.size;            
        }
        feed[i].data.like_count = likeCount;
    }    

    // console.log(feed);
    
    feed.sort(function(a,b){
        return a.data.post_time > b.data.post_time ? -1 : 1;
    })
    return feed
}