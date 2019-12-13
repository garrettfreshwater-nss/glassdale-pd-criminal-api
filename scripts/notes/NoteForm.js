import { saveNote } from "./NoteProvider.js";

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")




const NoteFormComponent = () => {  //at this div, add this stuff
    const render = () => {
        contentTarget.innerHTML = `
        <form>
        
        <fieldset>
            <label for="noteDate" class="">Date of Note</label>

            <input type="date" name="noteDate" id="noteDate" />
        </fieldset>

        <fieldset>
            <label for="noteCriminal" class="">Criminal Name</label>

            <input type="text" name="noteCriminal" id="noteCriminal" />
        </fieldset>

        <fieldset>
            <label for="noteText" class=""></label>

            <input type="text" size="75" name="noteText" id="noteText"/>
        </fieldset>

        <button id="saveNote">Save</button>
        

        </form>

        <div>
        <button id="showNotes">ShowNotes</button>
        </div>
        `
    }

    render()



    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveNote") {
            const noteDate = document.querySelector("#noteDate").value
            const noteCriminal = document.querySelector("#noteCriminal").value
            const noteText = document.querySelector("#noteText").value
            // Make a new object representation of a note
            const newNote = {
                date: noteDate,
                criminal: noteCriminal,
                text: noteText
            }

            // Change API state and application state
            saveNote(newNote)
        }
    })
}

export default NoteFormComponent
