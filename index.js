// * This js file is incomplete. It will log to the console the elements you click
    // call another function and set stone. You will have to work through the logic
    // of the game as you know it from building it in the terminal. Work through the
    // puzzle slowly, stepping through the flow of logic, and making the game work.
    // Have fun!!
// * First run the program in your browser with live server and double-click on the row you'd like to select an element from.
// * Delete these comment lines!

let stone = null

// this function is called when a row is clicked. 
// Open your inspector tool to see what is being captured and can be used.
const dragStart = (event) => {
  let thisEvent =  event.dataTransfer.setData("text", event.target.id)
  //how do I identify what has been dragstarted?
console.log ("you've started to drag me!", event)
}

const dragEnd = (event) => {

console.log ("you've stopped dragging me!")
}


// const selectRow = (row) => {
//   const currentRow = row.getAttribute("data-row")
  
//   console.log("Yay, we clicked an item", row)
//   console.log("Here is the stone's id: ", row.id)
//   console.log("Here is the stone's data-row: ", currentRow)
// //this returns the row-id
//   pickUpStone(row.id)
// } 


// // this function can be called to get the last stone in the stack

// const pickUpStone = (rowID) => {
//   let selectRowReturned = rowID
//   console.log(`PUS This what the selectRow returned: ${rowID}`)
//   const selectedRow = document.getElementById(rowID);

//   //Need a way to respond to clicking on an empty row? No, it doesn't matter, it just doesn't do anything

//   //WHY can't i get the stoneValue without first redefining stone? can't I just "look" at an attribue of a child without removing it?
//   stone = selectedRow.removeChild(selectedRow.lastChild);
//   console.log(`PUS This is the stone that has been picked up: ${stone}`)
  
//   let stoneValue = selectedRow.lastChild.getAttribute("data-size")
//   console.log(`PUS This the stone value: ${stoneValue}`)
//   let otherAttribute = selectedRow.getAttribute("class")
//   console.log('this should be green: ', otherAttribute)
  

//   // WHY DOESN'T THIS WORK?
//   // stoneSize = stone.getAttribute("data-size")
//   // console.log(`PUS This is the data-size of the stone that has been picked up: ${stoneSize}`)

//   // Why does this only remove on the second click? Does each function require a separate click? That can't be, because the PUS functions are run on the first click.

// }

// // You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// // Once you figure that out you'll need to figure out if its a legal move...
// // Something like: if(!stone){pickupStone} else{dropStone}

// const dropStone = (rowID, stone) => {
  
//   document.getElementById(rowID).appendChild(stone)
//   stone = null
// }

// // * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.

