// Imports go first
import { makePottery } from "./PotteryWheel.js";
// Make 5 pieces of pottery at the wheel
let mug = makePottery("cylinder", 1, 4);
let pot = makePottery("sphere", 5, 7);
let chalice = makePottery("hourglass", 1, 5);
let vase = makePottery("cylinder", 3, 8);
let bowl = makePottery("round", 1, 3);
console.log(mug);
console.log(pot);
console.log(chalice);
console.log(vase);
console.log(bowl);

// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
