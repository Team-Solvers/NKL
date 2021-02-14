import {logIn} from "../controllers/authenticate.js";
import {addUserToDB} from "../controllers/signUp.js";

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

const passwordValidation = document.querySelector(".signup-form-password-validation-feedback");
const confirmValidation = document.querySelector(".signup-form-confirm-validation-feedback");
const fullnameValidation = document.querySelector(".signup-form-fullname-validation-feedback");
const emailValidation = document.querySelector(".signup-form-email-validation-feedback");
const usernameValidation = document.querySelector(".signup-form-username-validation-feedback");

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



//check if username is taken - handled by db
//make sure fullname is not empty
//email check
//change password input type to password

async function addNewUserToDB(e){    
    let fullName = signUpFullName.value;
    let username = signUpUserName.value;
    let userEmail = signUpEmail.value;
    let password = signUpPassword.value;
    let confirmPassword = signUpConfirmPassword.value;
    
    
    let pc = passwordLength();
    let cc = isConfirmPasswordSame();
    let fc = isFullnameValid();
    let ec = isEmailValid();
    
    if(pc && cc && fc && ec){        
        let usernameTaken = await addUserToDB(username,fullName,userEmail,password);
        if(usernameTaken === "username taken"){
            usernameValidation.innerHTML = usernameTaken;
        }
        else{
            usernameValidation.innerHTML = "";
        }
    }
}

function passwordLength(){
    let length = 3;
    let password = signUpPassword.value;
    let passwordLengthValidationText = `Password length should be greater than ${length}`;

    if(password.length < length){
        passwordValidation.innerHTML = passwordLengthValidationText;
        return false
    }
    passwordValidation.innerHTML = "";
    return true
}

function isConfirmPasswordSame(){
    let password = signUpPassword.value;
    let confirm = signUpConfirmPassword.value;
    let confirmValidationText = `Password doesn't match`;

    if(passwordLength()){        
        if(password !== confirm){
            confirmValidation.innerHTML = confirmValidationText;
            return false
        }
        confirmValidation.innerHTML = "";
        return true
    }
    return false;
}


function isFullnameValid(){
    let fullname = signUpFullName.value;
    let fullnameValidationText = "Name can't be empty";
    if(fullname.length == 0){
        fullnameValidation.innerHTML = fullnameValidationText;
        return false
    }
    fullnameValidation.innerHTML = "";
    return true;
}

function isEmailValid(){
    let email = signUpEmail.value;
    let emailValidationText = "Invalid email";
    if(email.indexOf("@") == -1){
        emailValidation.innerHTML = emailValidationText;
        return false
    }
    emailValidation.innerHTML = "";
    return true;
}
