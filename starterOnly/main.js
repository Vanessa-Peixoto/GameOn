/**
 * @description Function to close the form
 * @param {*} btn 
 */
function closeForm(btn) {
    //Select elements
    let closeModal = document.querySelector('.bground')

    //Add listener in btn onclick
    btn.addEventListener('click', () => {
        //Add style none to close the form
        closeModal.style.display = 'none'
    })
}

/**
 * @description Function validate form
 * @returns boolean
 */
function validate() {
    //Select element
    const firstname = document.getElementById('first')
    //Call the function which check the field
    validateField(firstname, checkNameValue, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.')

    const lastname = document.getElementById('last')
    validateField(lastname, checkNameValue, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')

    const email = document.getElementById('email')
    validateField(email, checkEmailValue, 'Veuillez entrer un email valide.')

    const birthdate = document.getElementById('birthdate')
    validateField(birthdate, checkDateValue, 'Vous devez entrer votre date de naissance.')

    const quantityTournament = document.getElementById('quantity')
    validateField(quantityTournament, checkDateValue, 'Veuillez indiquer le nombre de tournoi auquel vous avez déjà participez.')

    const location = document.querySelectorAll('.checkbox-input[type="radio"]')
    validateField(location, checkLocationValue, 'Vous devez choisir une option')

    //create variable which will retrieve the location value
    let selectLocation = ''
    for (let i = 0; i < location.length; i++) {
        if (location[i].checked === true) {
            selectLocation = location[i].value
        }
    }

    const cgu = document.querySelectorAll('.checkbox-input[type="checkbox"]')
    validateField(cgu, checkCguValue, 'Vous devez vérifier que vous acceptez les termes et conditions.')

    let selectCgu = ''
    for (let i = 0; i < cgu.length; i++) {
        if (cgu[i].checked === true) {
            selectCgu = cgu[i].value
        }
    }

    //create variable which confirm the form is valid
    let formData = document.querySelectorAll(".formData")
    for (let i = 0; i < formData.length; i++) {
        //if data error exist, the form is not valid
        if (formData[i].getAttribute('data-error-visible') === 'true') {
            return false
        }
    }
    //call the function when the form is valid
    confirmForm()

    //create data object with each value of the form
    const data = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        birthdate: birthdate.value,
        quantityTournament: quantityTournament.value,
        location: selectLocation,
        cgu: selectCgu
    }
    console.log(data)
    return true
}

//init the function
closeForm(document.querySelector('.close'))
