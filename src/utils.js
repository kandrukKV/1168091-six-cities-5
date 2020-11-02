import {SortType} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getCurrentCityOffers = (allOffers, currentCity) => {
  return allOffers.filter((offer) => offer.city.name === currentCity);
};

export const sortOfersBy = {
  [SortType.POPULAR]: (cards) => cards,
  [SortType.PRICE_HIGHT_TO_LOW]: (cards) => cards.sort((a, b) => b.price - a.price),
  [SortType.PRICE_LOW_TO_HIGHT]: (cards) => cards.sort((a, b) => b.price - a.price).reverse(),
  [SortType.TOP_RATED_FIRST]: (cards) => cards.sort((a, b) => b.rating - a.rating)
};

export const adaptOffersToClient = (cards) => {
  return cards.map((card) => {
    return {
      id: card.id,
      isFavorite: card.is_favorite,
      isPremium: card.is_premium,
      previewImage: card.preview_image,
      adults: card.max_adults,
      title: card.title,
      type: card.type,
      price: card.price,
      bedrooms: card.bedrooms,
      goods: card.goods,
      description: card.description,
      city: card.city,
      rating: card.rating,
      location: card.location
    };
  });
};
