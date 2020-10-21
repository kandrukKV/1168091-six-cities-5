export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersCurrentCity = (allOffers, currentCity) => {
  return allOffers.filter((offer) => offer.city === currentCity);
};
