/**
 * @description Function which verify field with the listener change
 */
function verifyFields() {
    //Select elements
    const firstname = document.getElementById('first')
    const lastname = document.getElementById('last')
    const email = document.getElementById('email')
    const birthdate = document.getElementById('birthdate')
    const quantityTournament = document.getElementById('quantity')

    //For each element, add a listener change
    firstname.addEventListener('change', (e) => {
        //Call function which verify the value on field and add the error message
        validateField(e.target, checkNameValue, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.')
    })

    lastname.addEventListener('change', (e) => {
        validateField(e.target, checkNameValue, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')
    })

    email.addEventListener('change', (e) => {
        validateField(e.target, checkEmailValue, 'Veuillez entrer un email valide.')
    })

    birthdate.addEventListener('change', (e) => {
        validateField(e.target, checkDateValue, 'Vous devez entrer votre date de naissance.')
    })

    quantityTournament.addEventListener('change', (e) => {
        validateField(e.target, checkDateValue, 'Veuillez indiquer le nombre de tournoi auquel vous avez déjà participez.')
    })
}

/**
 * @description Function which check value in name field
 * @param {*} element 
 * @returns boolean
 */
function checkNameValue(element) {
    //condition if element is not empty and >2
    return element.value !== '' && element.value.length >= 2
}

/**
 * @description Function which check value in email field
 * @param {*} element 
 * @returns boolean
 */
function checkEmailValue(element) {
    //new regex to verify the email
    const emailRegex = new RegExp("[a-zA-Z.-_0-9]+@[a-zA-Z.-_0-9]+\\.[a-zA-Z.-_]+");
    return emailRegex.test(element.value);
}

/**
 * @description Function which check value in birthdate and tournament field
 * @param {*} dateElement 
 * @returns boolean
 */
function checkDateValue(dateElement) {
    return dateElement.value !== ''
}

/**
 * @description Function which check if location input is checked
 * @param {*} tournamentLocation 
 * @returns boolean
 */
function checkLocationValue(tournamentLocation) {
    let isChecked = false;
    for (let i = 0; i < tournamentLocation.length; i++) {
        if (tournamentLocation[i].checked) {
            isChecked = true
            break
        }
    }
    return isChecked;
}

/**
 * @description Function which check if cgu input is checked
 * @param {*} cgu 
 * @returns boolean
 */
function checkCguValue(cgu) {
    return cgu[0].checked;
}

/**
 * @description Function that checks if element is valid and add show/remove an error message
 * @param {*} element 
 * @param {function} validationFunction 
 * @param {string} message 
 * @returns boolean
 */
function validateField(element, validationFunction, message) {
    //the field is validated by default
    let isVerified = true;
    //create variable for the element when it's an array
    const uniqueElement = element.length !== undefined ? element[0] : null;

    //if function which check element is false
    if (!validationFunction(element)) {
        isVerified = false
        //show the error message
        showErrorMessage(uniqueElement ?? element, message)
    } else {
        //when it's ok, remove the error
        removeError(uniqueElement ?? element)
    }
    //get field status
    return isVerified
}


verifyFields()