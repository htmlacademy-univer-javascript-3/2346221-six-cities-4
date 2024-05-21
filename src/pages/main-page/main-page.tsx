import Header from '../../components/header';
import useMainPageInfo from './use-main-page-info';
import CityOffers from '../../components/city-offers';

function MainPage(): JSX.Element {
  const {city, currentCityOffers, selectedOfferLocation, handlePointLocationChange} = useMainPageInfo();

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <CityOffers
          city={city}
          currentCityOffers={currentCityOffers}
          selectedOfferLocation={selectedOfferLocation}
          onMouseOver={handlePointLocationChange}
        />
      </main>
    </div>
  );
}

export default MainPage;
