export async function getDailtyActivity(user_id){
    let db = new Localbase('Poetry');  
    let allPosts =  await db.collection('posts').get();
    let userPosts = allPosts.filter(post => post.user_id === user_id);
    
    let dateMap = new Map();

    userPosts.forEach(post => {
        let post_time = post.post_time;
        let readable_time = moment(post_time).format('MMM Do, YYYY');
        if(dateMap.has(readable_time)){
            dateMap.set(readable_time,dateMap.get(readable_time) + 1);   
        }
        else{
            dateMap.set(readable_time,1);            
        }
    })
    
    let activityHistory = [];
    for(let date of dateMap.keys()){        
        activityHistory.push([date,dateMap.get(date)]);
    }
    
    console.log(activityHistory);
    return activityHistory;
}

function WithoutTime(dateTime) {
    var date = new Date(dateTime.getTime());
    date.setHours(0, 0, 0, 0);
    return date;
}