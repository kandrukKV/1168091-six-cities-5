import {SortType, months} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getCurrentCityOffers = (allOffers, currentCity) => {
  return allOffers.filter((offer) => offer.city.name === currentCity);
};

export const convertDate = (date) => {
  const currentDate = new Date(date);
  return `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
};

export const sortOfersBy = {
  [SortType.POPULAR]: (cards) => cards,
  [SortType.PRICE_HIGHT_TO_LOW]: (cards) => cards.sort((a, b) => b.price - a.price),
  [SortType.PRICE_LOW_TO_HIGHT]: (cards) => cards.sort((a, b) => b.price - a.price).reverse(),
  [SortType.TOP_RATED_FIRST]: (cards) => cards.sort((a, b) => b.rating - a.rating)
};

export const adaptOfferToClient = (card) => {
  if (!card) {
    return card;
  }

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
    location: card.location,
    images: card.images,
    additions: card.goods,
    host: {
      id: card.host.id,
      name: card.host.name,
      avatar: card.host.avatar_url
    }
  };
};

export const adaptOffersToClient = (cards) => {
  if (!cards) {
    return cards;
  }
  return cards.map((card) => adaptOfferToClient(card));
};

export const adaptReviewsToClient = (reviews) => {
  if (!reviews) {
    return reviews;
  }

  return reviews.map((review) => ({
    id: review.id,
    rating: review.rating,
    comment: review.comment,
    date: review.date,
    user: {
      name: review.user.name,
      avatar: review.user.avatar_url
    }
  }))
  .sort((a, b) => Date.parse(a.date) < Date.parse(b.date) ? 1 : -1)
  .slice(0, 10);
};

export const updateOffers = (offers, newOffer) => {
  const index = offers.findIndex((offer) => offer.id === newOffer.id);

  if (index > -1) {
    return [
      ...offers.slice(0, index),
      newOffer,
      ...offers.slice(index + 1)
    ];
  }

  return offers;
};

export const deleteOffer = (offers, delOffer) => {
  const index = offers.findIndex((offer) => offer.id === delOffer.id);
  if (index > -1) {
    return [
      ...offers.slice(0, index),
      ...offers.slice(index + 1)
    ];
  }
  return offers;
};
