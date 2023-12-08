
// Function to close the form
function closeForm() {

    //Select elements
    let closeModal = document.querySelector('.bground')
    let closeBtn = document.querySelector('.close')

    //Add listener in btn onclick
    closeBtn.addEventListener('click', () => {
        //Add style none to close the form
        closeModal.style.display = 'none'
    })
}

//init the function
closeForm()