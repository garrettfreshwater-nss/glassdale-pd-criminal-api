
import { getCriminals } from "./criminals/CriminalProvider.js";
import CriminalListComponent from "./criminals/criminalList.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";
import NoteFormComponent from "./notes/NoteForm.js";

NoteFormComponent()
getCriminals().then(
        CriminalListComponent
)
getConvictions().then(
    ConvictionSelect
)

