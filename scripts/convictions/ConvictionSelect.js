import { useConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
    const convictions = useConvictions()

    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.classList.contains("crimeDropdown")) {
            const selectedCrime = changeEvent.target.value.split("-").join(" ")

            const message = new CustomEvent ("crimeSelected", {
                detail: {
                    crimeID: selectedCrime
                }
            })
            eventHub.dispatchEvent(message);
        }
    });

    render(convictions)
}


const render = convictionsCollection => {
    contentTarget.innerHTML = `

    
        <select class="crimeDropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(crime => `<option value=${crime.split(" ").join("-")}>${crime}</option>`).join("")

            }
        </select>
    `
}


export default ConvictionSelect