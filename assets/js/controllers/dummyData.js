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
}

