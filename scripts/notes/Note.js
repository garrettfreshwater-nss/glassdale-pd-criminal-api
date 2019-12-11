const NoteCardComponent = (note) => {

    return `


            <section class="note">
            
            <dl>
            
            <div class="criminal__note">${note.criminal}</div>
            <br/>

            <div class="date__note">Date: ${note.date}</div>

            <hr/>
            <div class="note__text">Text: ${note.text}</div>

            </dl>

            <button id="hideNotes">Hide Notes</button>

            </section>
    `
}

export default NoteCardComponent