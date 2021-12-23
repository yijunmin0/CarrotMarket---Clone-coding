import faker from 'faker';

export const randomImage = (): string => faker.image.imageUrl();
export const randomCity = (): string => faker.address.cityName();
export const randomPrice = (): string => faker.finance.amount();
export const randomtitle = (): string => faker.finance.accountName();
