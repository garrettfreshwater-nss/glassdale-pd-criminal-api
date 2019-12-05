let criminals = []

export const useCriminals = () => {
    return criminals
}

export const getCriminals = () => {

    return fetch("http://criminals.glassdale.us/criminals")

        .then(response => response.json())
        .then(


            parsedCriminals => {
                console.log("I AM THE CRIMINALS")
                criminals = parsedCriminals.slice()
            }

        
        )
}

