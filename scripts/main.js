
import { useCriminals, getCriminals } from "./criminals/CriminalProvider.js";
import CriminalListComponent from "./criminals/criminalList.js";
import { useConvictions, getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";


getCriminals().then(
        CriminalListComponent
)

CriminalListComponent()
useCriminals()
getConvictions().then(
    ConvictionSelect
)
useConvictions()
ConvictionSelect()

