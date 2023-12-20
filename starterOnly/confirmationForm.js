// Function to confirmate the form
function confirmForm() {
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
                <div class="modal-body modal-confirm">
                    <p class ='confirm-form'>Merci pour votre inscription</p>
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
                <label class="text-label">A quel tournoi souhaitez-vous participer cette année ?</p>
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