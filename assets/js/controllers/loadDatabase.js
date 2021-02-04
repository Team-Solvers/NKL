// let db;
export function loadDB(){
    if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
        return -1;
    }
    
    let db = window.indexedDB.open("Poetry");

    //user logs in to access database
    db.onsuccess = function(e){        
        console.log("database opened");
    }

    //user logging in first time
    db.onupgradeneeded = function(e){    
        let database =  e.target.result;
        // let userObjectStore = database.createObjectStore("users", { keyPath : "user_name"}); 
        // let passwordObjectStore = database.createObjectStore("credentials");//, { keyPath : "user_id"});
        // database.close();  
        console.log("database created");           
    }
       

    db.onerror = function(e){
        console.log("couldn't open the database");
    }
}




