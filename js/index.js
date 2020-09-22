// Start of file importation
import { setError, setSuccess } from './standard.js';
// End of file importation



//Start of sliding in and out between signIn and signUp for user
const signUpInfo = document.getElementById('sign-up-info');
const signInInfo = document.getElementById('sign-in-info');
const container = document.getElementById('container');

signUpInfo.addEventListener('click', () => container.classList.add('move-panel'));

signInInfo.addEventListener('click', () => container.classList.remove('move-panel'));
//End of sliding in and out between signIn and signUp


//Start of validation styling

//Start of user signUp and SignIn validation
const formSignUp = document.getElementById('form-sign-up');
const formSignIn = document.getElementById('form-sign-in');
const fullname = document.getElementById('fullname');
const emailCreate = document.getElementById('email-create');
const email = document.getElementById('email');
const passwordCreate = document.getElementById('password-create');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');


//start of signUp validation
formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();

    getSignUp();
})

function getSignUp() {
    const fullnameValue = fullname.value.trim();
    const emailValueCreate = emailCreate.value.trim();
    const passwordValueCreate = passwordCreate.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    //start of fullname validation
    if(fullnameValue === '') {
        setError(fullname,'Name cannot be blank');
    }
    else if(!fullnameCheck(fullnameValue)) {
        setError(fullname,'It must contain First and Last Name');
    }
    else {
        setSuccess(fullname);
    }
    //end of fullname validation

    //start of emailCreate validation
    if (emailValueCreate === '') {
        setError(emailCreate, 'Email cannot be blank');
    }
    else if (!emailCheck(emailValueCreate)) {
        setError(emailCreate, 'Email is not valid');
    }
    else {
        setSuccess(emailCreate);
    }
    //end of emailCreate validation

    //start of passwordCreate validation
    if(passwordValueCreate === '') {
        setError(passwordCreate, 'Password cannot be blank');
    }
    else if(!passwordCheck(passwordValueCreate)) {
        setError(passwordCreate, 'It must contain at least 1 upper, numeric and be more than 6 character');
    }
    else {
        setSuccess(passwordCreate);
    }
    //end of passwordCreate validation

    //start of confirm password validation
    if(confirmPasswordValue === '') {
        setError(confirmPassword,'Password confirmation cannot be blank');
    }
    else if(confirmPasswordValue !== passwordValueCreate) {
        setError(confirmPassword,'Password does not match');
    }
    else {
        setSuccess(confirmPassword);
    }
    //end of confirm password validation
}
//end of signUp validation


//Start of signIn validation
formSignIn.addEventListener('submit', (e) => {
    e.preventDefault();

    getSignIn();
})

function getSignIn() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    //start of email validation
    if (emailValue === '') {
        setError(email, 'Email cannot be blank');
    }
    else if (!emailCheck(emailValue)) {
        setError(email, 'Email is not valid');
    }
    else {
        setSuccess(email);
    }
    //end of email validation

    //start of password validation
    if(passwordValue === '') {
        setError(password, 'Password cannot be blank');
    }
    else if(!passwordCheck(passwordValue)) {
        setError(password, 'It must contain at least 1 upper, numeric and be more than 6 character');
    }
    else {
        setSuccess(password);
    }
    //end of password validation
}
//Start of signIn validation

//start of fullnameCheck
function fullnameCheck(fullname) {
    const getName = /^[a-z][a-z\s]*$ | [a-zA-Z ]*$/
    return getName.test(String(fullname).toLowerCase()); 
}
//end of fullnameCheck


//start of emailCheck
function emailCheck(email) {
    const getEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return getEmail.test(String(email).toLowerCase());
}
//end of emailCheck


//start of passwordCheck
function passwordCheck(password) {
    const getPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");
    return getPassword.test(password);
}
//end of passwordCheck

//End of user signUp and SignIn validation,

//End of validation styling