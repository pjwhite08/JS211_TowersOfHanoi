let animalsAge = 18
let currentYear = 2021
let adoptionYear = 2007

let findAdoptionYear = () => {
    return animalsAge - (currentYear - adoptionYear)
}

let adoptionAge = findAdoptionYear()

console.log(adoptionAge)

let tellCatLifeStage = () => {
    if (adoptionAge <= 1) {
        return "You adopted a baby cat!"
    }
    else if (adoptionAge <= 3) {
        return "You adopted an adolescent cat!"
    }
    else if (adoptionAge <= 11) {
        return "You adopted an adult cat!"
    }
    else return "You adopted a senior cat!"
}

console.log(tellCatLifeStage())




// // hoisting
// function codeHoist(){
// 	a = 10;
// 	let b = 50;
// }
// codeHoist();

// console.log(a); // 10
// console.log(b); // ReferenceError : b is not defined
