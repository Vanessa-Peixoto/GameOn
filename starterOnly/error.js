/**
 * @description Function show error message
 * @param {*} element 
 * @param {string} message 
 */
function showErrorMessage(element, message) {
    //Select element
    let formData = element.closest(".formData")

    //Set attribute in the element and add message if the form is not valid
    formData.setAttribute('data-error', message)
    formData.setAttribute('data-error-visible', 'true')
}

/**
 * @description Function remove error message
 * @param {*} element 
 */
function removeError(element) {
    //Select element
    let formData = element.closest('.formData')

    //Remove attribute when form is valid
    formData.removeAttribute('data-error')
    formData.setAttribute('data-error-visible', 'false')
}