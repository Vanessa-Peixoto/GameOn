
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


// Function qui permet de valider les champs pour soumettre le formulaire
/*function validateForm() {

    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const name = document.getElementById('first')
        
        const nameValue = name.value
        
        if(nameValue === '' || nameValue.length < 2) {

            let message = document.createElement('p')
            message.textContent = 'nom pas valide'
            

            let span = document.querySelector('.formData #first')

            span.after(message)
        }

        const lastName = document.getElementById('last')
        const lastNameValue = lastName.value
        if(lastNameValue === '' && lastNameValue.length < 2) {
            console.log('pas ok')
        }

        
        const email = document.getElementById('email')
        const emailValue = email.value
        let emailRegex = new RegExp('[a-zA-Z.-_0-9]+@[a-zA-Z.-_0-9]+\\.[a-zA-Z.-_]+')

        if(emailValue !== emailRegex) {
            let e = document.createElement('p')
            e.textContent = 'email pas valide'

            let element = document.querySelector('#email')
            element.after(e)
        }

        const birthdate = document.getElementById('birthdate')
        const birthdateValue = birthdate.value

        const quantityTournament = document.getElementById('quantity')
        const quantityTournamentValue = quantityTournament.value
        if(quantityTournamentValue === '') {
            console.log('pas ok')
        }

        const tournamentLocation = document.querySelectorAll('.checkbox-input')
        for(let i = 0; i <tournamentLocation.length; i++){
            
            if(tournamentLocation[i].checked) {
                location = tournamentLocation[i].value
                console.log(location)
            }
            break
        }
        console.log('isvalid')
        return true

    })

    //Actionner le btn submit et faire apparaitre une nouvelle page
}*/

//function qui permet de gerer les erreurs
    //ajouter des parametres à la fonction
    // envoi un message à l'utilisateur avec coloration des inputs



//function qui engendre confirmation inscription
function confirmeForm() {
    //Sélectionne l'élement dont j'ai besoin pour l'affichage
    const modal = document.querySelector('.content')

    //Insère ma nouvelle div dans mon formulaire
    modal.innerHTML = getSuccessFullHTMLMessage()

    closeForm(document.querySelector('.close'))
    closeForm(document.querySelector('.btn-submit'))
    initForm()
}

function getSuccessFullHTMLMessage() {

    const div = `<span class="close"></span>
                 <div class="modal-body">
                <p> Merci pour votre inscription</p>
                <input
                    class="btn-submit"
                    type="submit"
                    class="button"
                    value="Fermer"
                />
            </div>`

    return div
}

function getInitialForm() {

    console.log("fonction get form")

    const div = `
          <span class="close"></span>
          <div class="modal-body">
            <form
              name="reserve"
              action="index.html"
              method="get"
              onsubmit="return validate()"
            >
              <div
                class="formData">
                <label for="first">Prénom</label><br>
                <input
                  class="text-control"
                  type="text"
                  id="first"
                  name="first"
                /><br>
              </div>
              <div
                class="formData">
                <label for="last">Nom</label><br>
                <input
                  class="text-control"
                  type="text"
                  id="last"
                  name="last"
                /><br>
              </div>
              <div
                class="formData">
                <label for="email">E-mail</label><br>
                <input
                  class="text-control"
                  type="email"
                  id="email"
                  name="email"
                /><br>
              </div>
              <div
                class="formData">
                <label for="birthdate">Date de naissance</label><br>
                <input
                  class="text-control"
                  type="date"
                  id="birthdate"
                  name="birthdate"
                /><br>
              </div>
              <div
                class="formData">
                <label for="quantity">À combien de tournois GameOn avez-vous déjà participé ?</label><br>
                <input type="number" class="text-control" id="quantity" name="quantity" min="0" max="99">
              </div>
              <p class="text-label">A quel tournoi souhaitez-vous participer cette année ?</p>
              <div
                class="formData">
                <input
                  class="checkbox-input"
                  type="radio"
                  id="location1"
                  name="location"
                  value="New York"
                />
                <label class="checkbox-label" for="location1">
                  <span class="checkbox-icon"></span>
                  New York</label
                >
                <input
                  class="checkbox-input"
                  type="radio"
                  id="location2"
                  name="location"
                  value="San Francisco"
                />
                <label class="checkbox-label" for="location2">
                  <span class="checkbox-icon"></span>
                  San Francisco</label
                >
                <input
                  class="checkbox-input"
                  type="radio"
                  id="location3"
                  name="location"
                  value="Seattle"
                />
                <label class="checkbox-label" for="location3">
                  <span class="checkbox-icon"></span>
                  Seattle</label
                >
                <input
                  class="checkbox-input"
                  type="radio"
                  id="location4"
                  name="location"
                  value="Chicago"
                />
                <label class="checkbox-label" for="location4">
                  <span class="checkbox-icon"></span>
                  Chicago</label
                >
                <input
                  class="checkbox-input"
                  type="radio"
                  id="location5"
                  name="location"
                  value="Boston"
                />
                <label class="checkbox-label" for="location5">
                  <span class="checkbox-icon"></span>
                  Boston</label
                >
                <input
                  class="checkbox-input"
                  type="radio"
                  id="location6"
                  name="location"
                  value="Portland"
                />
                <label class="checkbox-label" for="location6">
                  <span class="checkbox-icon"></span>
                  Portland</label
                >
              </div>

              <div
                class="formData">
                <input
                  class="checkbox-input"
                  type="checkbox"
                  id="checkbox1"
                  checked
                />
                <label class="checkbox2-label" for="checkbox1" required>
                  <span class="checkbox-icon"></span>
                  J'ai lu et accepté les conditions d'utilisation.
                </label>
                <br>
                <input class="checkbox-input" type="checkbox" id="checkbox2" />
                <label class="checkbox2-label" for="checkbox2">
                  <span class="checkbox-icon"></span>
                  Je Je souhaite être prévenu des prochains évènements.
                </label>
                <br>
              </div>
              <input
                class="btn-submit"
                type="submit"
                class="button"
                value="C'est parti"
              />
            </form>
          </div>
        </div>
    ` 
    
    let modal = document.querySelector('.content')

    modal.innerHTML = div
    closeForm(document.querySelector('.close'))

    return div

}

function initForm() {
    let btnSubscribe = document.querySelector('.btn-signup')
    console.log('fonction initform')

    btnSubscribe.addEventListener('click', () => {
        getInitialForm()
    })
}




function validate() {
     console.log('validate')
    const isValid = true

    if (isValid) {
        confirmeForm()
    }

    return false
}














//init the function
closeForm(document.querySelector('.close'))

//validateForm()