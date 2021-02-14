export function encrypter(strs) {
    let hashed = ""
    for (let i = 0; i < strs.length; i++) {
        hashed += String.fromCharCode(strs.charCodeAt(i) + 13);
    }
    return hashed;
}