import {logIn} from "../controllers/authenticate.js";

const logInForm = document.querySelector(".login-form");
const logInFormUserNameInput = document.querySelector(".login-form-email");
const logInFormPasswordInput = document.querySelector(".login-form-password");
const signInBtn = document.querySelector(".sign-in-button");
const validationFeedbackText = document.querySelector(".login-form-validation-feedback");

const signUpForm = document.querySelector(".sign-up-form");
const signUpFullName = document.querySelector(".name");
const signUpUserName = document.querySelector(".u-name");
const signUpEmail = document.querySelector(".e-mail");
const signUpPassword = document.querySelector(".p-word");
const signUpConfirmPassword = document.querySelector(".c-p-word");
const signUpFormSubmitBtn = document.querySelector(".submit");

signInBtn.addEventListener('click',authenticateUser);
signUpFormSubmitBtn.addEventListener('click',addNewUserToDB);

async function authenticateUser(e){
    e.preventDefault();        
    let invalidValidationText = "Invalid username or password";
    let validationFeedback = await logIn(logInFormUserNameInput.value,logInFormPasswordInput.value);

    if(validationFeedback === invalidValidationText){
        validationFeedbackText.style.color = 'red';
        validationFeedbackText.innerText = invalidValidationText;
    }
    else{
        validationFeedbackText.style.color = 'green';
        validationFeedbackText.innerText = validationFeedback;
    }
}

async function addNewUserToDB(e){
    e.preventDefault()
    console.log("registering");
}



