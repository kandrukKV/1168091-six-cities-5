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

export const adaptDataToClient = (cards) => {
  return cards.map((card) => {
    const adaptedData = Object.assign(
        {},
        card,
        {
          isFavorite: card.is_favorite,
          isPremium: card.is_premium,
          previewImage: card.preview_image,
          adults: card.max_adults
        });
    delete adaptedData.is_favorite;
    delete adaptedData.is_premium;
    delete adaptedData.preview_image;
    delete adaptedData.max_adults;

    return adaptedData;
  });
};
