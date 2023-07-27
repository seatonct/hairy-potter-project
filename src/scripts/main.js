// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";
// Make 5 pieces of pottery at the wheel
let mug = makePottery("cylinder", 2, 4);
let pot = makePottery("sphere", 10, 7);
let chalice = makePottery("hourglass", 2, 5);
let vase = makePottery("cylinder", 6, 8);
let bowl = makePottery("round", 6, 3);

firePottery(mug, 1000);
firePottery(pot, 3000);
firePottery(chalice, 2000);
firePottery(vase, 4500);
firePottery(bowl, 2200);

console.log(mug);
console.log(pot);
console.log(chalice);
console.log(vase);
console.log(bowl);

toSellOrNotToSell(mug);
toSellOrNotToSell(pot);
toSellOrNotToSell(chalice);
toSellOrNotToSell(vase);
toSellOrNotToSell(bowl);

let catalog = usePottery();
console.log(catalog);

// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
