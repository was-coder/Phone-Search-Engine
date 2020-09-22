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

export { setError, setSuccess };