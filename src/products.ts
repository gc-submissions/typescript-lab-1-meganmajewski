export interface Product {
  name: string;
  price: number;
}
const products: Product[] = [
  { name: 'shirt', price: 30 },
  { name: 'pants', price: 40 },
  { name: 'shoes', price: 12 },
];

export function calcAverageProductPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }
  const average = products.reduce((total, next) => total + next.price, 0) / products.length;
  return average;
}
