import { useCriminals } from "./CriminalProvider.js";
import CriminalComponent from "./Criminals.js";


const CriminalListComponent = () => {


    const contentElement = document.querySelector(".criminalsContainer")
    const criminal = useCriminals()

    contentElement.innerHTML += 
    `
    ${
            criminal.map(
                (currentCriminal) =>  CriminalComponent(currentCriminal)).join("")
    }
   
    `
}

export default CriminalListComponent
