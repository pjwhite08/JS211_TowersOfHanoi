'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// //---------------------------------------------------------------

//This is the board, as it was given to us. 
//The variable stacks represents the board. 
//The board is defined as an object with three key: value pairs. 
//Each value is an array. 
//The numbers in the array represent the size of the stones (or pieces that will be moved according to the rules of the game).
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

//This code was also given to us
//The function printStacks() prints three lines in the console log.
//Each line shows the letter of the tower. These letters correspond to the keys of the object stacks
// The letter of the tower is followed by the value associated with that key, i.e., the array associated with that tower
//If I were to redo this from scratch, I would likely rename the stacks variable as playArea and the keys as towerA, towerB, and towerC
//playArea.towerA helps me imagine what this represents  better than stacks.a. The array it yields is a tower (or the values of a tower) in the play area
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//The function isLegal() redefines startStack and endStack; this allows us to work with arrays that represent each stack
//and defines variables (lengthOfStartStack and lengthOfEndStack) that represent the length of each stack so we can
//and define variables (indexOfLastStartStack and indescOfLastEndStack) that represent last index of the last/ top stone of each stack
//Once we can access the index of the the last element in each array, we can 
//define variables that represent the size of the top stone of each stack, lastStart and lastEnd 
//in order to compare those values to follow the rules of the game.
// The conditional statement compares the last stone (element) in each stack (array)
// If the startStack has a length of zero, (i.e., the stack is empty) the function returns false. You can't grab a stone that isn't there.
//If the endStack has a length of zero, (i.e., is empty) you can always place a stone there. Stones can always go on empty stacks.
//Or if the stone from the top/end of the startStack (lastStart) is smaller than the stone on the top/end of the endStack (lastEnd)
//you can make those moves and the function returns true
//Or if the stone from the top/end of the startStack is larger than the stone on the top/end of the endStack,
//that move is illegal and the function returns false
const isLegal = (startStack, endStack) => {
  startStack = stacks[startStack]
  endStack = stacks[endStack]
 
  let lengthOfStartStack = startStack.length
  let indexOfLastStartStack = startStack.length - 1

  let lengthOfEndStack = endStack.length
  let indexOfLastEndStack = endStack.length -1
  
  let lastStart = startStack[indexOfLastStartStack]
  let lastEnd = endStack[indexOfLastEndStack]

    if (lengthOfStartStack == "0") {
      console.log("IL You can't take anything off an empty stack!")
      return false
    }
    else if ((lengthOfEndStack == "0")|| (lastStart < lastEnd)) {
      console.log("IL Yup that's a legal move")
      return true
    }
    else if (lastStart > lastEnd) {
      console.log(`IL You can't put ${lastStart} on ${lastEnd}`)
      return false
    }
  }
  
//The function movePiece() takes two arrays as parameters (as defined in towersOfHanoi())
//The fucntion grabs a piece off the startStack and saves that in the variable currentPiece
//This also mutates the startStack array, by removing the last element
//Then, the currentPiece is pushed onto the endStack, mutating that array by adding an element to the end
const movePiece = (startStack, endStack) => {
    
    let currentPiece = startStack.pop()
    
    endStack.push(currentPiece)
  }

//checkForWin() checks for the two possible winning conditions
// if the value at each index of stack b is equal to 4, 3, 2, and 1 (respetively) or
// if the same is true for stack c
// the function returns true and prints a winning message
//otherwise, the function returns false and the game keeps playing
//I realize this could be done with a much shorter line of code, but conceptually, this made the most sense to me, so I did it. 
const checkForWin = () => {
if ((stacks.b[0] == 4 && stacks.b[1] == 3 && stacks.b[2] == 2 && stacks.b[3] == 1) || (stacks.c[0] == 4 && stacks.c[1] == 3 && stacks.c[2] == 2 && stacks.c[3] == 1)) {
  console.log(`CWIN You win!`)
  return true
}
else {
  console.log(`CWIN Nobody has won yet, keep going`)
  return false
}
}

//The towersOfHanoi() function takes two strings as parameters
//The first conditional statement checks to see if
//you entered the same string twice
//in which case it returns "You can't start and end on the same stack"
//and returns false, which makes no changes, exits the function, and prompts you to enter new stacks
//I realize that, at this point, you could have entered two of the same anything - not necessarily letters that represented a stack - and this would give a return message as if you had entered a stack letter.
//This conditional statement then checks to make sure that you have entered only a, b, or c in each stack
// and if you did, it prints the letter of the startStack tower and endStack you chose and allows the rest of the function to run
//Otherwise, if anything else was input, the function prints "Please choose only a, b, or c" 
//and returns false, prompting you to enter start and end stack letters again

//After we know appropriate parameters have been entered, the results of isLegal() are saved as a variable, legalMove,
//so we can use this information to decide to continue or stop and return to choosing start and end stacks.
//If legalMove is false, you are prompted to re-enter a start stack and end stack
//If legalMove is true, the game continues to movePiece()

//But before we call movePiece(), I saved the variables startStack and endStack as the values of those stacks (much like I had in isLegal)
// so movePiece() takes those arrays as parameters, instead of strings a, b, or c

//movePiece is called
//checkWin is called
//These two allow you to continue indefinitely, much like the real game.
// If you want to sit there and continue to move stones around, have at it. As the only child in the house without cable, I did that a lot. 
const towersOfHanoi = (startStack, endStack) => {
  if (startStack == endStack) {
    console.log ("You can't start and end on the same stack")
    return false
  }
  
  else if ((startStack == "a" || startStack == "b" || startStack == "c") && (endStack == "a" || endStack == "b" || endStack == "c")) {
    console.log(`HHHH You chose startStack ${startStack} and endStack ${endStack}`)
  }

  else {
    console.log(`Please choose only a, b, or c`)
    return false
  }

  let legalMove = isLegal(startStack, endStack)
    if (!legalMove) {
    return false}
    
  startStack = stacks[startStack]
  endStack = stacks[endStack]

  movePiece(startStack, endStack)

  checkForWin() 
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
