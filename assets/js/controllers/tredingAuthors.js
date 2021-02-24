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

    for (let i = 0; i < allPosts.length; i++) {
        let post = allPosts[i];
        if (((Date.now() - post.data.post_time) / 1000) <= weekInSecs) {
            let user_id = post.data.user_id;
            let post_id = post.key;
            try {
                let likeCntObj = await db.collection('likeActivity').doc(post_id).get();
                let likeCnt = likeCntObj.usersWhoLiked.size;                
                if (usersMap.has(user_id)) {
                    usersMap.set(user_id, usersMap.get(user_id) + likeCnt);
                } else {
                    usersMap.set(user_id, 1);
                }
            } catch (e) {
                //post has not been liked yet;
            }
        }
    }

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

    likeSortArr = likeSortArr.slice(0,3);                
    return likeSortArr;
}