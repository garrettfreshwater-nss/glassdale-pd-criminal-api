
import { getCriminals } from "./criminals/CriminalProvider.js";
import CriminalListComponent from "./criminals/criminalList.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";

import NoteFormComponent from "./notes/NoteForm.js";
import NoteCardPrinter from "./notes/NoteList.js";
import { getNotes } from "./notes/NoteProvider.js";




getCriminals().then(
        CriminalListComponent
)
getConvictions().then(
    ConvictionSelect
)

NoteFormComponent()

getNotes().then(
    NoteCardPrinter
)

