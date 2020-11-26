export const STAR_VALUES = [
  {starValue: 5, title: `perfect`},
  {starValue: 4, title: `good`},
  {starValue: 3, title: `not bad`},
  {starValue: 2, title: `badly`},
  {starValue: 1, title: `terribly`},
];

export const FILTER_ITEMS = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGHT: `Price: low to high`,
  PRICE_HIGHT_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

export const CITIES = [`Amsterdam`, `Paris`, `Cologne`, `Brussels`, `Hamburg`, `Dusseldorf`];

export const AppRoute = {
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOT: `/`,
  OFFER: `/offer`
};

export const APIRoute = {
  HOTELS: `/hotels`,
  LOGIN: `/login`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`,
  NEARBY: `/nearby`
};

export const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

export const STARTING_CITY = `Amsterdam`;

export const FavoriteStatus = {
  YES: `1`,
  NO: `0`
};

export const BookmarkButtonBigSize = {
  WIDTH: 31,
  HEIGHT: 33
};

export const FavoritesItemImageSize = {
  WIDTH: 150,
  HEIGHT: 110
};

export const MapIcon = {
  DEFAULT: {
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  },
  ACTIVE: {
    iconUrl: `img/pin-active.svg`,
    iconSize: [30, 30]
  }
};

export const ReviewFormProperty = {
  MINLENGTH: 50,
  MAXLENGTH: 500
};

export const ReviewFormState = {
  SENDING_ERROR: `SENDING_ERROR`,
  EDITING: `EDITING`,
  POSTING_COMMENT: `POSTING_COMMENT`,
  DEFAULT: `DEFAULT`
};
