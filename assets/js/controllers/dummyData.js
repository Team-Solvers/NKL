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
}


