import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import { PointLocation } from '../../types/point-location';
import { clearOfferPageData } from '../../store/action';

function useMainPageInfo() {
  const offers: Offer[] = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);
  const [currentCityOffers, setCurrentCityOffers] = useState<Offer[]>(offers);
  const [selectedOfferLocation, setSelectedOfferLocation] = useState<PointLocation | null>(null);

  const dispatch = useAppDispatch();
  dispatch(clearOfferPageData());

  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
    setCurrentCityOffers(filteredOffers);
  }, [city, offers]);

  const handlePointLocationChange = useCallback((point: PointLocation | null) => {
    setSelectedOfferLocation(point);
  }, []);

  return {city, currentCityOffers, selectedOfferLocation, handlePointLocationChange};
}

export default useMainPageInfo;
