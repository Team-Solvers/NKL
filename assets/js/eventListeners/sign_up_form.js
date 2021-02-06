import {addUserToDB} from "../controllers/signUp.js";

const email = document.querySelector(".sign__form-userName");

const fullName = document.querySelector(".sign__form-firstName");
const fullNameValidationFeedbackText = document.querySelector(".validation__firstName");
const signUpButton = document.querySelector(".sign__up-button")

const password = document.querySelector(".sign__form-signPassword");
const passwordValidationFeedbackText = document.querySelector(".validation__password");

signUpButton.addEventListener("click",addUser);

async function addUser(e){
    console.log("user add!");
    if(fullName.value.length === 0 || password.value.length === 0){
        if(fullName.value.length === 0){
            fullNameValidationFeedbackText.innerText = "Name can't be empty";
        }
        else{
            fullNameValidationFeedbackText.innerText = "";
        }

        if(password.value.length === 0){
            passwordValidationFeedbackText.innerText = "Password can't be empty";
        }
        else{
            passwordValidationFeedbackText.innerText = "";
        }
        return;
    }
    else{
        await addUserToDB(email.innerText,fullNameValidationFeedbackText.innerText,passwordValidationFeedbackText.innerText);
        fullNameValidationFeedbackText.innerText = "";
        passwordValidationFeedbackText.innerText = "";        
    }    
}


