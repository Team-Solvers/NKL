export function decrypter(strs) {
    let decrypted = "";
    for (let i = 0; i < strs.length; i++) {
        decrypted += String.fromCharCode(strs.charCodeAt(i) - 13);
    }
    return decrypted;
}