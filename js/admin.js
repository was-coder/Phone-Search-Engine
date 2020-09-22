// Start of toggler
const signInBtn = document.getElementById('admin-sign-in');
const signUpBtn = document.getElementById('admin-sign-up');
const btn = document.getElementById('btn');

function signUp() {
    signInBtn.style.left = '-400px';
    signUpBtn.style.left = '110px';
    btn.style.left = '120px';
}

function signIn() {
    signInBtn.style.left = '110px';
    signUpBtn.style.left = '500px';
    btn.style.left = '0';
}
// End of toggler

// Start of form validation for Admin signUp and signIn
const adminSignUp = document.getElementById('admin-sign-up');
const adminSignIn = document.getElementById('admin-sign-in');
const adminCreate = document.getElementById('admin-create');
const admin = document.getElementById('admin');
const passcodeCreate = document.getElementById('passcode-create');
const passcode = document.getElementById('passcode');
const confirmPasscode = document.getElementById('confirm-passcode');


// Start of adminSignUp validaion
adminSignUp.addEventListener('click', (e) => {
    e.preventDefault();

    signUpAdmin();
})

function signUpAdmin() {
    const adminCreateValue = adminCreate.value.trim();
    const passcodeCreateValue = passcodeCreate.value.trim();
    const confirmPasscodeValue = confirmPasscode.value.trim();

    if(adminCreateValue === '') {
        setError(adminCreate,'Admin Id cannot be blank');
    }
    else {
        setSuccess(adminCreate);
    }

    if(passcodeCreateValue === '') {
        setError(passcodeCreate,'Passcode cannot be blank');
    }
    else if(!passcodeCheck(passcodeCreateValue)) {
        setError(passcodeCreate, 'Invalid passcode for admin');
    }
    else {
        setSuccess(passcodeCreate);
    }

    if(confirmPasscodeValue === '') {
        setError(confirmPasscode,'Passcode Confirmation cannot be blank');
    }
    else if(confirmPasscodeValue !== passcodeCreateValue) {
        setError(confirmPasscode,'Passcode does not match');
    }
    else {
        setSuccess(confirmPasscode);
    }
}
// End of adminSignUp validation

// Start of adminSignIn validaion
adminSignIn.addEventListener('click', (e) => {
    e.preventDefault();

    signInAdmin();
})

function signInAdmin() {
    const adminValue = admin.value.trim();
    const passcodeValue = passcode.value.trim();

    if(adminValue === '') {
        setError(admin,'Admin Id cannot be blank');
    }
    else {
        setSuccess(admin);
    }

    if(passcodeValue === '') {
        setError(passcode,'Passcode cannot be blank');
    }
    else if(!passcodeCheck(passcodeValue)) {
        setError(passcode, 'Invalid passcode for admin');
    }
    else {
        setSuccess(passcode);
    }
}
// End of adminSignIn validation

// End of form validation

//start of error message
function setError(value,message) {
    const formMessage = value.parentElement;
    const small = formMessage.querySelector('small');
    small.innerText = message;
    formMessage.className = 'form-message error';
}
//end of error message

//start of success message
function setSuccess(value) {
    const formMessage = value.parentElement;
    formMessage.className = "form-message success";
}
//end of success message

//start of passwordCheck
function passcodeCheck(passcode) {
    const getPasscode = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{10,})");
    return getPasscode.test(passcode);
}
//end of passwordCheck