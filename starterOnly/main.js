
// Function to close the form
function closeForm(btn) {

    //Select elements
    let closeModal = document.querySelector('.bground')

    //Add listener in btn onclick
    btn.addEventListener('click', () => {
        //Add style none to close the form
        closeModal.style.display = 'none'
    })
}

// Function to confirmate the form
function confirmeForm() {

    //Select element
    const modal = document.querySelector('.content')

    //Add new div with confirmation message to the inscription
    modal.innerHTML = getSuccessFullHTMLMessage()

    //Call function closeForm to close the div
    closeForm(document.querySelector('.close'))
    closeForm(document.querySelector('.btn-submit'))

    //Call function initialForm to reset the form
    initialForm()
}

//Function create registration message
function getSuccessFullHTMLMessage() {

    //Create new div with registration message
    const div = `<span class="close"></span>
                <div class="modal-body">
                    <p>Merci pour votre inscription</p>
                    <input
                        class="btn-submit"
                        type="submit"
                        class="button"
                        value="Fermer"
                    />
                </div>`

    //Return div
    return div
}

//Function create initial form
function getInitialForm() {

    //Create new div with the init form
    const div = `
        <span class="close"></span>
        <div class="modal-body">
            <form
              name="reserve"
              action="index.html"
              method="get"
              onsubmit="return validate()">
                <div class="formData">
                    <label for="first">Prénom</label><br>
                    <input
                        class="text-control"
                        type="text"
                        id="first"
                        name="first"/><br>
                </div>
                <div class="formData">
                    <label for="last">Nom</label><br>
                    <input
                        class="text-control"
                        type="text"
                        id="last"
                        name="last"/><br>
                </div>
                <div class="formData">
                    <label for="email">E-mail</label><br>
                    <input
                        class="text-control"
                        type="email"
                        id="email"
                        name="email"/><br>
                </div>
                <div class="formData">
                    <label for="birthdate">Date de naissance</label><br>
                    <input
                        class="text-control"
                        type="date"
                        id="birthdate"
                        name="birthdate"/><br>
                </div>
                <div class="formData">
                    <label for="quantity">À combien de tournois GameOn avez-vous déjà participé ?</label><br>
                    <input type="number" class="text-control" id="quantity" name="quantity" min="0" max="99">
                </div>
                <p class="text-label">A quel tournoi souhaitez-vous participer cette année ?</p>
                <div class="formData">
                    <input
                        class="checkbox-input"
                        type="radio"
                        id="location1"
                        name="location"
                        value="New York"/>
                    <label class="checkbox-label" for="location1">
                        <span class="checkbox-icon"></span>
                        New York</label>

                    <input
                        class="checkbox-input"
                        type="radio"
                        id="location2"
                        name="location"
                        value="San Francisco"/>
                    <label class="checkbox-label" for="location2">
                        <span class="checkbox-icon"></span>
                        San Francisco</label>

                    <input
                        class="checkbox-input"
                        type="radio"
                        id="location3"
                        name="location"
                        value="Seattle"/>
                    <label class="checkbox-label" for="location3">
                        <span class="checkbox-icon"></span>
                        Seattle</label>

                    <input
                        class="checkbox-input"
                        type="radio"
                        id="location4"
                        name="location"
                        value="Chicago"/>
                    <label class="checkbox-label" for="location4">
                        <span class="checkbox-icon"></span>
                        Chicago</label>

                    <input
                        class="checkbox-input"
                        type="radio"
                        id="location5"
                        name="location"
                        value="Boston"/>
                    <label class="checkbox-label" for="location5">
                        <span class="checkbox-icon"></span>
                        Boston</label>

                    <input
                        class="checkbox-input"
                        type="radio"
                        id="location6"
                        name="location"
                        value="Portland"/>
                    <label class="checkbox-label" for="location6">
                        <span class="checkbox-icon"></span>
                        Portland</label>
                </div>

                <div class="formData">
                    <input
                        class="checkbox-input"
                        type="checkbox"
                        id="checkbox1"
                        checked/>
                    <label class="checkbox2-label" for="checkbox1" required>
                        <span class="checkbox-icon"></span>
                        J'ai lu et accepté les conditions d'utilisation.
                    </label>
                    <br>
                    <input class="checkbox-input" type="checkbox" id="checkbox2" />
                    <label class="checkbox2-label" for="checkbox2">
                        <span class="checkbox-icon"></span>
                        Je souhaite être prévenu des prochains évènements.
                    </label>
                    <br>
                </div>
                <input
                class="btn-submit"
                type="submit"
                class="button"
                value="C'est parti"/>
            </form>
        </div>
    </div>` 
    
    //Select element
    let modal = document.querySelector('.content')

    //Insert new div (with the initial form) in the HTML
    modal.innerHTML = div

    //Call the function closeForm to close form
    closeForm(document.querySelector('.close'))

    //Return new div with the initial form
    return div
}

//Function reset form after registration
function initialForm() {

    //Select element
    let btnSubscribe = document.querySelector('.btn-signup')

    //Add listener in btn signup
    btnSubscribe.addEventListener('click', () => {
        //Call function initial form
        getInitialForm()
    })
}

function verifyFields() {
    const firstname = document.getElementById('first')
    const lastname = document.getElementById('last')
    const email = document.getElementById('email')
    const birthdate = document.getElementById('birthdate')
    const quantityTournament = document.getElementById('quantity')

    firstname.addEventListener('change', (e) => {
        checkName(e.target, 'ggggg')
    })

    lastname.addEventListener('change', (e) => {
        checkName(e.target, 'fffgfgfgfgfg')
    })

    email.addEventListener('change', (e) => {
        let emailValue = e.target.value
        const emailRegex = new RegExp("[a-zA-Z.-_0-9]+@[a-zA-Z.-_0-9]+\\.[a-zA-Z.-_]+")
        if(emailRegex.test(emailValue) === false) {
            //error message
            showErrorMessage(2, 'Veuillez saisir une adresse mail valide')
        } else {
            //remove error when it's ok
            removeError(2)
        }
    })

    birthdate.addEventListener('change', (e) => {
        let birthdateValue = e.target.value
        if(birthdateValue === "") {
            //error message
            showErrorMessage(3, 'Vous devez entrer votre date de naissance')
        } else {
            //remove error when it's ok
            removeError(3)
        }
    })

    quantityTournament.addEventListener('change', (e) => {
        let quantityTournamentValue = e.target.value
        if(quantityTournamentValue === '') {
            //error message
            showErrorMessage(4, 'Veuillez indiquer le nombre de tournoi auquel vous avez déjà participez')
        } else {
            //remove error when it's ok
            removeError(4)
        }
    })
}

function checkName(element, message) {
    //Select firstname element

    let toto = true

    let nameValue = element.value

    if(nameValue === '' || nameValue.length < 2) {
        //error message
        toto = false
        showErrorMessage(element, message)
    } else {
        //remove error when it's ok
        removeError(element)
    }
    return toto
}

//Function validate form
function validate() {

    //Create variable which indicate that the form is valid
    let isValid = true

    const lastname = document.getElementById('last')
    isValid = checkName(lastname, 'ddddddd')


    //Select lastname element
   

    let lastnameValue = lastname.value
    if(lastnameValue === '' || lastnameValue.length < 2) {
        //error message
        isValid = false
        showErrorMessage(1, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom')
    } else {
        //remove error when it's ok
        removeError(1)
    }
 
    //Select email element and value
    const email = document.getElementById('email')
    const emailValue = email.value
    //Create regex to control email
    const emailRegex = new RegExp("[a-zA-Z.-_0-9]+@[a-zA-Z.-_0-9]+\\.[a-zA-Z.-_]+")

    //Check value
    if(emailRegex.test(emailValue) === false) {
        //error message
        isValid = false
        showErrorMessage(2,'Veuillez entrer un email valide')
    } else {
        //remove error when it's ok
        removeError(2)
    }

    //Select birthdate element and value
    const birthdate = document.getElementById('birthdate')
    const birthdateValue = birthdate.value

    // Check value
    if(birthdateValue === '') {
        //error message
        isValid = false
        showErrorMessage(3,'Vous devez entrer votre date de naissance')
    } else {
        //remove error when it's ok
        removeError(3)
    }

    //Select quantityTournament element and value
    const quantityTournament = document.getElementById('quantity')
    const quantityTournamentValue = quantityTournament.value

    //Check Value
    if(quantityTournamentValue === '') {
        //error message
        isValid = false
        showErrorMessage(4,'Veuillez indiquer le nombre de tournoi auquel vous avez déjà participez')
    } else {
        //remove error when it's ok
        removeError(4)
    }

    //Select location
    const tournamentLocation = document.querySelectorAll('.checkbox-input[type="radio"]')

    //Create variable which indicate that none input is checked
    let isChecked = false

    //loop in the table to see if a input is checked
    for(let i = 0; i < tournamentLocation.length; i++){
        if(tournamentLocation[i].checked) {
            isChecked = true
            break
        }
    }

    //if none input is checked, add error message
    if(isChecked === false) {
        isValid = false
        showErrorMessage(5, 'Vous devez choisir une option')
    }

    //Select cgu element
    const cgu = document.querySelectorAll('.checkbox-input[type="checkbox"]')

    if(cgu[0].checked) {
        isChecked = true      
    } else {
        isValid = false
        showErrorMessage(6, 'Vous devez vérifier que vous acceptez les termes et conditions.')
    }

    //After checking all inputs, if form is valid
    if (isValid === true) {
        //call the function confirmeForm with the registration message
        confirmeForm()
    }
    console.log(nameValue, lastnameValue, emailValue, birthdateValue, quantityTournamentValue, tournamentLocation.value, cgu[0].checked)
    return isValid
}

//init the function
closeForm(document.querySelector('.close'))
verifyFields()