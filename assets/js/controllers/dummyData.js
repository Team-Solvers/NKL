export function addSomeUsers(){
    let db = new Localbase('Poetry');
    let usersList = [
        {
            userName : "kidcore",
            fullName: 'Kidus Yoseph',
            email : "se.kidus.yoseph@gmail.com",            
        },
        {
            userName : "natyman12",
            fullName: 'Natnael Abay',
            email : "se.natnael.abay@gmail.com"
        },
        {
            userName : "lingeman69",
            fullName: 'Lingerew Man',
            email : "se.lingerew.man@gmail.com"
        }
    ];

    usersList.forEach((user) => {        
        db.collection('users').add({            
            full_name : user.fullName,      
            email : user.email
        },user.userName)
    }) 
    
    let credentials = [
        {
            userName : "kidcore",
            password : "12345"            
        },
        {
            userName : "natyman12",
            password : "123123",
            email : "se.natnael.abay@gmail.com"
        },
        {
            userName : "lingeman69",
            password : "12345",
            email : "se.lingerew.man@gmail.com"
        }
    ];

    credentials.forEach(cred => {
        db.collection('credentials').add({                        
            password : cred.password
        },cred.userName)
    })

    //add title to posts next time
    let posts = [
        {
            content: "Post 1",
            user_id: "kidcore",
            post_time: Date.now(),            
        },
        {
            content: " Post 3",
            user_id: "kidcore",
            post_time: Date.now(),            
        },
        {
            content: "Post 3",
            user_id: "kidcore",
            post_time: Date.now(),            
        },
        {
            content: "Post 7",
            user_id: "lingeman69",
            post_time: Date.now(),            
        },
        {
            content: "Post 4",
            user_id: "natyman12",
            post_time: Date.now(),            
        },
        {
            content: "Post 5",
            user_id: "lingeman69",
            post_time: Date.now(),            
        }
    ];

    posts.forEach(post => {        
        db.collection('posts').add({                        
            content : post.content,
            user_id : post.user_id,
            post_time : post.post_time,            
        });
    });

    let followsArr = [
        {
            user_name : "kidcore",
            follows : ["natyman12"]
        }
    ]

    followsArr.forEach(user => {
        db.collection('following').add({                        
            follows : user.follows
        },user.user_name)
    })    

}


