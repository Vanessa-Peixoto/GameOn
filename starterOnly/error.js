// Function show error message
function showErrorMessage(index,message) {
    
    //Select element
    let formData = document.querySelectorAll('.formData')

    //Set attribute in the element and add message if the form is not valid
    formData[index].setAttribute('data-error', message)
    formData[index].setAttribute('data-error-visible', 'true')
}

// Function remove error message
function removeError(index) {

    //Select element
    let formData = document.querySelectorAll('.formData')

    //Remove attribute when form is valid
    formData[index].removeAttribute('data-error')
    formData[index].setAttribute('data-error-visible', 'false')
}