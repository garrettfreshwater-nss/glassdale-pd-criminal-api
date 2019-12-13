import { useCriminals } from "./CriminalProvider.js";
import CriminalComponent from "./Criminals.js";


const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer")


const CriminalListComponent = () => {

    const criminals = useCriminals()

    eventHub.addEventListener("crimeSelected", event => {
        const crime = event.detail.crimeID

        const matchingCriminals = criminals.filter((currentCriminal) => currentCriminal.conviction === crime)
        console.log(matchingCriminals)
        render(matchingCriminals)
    }
    )

let render = criminalCollection => {
    contentElement.innerHTML=""
    contentElement.innerHTML = `
    <seciton class="criminalContainer">
    ${
        criminalCollection.map(
            (currentCriminal) => 
            CriminalComponent(currentCriminal)).join("")
        }
    </section>
    `
    }
    render(criminals)
}

// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id.startsWith("associates--")){
//         const [prefix, criminalId] criminalId = clickEvent.target.id.split("--")

//         const message = new CustomEvent("assocateButtonClicked", {
//             detail: {

//                 criminalId: clickEvent.target.id
//             }
//         }) //this is not done.
//         eventHub.dispatchEvent(event)
//     }
// })

export default CriminalListComponent
