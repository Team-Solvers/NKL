export async function getTrendingAuthors() {
    let db = new Localbase('Poetry');
    let usersMap = new Map();
    let weekInSecs = 604800;    

    let allPosts = [];

    await db.collection('posts').get({
        keys: true
    }).then(allPostsFromDB => {
        allPosts = allPostsFromDB;
    })

    allPosts.forEach(post => {
        // console.log((Date.now() - post.data.post_time) / 1000);
        if (((Date.now() - post.data.post_time) / 1000) <= weekInSecs) {

            let user_id = post.data.user_id;
            if (usersMap.has(user_id)) {
                usersMap.set(user_id, usersMap.get(user_id) + 1);
            } else {
                usersMap.set(user_id, 1);
            }
        }
    })

    let likeSortArr = [];
    for (let user of usersMap.keys()) {
        likeSortArr.push(user);
    }

    likeSortArr.sort(function (a, b) {
        if (usersMap.get(a) === usersMap.get(b)) {
            return 0;
        }
        //sorted in descending with number of likes
        return usersMap.get(a) > usersMap.get(b) ? -1 : 1;
    })

    //can be cut to include only k values    
    return likeSortArr;
}