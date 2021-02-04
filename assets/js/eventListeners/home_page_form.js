import {logIn} from "../controllers/authenticate.js";

const logInForm = document.querySelector(".login__form");
const logInFormEmailInput = document.querySelector(".login__form-email");
const logInFormPasswordInput = document.querySelector(".login__form-password");
const validationFeedbackText = document.querySelector(".validation__feedback");

logInForm.addEventListener('submit',authenticateUser);

async function authenticateUser(e){
    e.preventDefault();
    // console.log(`Email - ${logInFormEmailInput.value}`);
    // console.log(`Password - ${logInFormPasswordInput.value}`);
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

