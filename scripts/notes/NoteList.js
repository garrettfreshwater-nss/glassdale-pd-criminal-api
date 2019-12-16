/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */


import { useNotes, getNotes } from "./NoteProvider.js";
import NoteCardComponent from "./Note.js";



// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")


const NoteCardPrinter = () => {
    // Use the note entry data from the note provider component
    const notes = useNotes()

    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "showNotes"){
                
                contentTarget.innerHTML = `
                
                ${
                    notes.map((currentNote) => NoteCardComponent(currentNote)).join("")
                    
                }`
            
        }
    })
}




// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id.startsWith("deleteNote--")) {
//         const [prefix, id] = clickEvent.target.id.split("--")

//         /*
//             Invoke the function that performs the delete operation.

//             Once the operation is complete you should THEN invoke
//             useNotes() and render the note list again.
//         */
//        deleteNote(id).then(
//            () => {
//                const updatedNotes = useNotes()
//                render(updatedNotes())
//            }
//        )
//     }
// })


export default NoteCardPrinter