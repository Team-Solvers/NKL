export async function getTrendingAuthors(){
    let db = new Localbase('Poetry');
    let usersMap = new Map();

    let allPosts = [];      

    await db.collection('posts').get({ keys: true }).then(allPostsFromDB => {
        allPosts = allPostsFromDB;
      })
    
    allPosts.forEach(post => {  
        let user_id = post.data.user_id;                    
        if(usersMap.has(user_id)){
            usersMap.set(user_id,usersMap.get(user_id) + 1);
        }
        else{
            usersMap.set(user_id,1);
        }
    })         

    let likeSortArr = [];
    for(let user of usersMap.keys()){
        likeSortArr.push(user);
    }

    likeSortArr.sort(function(a,b){
        if(usersMap.get(a) === usersMap.get(b)){
            return 0;
        }
        //sorted in descending with number of likes
        return usersMap.get(a) > usersMap.get(b) ? -1 : 1;
    })    
    
    //can be cut to include only k values    
    return likeSortArr;
}