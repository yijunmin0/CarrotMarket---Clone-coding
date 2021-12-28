import * as makeRandom from './makeRandom';

export interface Product {
  id: string;
  picture: string;
  price: string;
  title: string;
  location: string;
}

export const makeProductList = function (num: number) {
  const newArray: number[] = [...new Array(num)].map((_, i) => i + 1);
  const productLists: Product[] = newArray.map(() => ({
    id: makeRandom.randomId(),
    picture: makeRandom.randomImage(),
    price: makeRandom.randomPrice(),
    title: makeRandom.randomtitle(),
    location: makeRandom.randomCity(),
  }));
  return productLists;
};
