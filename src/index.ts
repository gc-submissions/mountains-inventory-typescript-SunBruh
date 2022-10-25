import { mountains, findNameOfTallestMountain } from "./mountains";
import { calcAverageProductPrice, products } from "./products";
import { calcInventoryValue, inventory } from "./inventory";

const tallestMountain: string = findNameOfTallestMountain(mountains);
const averageProductPrice: number = calcAverageProductPrice(products);
const inventoryValue: number = calcInventoryValue(inventory);

console.log(tallestMountain);
console.log(averageProductPrice);
console.log(inventoryValue);
