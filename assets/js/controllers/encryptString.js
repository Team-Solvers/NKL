import {crypt} from "../modules/crypt.js"

export function encrypter(strs) {
    return CryptoJS.SHA256(strs).toString(CryptoJS.enc.Base64)
}