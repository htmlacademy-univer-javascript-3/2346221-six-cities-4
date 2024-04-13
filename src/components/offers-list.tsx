import { useAppSelector } from '../hooks';
import { Offer } from '../types/offer';
import { sortOffers } from '../utils';
import Card from './card';

type OffersListProps = {
  offers: Offer[];
};

function OffersList({offers}: OffersListProps): JSX.Element {
  const selectedSortType = useAppSelector((state) => state.selectedSortType);
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortOffers(offers, selectedSortType).map((offer) => (
        <Card key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export default OffersList;
