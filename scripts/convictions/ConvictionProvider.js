let convictions = []

export const useConvictions = () => {
    return convictions
}


export const getConvictions = () => {
    //request data from url
    return fetch("http://criminals.glassdale.us/crimes")
    //when url responds with a string, parse the string into javascript object
    .then(response => response.json())
    .then(
        parsedConvictions => {
            convictions = parsedConvictions.slice()
        }
    )
}
