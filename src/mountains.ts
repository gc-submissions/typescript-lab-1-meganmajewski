export interface Mountain {
  name: string;
  height: number;
}
const mountains: Mountain[] = [
  { name: 'Kilimanjaro', height: 19341 },
  { name: 'Everest', height: 29029 },
  { name: 'Denali', height: 20310 },
];

export function findNameOfTallestMountain(mountains: Mountain[]): string {
  if (mountains.length === 0) {
    return '';
  }
  const tallest = mountains.reduce((prev, current) => {
    // cute turnary option to replace the if statement below
    //   prev.height > current.height ? prev : current,
    if (prev.height > current.height) {
      return prev;
    } else {
      return current;
    }
  });
  return tallest.name;
}
