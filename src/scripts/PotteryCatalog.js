let inventory = [];

export const toSellOrNotToSell = (potteryObj) => {
  if (potteryObj.cracked === false) {
    if (potteryObj.weight >= 6) {
      potteryObj.price = 40;
      inventory.push(potteryObj);
    } else {
      potteryObj.price = 20;
      inventory.push(potteryObj);
    }
  }
  return potteryObj;
};

export const usePottery = () => {
  return Array.from(inventory);
};
