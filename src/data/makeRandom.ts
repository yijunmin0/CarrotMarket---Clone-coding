import faker from 'faker';

export const randomId = (): string => faker.datatype.uuid();
export const randomImage = (): string =>
  faker.image.imageUrl().replace('http', 'https') + '?' + randomId();
export const randomCity = (): string => faker.address.cityName();
export const randomPrice = (): string => faker.finance.amount();
export const randomtitle = (): string => faker.finance.accountName();
