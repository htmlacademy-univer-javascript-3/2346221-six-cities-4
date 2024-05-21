import { City } from '../types/city';
import { Offer } from '../types/offer';
import OffersSorting from '../components/offers-sorting';
import OffersList from '../components/offers-list';
import { PointLocation } from '../types/point-location';
import Map from '../components/map';
import CitiesList from './cities-list';

type CityOffersProps = {
  city: City;
  currentCityOffers: Offer[];
  selectedOfferLocation: PointLocation | null;
  onMouseOver: (point: PointLocation | null) => void;
};

function CityOffers({city, currentCityOffers, selectedOfferLocation, onMouseOver}: CityOffersProps): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList />
        </section>
      </div>
      <div className="cities">
        {currentCityOffers.length ? (
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentCityOffers.length} places to stay in {city.name}</b>
              <OffersSorting />
              <OffersList offers={currentCityOffers} onMouseOver={onMouseOver} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  points={currentCityOffers.map((offer) => offer.location)}
                  city={city}
                  selectedPoint={selectedOfferLocation}
                />
              </section>
            </div>
          </div>
        ) : (
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {city.name}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default CityOffers;
