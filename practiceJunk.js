'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// //---------------------------------------------------------------




// An object that represents the three stacks of Towers of Hanoi; 

//This is the board, as it was given to us. 
//The variable stacks represents the board. 
//The board is defined as an object with three key: value pairs. 
//Each value is an array. 
//The numbers in the array represent the size of the stones (or pieces that will be moved according to the rules of the game.
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};


// //(practice)
// // console.log("this is tower a: ", stacks.a)
// // console.log("this is tower a, fourth position: ", stacks.a[3])
// // console.log(`this is the length of tower a: ${stacks.a.length}`)
// // const indexOfLast = stacks.a.length - 1
// // console.log(`This is the index of the last element in tower a: ${indexOfLast}`)
// // console.log(`this is value in the top/last posistion of tower a: ${stacks.a[indexOfLast]}`)
// // console.log("this is the last element in tower a: ", stacks.a.pop())
// //console.log(`push 2 to the end of stack b ${stacks.b.push(2)} and here is the new b stack: ${stacks.b}`)

//This doesn't work:
// let myFunction = () => {
//   return true
// }
// if (myFunction() = true ) {
//   console.log ("it worked")
// }

// //This creates variables a, b, and c so a user can input any of these and the correct tower will be grabbed/ stored
// // const a = stacks.a
// // console.log("this is tower a: ", a)
// // const b = stacks.b
// // console.log("this is tower b: ", b)
// // const c = stacks.c
// // console.log("this is tower c: ", c)

// // let startStack = b
// // console.log(`These are the values in the startStack you chose: ${startStack}`)
// // let endStack = c
// // console.log(`These are the values in the endStack you chose: ${endStack}`)

// //This works:
// const myFunction = (startStack, endStack) => {
//   let sum = startStack + endStack
//   return sum
// }
// console.log("Thisis my function: ", myFunction(3, 4))
// // console.log("sum of myFunction:", myFunction(3, 4))
// // let saved = myFunction(3,4)
// // console.log("myFunction saved as a variable: ", saved)
// // //This doesn't
// // let savedAgain = myFunction(startStack, endStack) 
// // startStack = 5
// // endStack = 5
// // console.log("myFunction w variables defined later: ", savedAgain)
// //I may want to change these to a, b, and c... Yes, it looks like the test expects these parameters to be a, b, c. I need to know how to read the tests.

// //Start here. What is this function doing? This function prints the arrays at keys a, b, and c to show the stacks in the console
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// // This function places the grabbed piece (the one from the startStack) onto the end stack (this move should have already been confirmed legal by isLegal function)


const isLegal = (startStack, endStack) => {
  startStack = stacks[startStack]
  console.log("IL this is the startStack: ", startStack)
  endStack = stacks[endStack]
  console.log("IL this is the endStack: ", endStack)
  console.log(`IL isLegal is running!`)
  console.log("IL Can I access startStack?", startStack)

  let lengthOfStartStack = startStack.length
  let indexOfLastStartStack = startStack.length - 1
  console.log(`IL This is the index of the last element in startStack: `, indexOfLastStartStack)
  let lengthOfEndStack = endStack.length
  console.log(`IL This is the length of the endStack ${lengthOfEndStack}`)
  let indexOfLastEndStack = endStack.length -1
  console.log(`IL This is the index of the last element in endStack: ${indexOfLastEndStack}`)
  let lastStart = startStack[indexOfLastStartStack]
  console.log(`IL This is the value of last element in the startStack: ${lastStart}`)
  let lastEnd = endStack[indexOfLastEndStack]
  console.log(`IL  This is the value last element in the endStack:  ${lastEnd}`)
    if (lengthOfStartStack == "0") {
      console.log("You can't take anything off an empty stack!")
      return false
    }
    else if ((lengthOfEndStack == "0")|| (lastStart < lastEnd)) {
      console.log("IL Yup that's a legal move")
      return true
    }
    else if (lastStart > lastEnd) {
      console.log("the condition in IL returned false")
      console.log(`IL You can't put ${lastStart} on ${lastEnd}`)
      return false
    }
  }

  const movePiece = (startStack, endStack) => {
    console.log("move piece is working")
    let currentPiece = startStack.pop()
    console.log(`MP This is the piece that you're going to move: ${currentPiece}`)
    endStack.push(currentPiece)
    // console.log(`movePiece. That move was legal, so movePiece is running`)
    // console.log(`movePiece. Your piece has a value of ${currentPiece}`)
    // console.log(`movePiece. now that start stack has ${startStack}`)
    // let endStackLength = endStack.push(currentPiece)
    // console.log(`movePiece. The end stack now has: ${endStack}`)
    // printStacks()
  }

  // const currentPiece = stacks[startStack].pop()
  // console.log(`This is the value of the current piece after you chose your startStack: ${currentPiece}`)
  

//   // let topStart = stacks[startStack].pop
// // console.log("Is this the last number in the startStack? ", topStart)
//   // let currentPiece = startStack.pop()
//   // // console.log(`isLegal. This is the current piece that isLegal is working with: ${currentPiece}`)
//   // if (currentPiece !== 6) {
//   //   //push is back on here
//   //   console.log("That's not a legal move")
//   // }
//   // else {
//   //   console.log("That's 6")
//   // }
//   // console.log(`isLegal. This is the length of your endStack:  ${endStack.length}`)
//   // let indexOfLast = endStack.length - 1
//   // console.log(`isLegal. This is the index of the last element in endStack: ${indexOfLast}`) 
//   // console.log(`isLegal. this is the top/last value in the endStack: ${endStack[indexOfLast]}`)
//   // if (currentPiece < endStack[indexOfLast] ) {
//   //   console.log("isLegal contingency met. That's a cool move")
//   //   movePiece(startStack, endStack)
//   //   }
//   //   else {
//   //     console.log(`isLegal. You can't put that there!`)
//   //   }
//   }  
//   // isLegal(r, b)
  
// What is a win in Towers of Hanoi? When should this function run? 
// This function should run after each move is made; i.e., after movePiece has run
const checkForWin = () => {
  console.log(`CWIN check win is running`)
  // if either stack b or stack c has the array [4, 3, 2, 1], then a winner message should display
console.log(stacks.a)
console.log(stacks.b)
if ((stacks.b[0] == 4 && stacks.b[1] == 3 && stacks.b[2] == 2 && stacks.b[3] == 1) || (stacks.c[0] == 4 && stacks.c[1] == 3 && stacks.c[2] == 2 && stacks.c[3] == 1)) {
  console.log(`You win!`)
  return true
}
else {
  console.log(`CWIN Nobody has won yet, keep going`)
  return false
}
}
// // When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  console.log("HHH towersOfHanoi function initiated")
  if ((startStack == "a" || startStack == "b" || startStack == "c") && (endStack == "a" || endStack == "b" || endStack == "c")) {
    console.log(`HHHH You chose startStack ${startStack} and endStack ${endStack}`)
  }
  else {
    console.log(`Please choose only a, b, or c`)
    return false
  }
 
  
  // isLegal(startStack, endStack)

  let legalMove = isLegal(startStack, endStack)
  console.log(`HHH this is the value returned from isLegal: ${legalMove}`)
    if (legalMove == false) {
    return false}
    
    startStack = stacks[startStack]
    console.log("IL this is the startStack: ", startStack)
    endStack = stacks[endStack]
    console.log("IL this is the endStack: ", endStack)

  movePiece(startStack, endStack)

  checkForWin()
 
  console.log("towersOfHanoi function: did it end?")
  
}





// ---------------------------------------------------------------------------------------------
const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });


  // describe('#theNewTest()', () => {
  //   it('if a move is legal', () => {
  //     stacks = {
  //       a: [8, 7],
  //       b: [5],
  //       c: [6]
  //     };
  //     let actual = isLegal("a", "b")
  //     let expected = false
  //    assert.equal(actual, expected, "that's not a legal move")
  //   });
  // });



  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });

  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
