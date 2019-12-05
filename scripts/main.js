
import { useCriminals, getCriminals } from "./criminals/CriminalProvider.js";
import CriminalListComponent from "./criminals/criminalList.js";

getCriminals().then(
    () => {
        CriminalListComponent()
    }
)

CriminalListComponent()
useCriminals()


