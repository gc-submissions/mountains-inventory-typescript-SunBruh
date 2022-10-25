import InventoryItem from "./models/Inventory";

export const inventory: InventoryItem[] = [
  {
    product: {
      name: "motor",
      price: 10.0,
    },
    quantity: 10,
  },
  {
    product: {
      name: "sensor",
      price: 12.5,
    },
    quantity: 4,
  },
  {
    product: {
      name: "LED",
      price: 1.0,
    },
    quantity: 20,
  },
];

export const calcInventoryValue = (array: InventoryItem[]): number => {
  let value: number = 0;
  array.forEach((i) => {
    value += i.product.price * i.quantity;
  });
  return value;
};
