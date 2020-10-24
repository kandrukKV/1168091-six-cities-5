import {SortType} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersCurrentCity = (allOffers, currentCity) => {
  return allOffers.filter((offer) => offer.city === currentCity);
};

export const sorting = {
  [SortType.POPULAR]: (cards) => cards,
  [SortType.PRICE_HIGHT_TO_LOW]: (cards) => cards.sort((a, b) => b.price - a.price),
  [SortType.PRICE_LOW_TO_HIGHT]: (cards) => cards.sort((a, b) => b.price - a.price).reverse(),
  [SortType.TOP_RATED_FIRST]: (cards) => {
    const arrSort = cards.sort((a, b) => b.rating - a.rating);
    console.log(arrSort);
    return arrSort;
  },
};

