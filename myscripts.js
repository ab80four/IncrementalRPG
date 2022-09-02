let gatherFibre = document.getElementById("gFibre")
let fibreCount = document.getElementById("fibreCount")

let gatheringArray = ["Fibre","Stick","Stone"]

function randInt() {
    return Math.floor(Math.random() * 3); 
}

function startGathering() {
    console.log(gatheringArray.randInt())
}