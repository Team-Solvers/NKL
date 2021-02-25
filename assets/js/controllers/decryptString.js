import {crypt} from "../modules/crypt.js"
export function decrypter(strs) {
    let decrypted = "";
    for (let i = 0; i < strs.length; i++) {
        decrypted += String.fromCharCode(strs.charCodeAt(i) - 13);
    }

    var hash = crypt.decrypt(strs);
    console.log(hash);
    return hash;
}