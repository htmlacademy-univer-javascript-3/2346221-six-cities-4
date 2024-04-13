import { Offer } from './types/offer';

export const sortOffers = (
  offers: Offer[],
  sortType: string
): Offer[] => {
  const sortedOffers = [...offers];
  switch (sortType) {
    case 'Popular': {
      return sortedOffers;
    }
    case 'Price: low to high':
      return sortedOffers.sort((offerA, offerB) => offerA.price - offerB.price);
    case 'Price: high to low':
      return sortedOffers.sort((offerA, offerB) => offerB.price - offerA.price);
    case 'Top rated first':
      return sortedOffers.sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      throw new Error('Unknown sort type');
  }
};

export const formatRating = (rate: number) => `${(rate / 5) * 100}%`;
