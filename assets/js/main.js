/* Here we should try and see the difference between function and variable */

let x = 1
let y = returnOne()

function returnOne() {
    return 1
}

if (x === y) {
    console.log("Wird das gedruckt?")
}