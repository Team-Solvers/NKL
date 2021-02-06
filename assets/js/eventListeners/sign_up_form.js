import {addUserToDB} from "../controllers/signUp.js";

const userNameInput = document.querySelector(".sign__form-userName");
const userNameValidation = document.querySelector(".validation__firstName");

const emailInput = document.querySelector(".sign__form-email")

const fullName = document.querySelector(".sign__form-firstName");
const fullNameValidationFeedbackText = document.querySelector(".validation__firstName");
const signUpButton = document.querySelector(".sign__up-button")

const password = document.querySelector(".sign__form-signPassword");
const passwordValidationFeedbackText = document.querySelector(".validation__password");

signUpButton.addEventListener("click",addUser);

async function addUser(e){    
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
        let userAddCheck = await addUserToDB(userNameInput.value,fullName.value,emailInput.value,password.value);
        let userNameTakenError = "username taken";
        if(userAddCheck === userNameTakenError){
            userNameValidation.innerText = "username taken";
        }
        else{
            //user added to database push to next page
            fullNameValidationFeedbackText.innerText = "";
            passwordValidationFeedbackText.innerText = "";        
        }        
    }    
}


