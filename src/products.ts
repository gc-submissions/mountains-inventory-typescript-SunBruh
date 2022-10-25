import Product from "./models/Product";

export const products: Product[] = [
  {
    name: "book",
    price: 5,
  },
  {
    name: "table",
    price: 100,
  },
  {
    name: "chair",
    price: 40,
  },
  {
    name: "computer",
    price: 600,
  },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  let subTotal: number = 0;
  const numberToDivideBy = array.length;
  array.forEach((i) => {
    subTotal += i.price;
  });
  if (array) {
    return subTotal / numberToDivideBy;
  } else {
    return 0;
  }
};
