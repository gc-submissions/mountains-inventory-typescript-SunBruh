import Mountain from "./models/Mountain";

export const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

export const findNameOfTallestMountain = (array: Mountain[]): string => {
  let tallestMountain: Mountain = array[0];
  array.forEach((i) => {
    if (tallestMountain.height < i.height) {
      tallestMountain = i;
    }
  });
  if (array) {
    return tallestMountain.name;
  } else {
    return "";
  }
};
