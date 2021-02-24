export async function getFullName(userId) {
    let db = new Localbase('Poetry');    
    let existsInDB = await db.collection('users').doc(userId).get(); 
    return existsInDB.full_name;
}