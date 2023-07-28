// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";
// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 4);
let pot = makePottery("Pot", 10, 7);
let chalice = makePottery("Chalice", 2, 5);
let vase = makePottery("Vase", 6, 8);
let bowl = makePottery("Bowl", 6, 3);

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

let inventory = usePottery();
console.log(inventory);

let catalogContent = document.querySelector(".PotteryList");
catalogContent.innerHTML = PotteryList();

// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
