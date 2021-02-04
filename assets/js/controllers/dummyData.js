export function addSomeUsers(){
    let db = new Localbase('Poetry');
    let usersList = [
        {
            userName : "kidcore",
            fullName: 'Kidus Yoseph',
            age : 21
        },
        {
            userName : "natyman12",
            fullName: 'Natnael Abay',
            age : 21
        },
        {
            userName : "lingeman69",
            fullName: 'Lingerew Man',
            age : 21
        }
    ];

    usersList.forEach((user) => {        
        db.collection('users').add({            
            full_name : user.fullName,
            age : user.age
        },user.userName)
    }) 
    
    let credentials = [
        {
            userName : "kidcore",
            password : "12345"
        },
        {
            userName : "natyman12",
            password : "123123"
        },
        {
            userName : "lingeman69",
            password : "12345"
        }
    ];

    credentials.forEach(cred => {
        db.collection('credentials').add({                        
            password : cred.password
        },cred.userName)
    })
}


