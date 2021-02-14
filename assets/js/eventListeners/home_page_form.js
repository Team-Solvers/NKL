import {logIn} from "../controllers/authenticate.js";

const logInForm = document.querySelector(".login-form");
const logInFormEmailInput = document.querySelector(".login-form-email");
const logInFormPasswordInput = document.querySelector(".login-form-password");
const signInBtn = document.querySelector(".sign-in-button");
const validationFeedbackText = document.querySelector(".login-form-validation-feedback");

signInBtn.addEventListener('click',authenticateUser);

async function authenticateUser(e){
    e.preventDefault();        
    let invalidValidationText = "Invalid username or password";
    let validationFeedback = await logIn(logInFormEmailInput.value,logInFormPasswordInput.value);

    if(validationFeedback === invalidValidationText){
        validationFeedbackText.style.color = 'red';
        validationFeedbackText.innerText = invalidValidationText;
    }
    else{
        validationFeedbackText.style.color = 'green';
        validationFeedbackText.innerText = validationFeedback;
    }
}



