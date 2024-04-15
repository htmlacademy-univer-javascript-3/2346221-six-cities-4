import { Offer } from '../types/offer';
import { Link } from 'react-router-dom';
import { formatRating } from '../utils';
import { PointLocation } from '../types/point-location';

type CardProps = {
  offer: Offer;
  onMouseOver: (point: PointLocation | null) => void;
};

function Card({offer, onMouseOver: handlePointLocationChange}: CardProps): JSX.Element {
  return (
    <article
      onMouseOver={(evt) => {
        evt.preventDefault();
        handlePointLocationChange(offer.location);
      }}
      onMouseLeave={(evt) => {
        evt.preventDefault();
        handlePointLocationChange(null);
      }}
      className="cities__card place-card"
    >
      <Link to={`/offer/${offer.id}`}>
        {offer.isPremium && <div className="place-card__mark"> <span>Premium</span> </div>}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: formatRating(offer.rating)}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            {offer.title}
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </Link>
    </article>
  );
}

export default Card;
