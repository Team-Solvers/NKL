export async function logIn(username,password){
    let db = new Localbase('Poetry');
    console.log(username,password);
    let validUser = await db.collection('credentials').doc(username).get();
    let validUserPassword = undefined;
    let invalidValidationText = "Invalid username or password";

    if(validUser){
        validUserPassword = validUser.password;
    }

    if(validUserPassword === password){
        let validUserInfo = await db.collection('users').doc(username).get();
        return `Welcome ${validUserInfo.full_name}`
    }
    else{
        return invalidValidationText;
    }                   
}