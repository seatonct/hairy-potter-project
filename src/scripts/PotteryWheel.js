let idNum = 0;

const idIterator = () => {
  idNum += 1;
};

export const makePottery = (a, b, c) => {
  idIterator();
  let pottery = {
    shape: a,
    weight: b,
    height: c,
    id: idNum,
  };

  return pottery;
};
