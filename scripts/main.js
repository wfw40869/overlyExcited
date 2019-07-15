let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

const addExcitement = (theWordArray) => {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
        buildMeUp += `${theWordArray[i]} `

        // Print buildMeUp to the console
        console.log(buildMeUp)
    }
    
}

addExcitement(sentence)