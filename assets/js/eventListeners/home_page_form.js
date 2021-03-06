import {logIn} from "../controllers/authenticate.js";
import {addUserToDB} from "../controllers/signUp.js";
import {encrypter} from "../controllers/encryptString.js";


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

let loggedIn = Cookies.get('_poet');
if(loggedIn){
    window.location.href = `./feed.html`;
}

async function authenticateUser(e){
    e.preventDefault();        
    let invalidValidationText = "Invalid username or password";
    let encryptedPassword = encrypter(logInFormPasswordInput.value);
    let validationFeedback = await logIn(logInFormUserNameInput.value,encryptedPassword);

    if(validationFeedback === invalidValidationText){
        validationFeedbackText.style.color = 'red';
        validationFeedbackText.innerText = invalidValidationText;
    }
    else{
        validationFeedbackText.style.color = 'green';
        validationFeedbackText.innerText = validationFeedback;
        Cookies.set("_poet", logInFormUserNameInput.value,{
            expires: 3,
          });
        window.location.href = `./feed.html`;
    }
}



//change password input type to password
const capitalizeFirstLetter = ([ first, ...rest ], locale = navigator.language) =>
  first.toLocaleUpperCase(locale) + rest.join('')

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
        username = username.toLowerCase();
        fullName = capitalizeFirstLetter(fullName);
        let encryptedPassword = encrypter(password);
        let usernameTaken = await addUserToDB(username,fullName,userEmail,encryptedPassword);
        if(usernameTaken === "username taken"){
            usernameValidation.innerHTML = usernameTaken;
        }
        else{
            usernameValidation.innerHTML = ""; 
            Cookies.set("_poet", username,{
                expires: 3,
              });
            window.location.href = `./profile.html`;
        }
    }
}

function passwordLength(){
    let length = 6;
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

    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validEmail = regEx.test(email);

    if(!validEmail){
        emailValidation.innerHTML = emailValidationText;
        return false
    }
    emailValidation.innerHTML = "";
    return true;
}

