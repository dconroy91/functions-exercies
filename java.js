function printTaco(shellType, toppings) {
    console.log(`A ${shellType} taco with ${toppings}`)
}

printTaco("soft,beef")
printTaco("crunchy", "black bean")



function nameGreeting(firstName, lastName) {
    const greetSentence = `Greetings ${firstName} ${lastName}`
    return greetSentence
}

console.log(nameGreeting("devin", "conroy"))



for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey")
    } else if (currentNumber % 5 === 0) {
        console.log("chicken") // Only 2, 4, 6 will appear
    }
    else if (currentNumber % 7 === 0) {
        console.log("monkey")
    }


    else { console.log(currentNumber) }
}

let bandNumber = 1

const takeNumber = function (bandName) {
    return ` ${bandNumber++}. ${bandName} `
}


const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console







const hamburger = {
    name: 'Hamburger',
    type: 'beef',
    cooked: false,
}
const zucchini = {
    name: 'Zucchini',
    type: 'vegetable',
    cooked: false,
}
const chickenBreast = {
    name: 'Chicken Breast',
    type: 'chicken',
    cooked: false,
}
const corn = {
    name: 'Corn',
    type: 'vegetable',
    cooked: false,
}
const steak = {
    name: 'Steak',
    type: 'beef',
    cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill(currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for (let i = 0; i < foods.length; i++) {
    grill(foods[i])
}
console.log(cookedFood)

let pajamas = ["pink", "yellow", "red"]

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        buildMeUp += theWordArray[i] + " "
        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */


        // Print buildMeUp to the console
        if( i % 3 === 0){
            buildMeUp += theWordArray[i] + " "
            console.log(buildMeUp)
        } else (let i = 0; i < theWordArray.length; i++) {
            buildMeUp += theWordArray[i] + " "
    
        console.log(buildMeUp)
        
    }

    

    

}


addExcitement(sentence)
addExcitement(pajamas)

