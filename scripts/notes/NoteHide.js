const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")


const NoteCardHide = () => {
    
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "hideNotes"){
            
                contentTarget.innerHTML = ``
                
        }
    })
}

export default NoteCardHide