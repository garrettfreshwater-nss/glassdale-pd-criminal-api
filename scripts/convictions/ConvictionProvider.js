let convictions = []

export const useConvictions = () => convictions

export const getConvictions = () => {

    return fetch("http://criminals.glassdale.us/crimes")

        .then(response => response.json())
        .then(


            parsedConvictions => {
                console.log("I AM THE CONVICTIONS")
                console.table(parsedConvictions)
                convictions = parsedConvictions.slice()
            }

        
        )
}

