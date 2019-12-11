const contentTarget = document.querySelector(".noteFormContainer")

const NoteFormComponent = () => {
    const render = () => {
        contentTarget.innerHTML = `
            Put some input fields and prompts here

            <button id="saveNote">Save Note</button>
        `
    }

    render()
}

export default NoteFormComponent


const NoteFormComponent = () => {

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveNote") {

            // Make a new object representation of a note
            const newNote = {
                // Key/value pairs here
            }

            // Change API state and application state
            saveNote(newNote)
        }
    })

    // rest of the code here