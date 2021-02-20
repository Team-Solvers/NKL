export async function addUserToDB(etUserName,fullName,email,password){
    let db = new Localbase('Poetry');
    let validUser = await db.collection('users').doc(etUserName).get();    

    if(validUser !== null){
        return "username taken";
    }    

    await db.collection('users').add({                    
        full_name : fullName,      
        email : email
    },etUserName);

    await db.collection('credentials').add({                            
        password : password
    },etUserName);

    await db.collection('following').add({                        
        follows : []
    },etUserName);

    await db.collection('favourites').add({                    
        savedPosts: new Set()
    },etUserName);

    console.log('ending');
    return "user added";
}