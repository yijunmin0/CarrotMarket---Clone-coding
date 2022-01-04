import * as makeRandom from './makeRandom';

export interface Product {
  id: string;
  picture: string;
  price: string;
  title: string;
  location: string;
}

// export function makeProductList(num: number) {
//   return new Promise(function (resolve) {
//     const newArray: number[] = [...new Array(num)].map((_, i) => i + 1);
//     const productLists: Product[] = newArray.map(() => ({
//       id: makeRandom.randomId(),
//       picture: makeRandom.randomImage(),
//       price: makeRandom.randomPrice(),
//       title: makeRandom.randomtitle(),
//       location: makeRandom.randomCity(),
//     }));
//     setTimeout(() => resolve(productLists), 2000);
//     return productLists;
//   });
// }

// 이건 왜 안되는가?
export async function makeProductList(num: number) {
  const newArray: number[] = [...new Array(num)].map((_, i) => i + 1);
  const productLists: Product[] = newArray.map(() => ({
    id: makeRandom.randomId(),
    picture: makeRandom.randomImage(),
    price: makeRandom.randomPrice(),
    title: makeRandom.randomtitle(),
    location: makeRandom.randomCity(),
  }));
  await new Promise(resolve => setTimeout(resolve, 5000));
  return productLists;
}
