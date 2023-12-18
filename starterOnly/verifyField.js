//Function which verify field with the listener change
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
        checkName(e.target, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.')
    })

    lastname.addEventListener('change', (e) => {
        checkName(e.target, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')
    })

    email.addEventListener('change', (e) => {
        checkEmail(e.target, 'Veuillez entrer un email valide.')
    })

    birthdate.addEventListener('change', (e) => {
        checkDate(e.target,'Vous devez entrer votre date de naissance.')
    })

    quantityTournament.addEventListener('change', (e) => {
        checkDate(e.target, 'Veuillez indiquer le nombre de tournoi auquel vous avez déjà participez.')
    })
}

//Function which check value in name field
function checkName(element, message) {
    //Create variable that assume the field is properly informed
    let isVerify = true

    //create variable which recover the value
    let nameValue = element.value

    //condition
    if(nameValue === '' || nameValue.length < 2) {
        //error message
        isVerify = false
        showErrorMessage(element, message)
    } else {
        //remove error when it's ok
        removeError(element)
    }
    return isVerify
}

//Function which check value in email field
function checkEmail(element, message) {
    let isVerify = true

    const emailValue = element.value
    const emailRegex = new RegExp("[a-zA-Z.-_0-9]+@[a-zA-Z.-_0-9]+\\.[a-zA-Z.-_]+")
        if(emailRegex.test(emailValue) === false) {
            //error message
            isVerify = false
            showErrorMessage(element, message)
        } else {
            //remove error when it's ok
            removeError(element)
        }
    return isVerify
}

//Function which check value in birthdate and tournament field
function checkDate(element, message) {
    let isVerify = true

    const birthdateValue = element.value
    const quantityTournamentValue = element.value

    if(birthdateValue === '' || quantityTournamentValue === '') {
        //error message
        isVerify = false
        showErrorMessage(element, message)
    } else {
        //remove error when it's ok
        removeError(element)
    }
    return isVerify
}

function checkLocation(message) {
    let isChecked = false

    const tournamentLocation = document.querySelectorAll('.checkbox-input[type="radio"]')

    for(let i = 0; i<tournamentLocation.length; i++) {
        if(tournamentLocation[i].checked){
            isChecked = true
            removeError(tournamentLocation[0])
            break
        }
    }

    if(isChecked === false){
        showErrorMessage(tournamentLocation[0], message)
    }
    return isChecked
}

function checkCgu(message) {

    let isChecked = false

    const cgu = document.querySelectorAll('.checkbox-input[type="checkbox"]')

    if(cgu[0].checked) {
        isChecked = true   
        removeError(cgu[0])   
    } else {
        showErrorMessage(cgu[0], message)
    }
    return isChecked
}







verifyFields()