// 'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// //---------------------------------------------------------------





// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest
console.log("I'm working!")


let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};
//(practice)
// console.log("this is tower a: ", stacks.a)
// console.log("this is tower a, fourth position: ", stacks.a[3])
// console.log("this is the last element in tower a: ", stacks.a.pop())
let towera = stacks.a
console.log("this is tower a: ", towera)
let towerb = stacks.b
console.log("this is tower b: ", towerb)
let towerc = stacks.c
console.log("this is tower c: ", towerc)
//I may want to change these to a, b, and c...

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = (tower) => {
  console.log(`You took a piece off of the tower that had: ${tower}`)
  let currentPiece = tower.pop()
  console.log(`and that piece has a value of ${currentPiece}`)
  console.log(`now that tower has ${tower}`)
}
movePiece(towera)

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = () => {
  // Your code here

}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here

}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here

}





// //---------------------------------------------------------------------------------------------
// const getPrompt = () => {
//   printStacks();
//   rl.question('start stack: ', (startStack) => {
//     rl.question('end stack: ', (endStack) => {
//       towersOfHanoi(startStack, endStack);
//       getPrompt();
//     });
//   });
// }

// // Tests

// if (typeof describe === 'function') {

//   describe('#towersOfHanoi()', () => {
//     it('should be able to move a block', () => {
//       towersOfHanoi('a', 'b');
//       assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
//     });
//   });

//   describe('#isLegal()', () => {
//     it('should not allow an illegal move', () => {
//       stacks = {
//         a: [4, 3, 2],
//         b: [1],
//         c: []
//       };
//       assert.equal(isLegal('a', 'b'), false);
//     });
//     it('should allow a legal move', () => {
//       stacks = {
//         a: [4, 3, 2, 1],
//         b: [],
//         c: []
//       };
//       assert.equal(isLegal('a', 'c'), true);
//     });
//   });
//   describe('#checkForWin()', () => {
//     it('should detect a win', () => {
//       stacks = { a: [], b: [4, 3, 2, 1], c: [] };
//       assert.equal(checkForWin(), true);
//       stacks = { a: [1], b: [4, 3, 2], c: [] };
//       assert.equal(checkForWin(), false);
//     });
//   });

// } else {

//   getPrompt();

// }
