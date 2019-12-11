/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */


import { useNotes, getNotes } from "./NoteProvider.js";
import NoteCardComponent from "./Note.js";



// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".noteFormContainer")

const eventHub = document.querySelector(".container")


const NoteCardPrinter = () => {
    // Use the note entry data from the note provider component
    const notes = useNotes()

    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "showNotes"){
            getNotes().then(
                contentTarget.innerHTML = `
                
                ${
                    notes.map((currentNote) => NoteCardComponent(currentNote)).join("")
                    
                }`
            )
        }
    })
}

export default NoteCardPrinter

const NoteCardHide = () => {
    const hideNotes = useNotes
}
