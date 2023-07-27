export const PotteryList = (inventoryArray) => {
   for (const potteryObj of inventoryArray) {
    let htmlString = `<section class="pottery" id="pottery--1">
    <h2 class="pottery__shape">${potteryObj.shape}</h2>
    <div class="pottery__properties">
      Item weighs ${potteryObj.weight} pounds and is ${potteryObj.height} inches in height
    </div>
    <div class="pottery__price">Price is $${potteryObj.price}</div>
  </section>
   }
};
