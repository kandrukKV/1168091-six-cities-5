import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {apiData} from "./api-data";
import {ActionType} from "../../action";
import {fetchOffersList, fetchFavoriteOffersList, loadOfferDetails, setOfferStatus, postComment} from "../../api-actions";
import {APIRoute} from "../../../const";
import {mockOffers, mockReviews} from "../../../test-data/test-data";

const api = createAPI(() => {});

describe(`api-data reducer testing`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(apiData(void 0, {})).toEqual({
      offers: [],
      favoriteOffers: [],
      offerDetails: {
        card: null,
        reviews: [],
        nearPlaces: []
      }
    });
  });

  it(`Reducer loading offers`, () => {
    expect(apiData(
        {
          offers: []
        },
        {
          type: ActionType.LOAD_OFFERS,
          payload: mockOffers
        }
    )).toEqual({
      offers: mockOffers
    });
  });

  it(`Reducer loading faforite offers`, () => {
    expect(apiData(
        {
          favoriteOffers: []
        },
        {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: mockOffers
        }
    )).toEqual({
      favoriteOffers: mockOffers
    });
  });

  it(`Reducer loading offer details`, () => {
    expect(apiData(
        {
          offerDetails: {
            card: null,
            reviews: [],
            nearPlaces: []
          }
        },
        {
          type: ActionType.LOAD_OFFER_DETAILS,
          payload: {
            card: mockOffers[0],
            reviews: mockReviews,
            nearPlaces: mockOffers
          }
        }
    )).toEqual({
      offerDetails: {
        card: mockOffers[0],
        reviews: mockReviews,
        nearPlaces: mockOffers
      }
    });
  });

  it(`Reducer seting rewiews`, () => {
    expect(apiData(
        {
          offerDetails: {
            card: null,
            reviews: [],
            nearPlaces: []
          }
        },
        {
          type: ActionType.SET_REVIEWS,
          payload: mockReviews
        }
    )).toEqual({
      offerDetails: {
        card: null,
        reviews: mockReviews,
        nearPlaces: []
      }
    });
  });

  it(`Reducer updating one offer`, () => {
    expect(apiData(
        {
          offers: [{id: 1, name: `offer1`}, {id: 2, name: `offer2`}, {id: 3, name: `offer3`}]
        },
        {
          type: ActionType.UPDATE_OFFER,
          payload: {id: 1, name: `newOffer`}
        }
    )).toEqual({
      offers: [{id: 1, name: `newOffer`}, {id: 2, name: `offer2`}, {id: 3, name: `offer3`}]
    });
  });

  it(`Reducer updating favorite offers`, () => {
    expect(apiData(
        {
          favoriteOffers: [{id: 1, name: `newOffer`}, {id: 2, name: `offer2`}, {id: 3, name: `offer3`}]
        },
        {
          type: ActionType.UPDATE_FAVORITE_OFFERS,
          payload: {id: 1, name: `newOffer`}
        }
    )).toEqual({
      favoriteOffers: [{id: 2, name: `offer2`}, {id: 3, name: `offer3`}]
    });

    expect(apiData(
        {
          favoriteOffers: [{id: 1, name: `newOffer`}, {id: 2, name: `offer2`}, {id: 3, name: `offer3`}]
        },
        {
          type: ActionType.UPDATE_FAVORITE_OFFERS,
          payload: {id: 4, name: `newOffer`}
        }
    )).toEqual({
      favoriteOffers: [{id: 1, name: `newOffer`}, {id: 2, name: `offer2`}, {id: 3, name: `offer3`}]
    });
  });

  it(`Reducer update near places`, () => {
    expect(apiData(
        {
          offerDetails: {
            card: null,
            reviews: [],
            nearPlaces: [{id: 1, name: `offer1`}, {id: 2, name: `offer2`}, {id: 3, name: `offer3`}]
          }
        },
        {
          type: ActionType.UPDATE_NEARPLACES,
          payload: {id: 1, name: `newOffer`}
        }
    )).toEqual({
      offerDetails: {
        card: null,
        reviews: [],
        nearPlaces: [{id: 1, name: `newOffer`}, {id: 2, name: `offer2`}, {id: 3, name: `offer3`}]
      }
    });
  });

  it(`Reducer update card from offer details`, () => {
    expect(apiData(
        {
          offerDetails: {
            card: {id: 1, name: `oldOffer`},
          }
        },
        {
          type: ActionType.UPDATE_CARD_FROM_OFFER_DETAILS,
          payload: {id: 1, name: `newOffer`}
        }
    )).toEqual({
      offerDetails: {
        card: {id: 1, name: `newOffer`},
      }
    });
  });
});


describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotells`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOffersLoader = fetchFavoriteOffersList();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, mockOffers);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: mockOffers,
        });
      });
  });

  it(`Should make a correct API getDetailsOffer`, () => {
    const id = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const detailsLoader = loadOfferDetails(id);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${id}`)
      .reply(200, {hotelId: 1})
      .onGet(`${APIRoute.COMMENTS}/${id}`)
      .reply(200, {commentsId: 2})
      .onGet(`${APIRoute.HOTELS}/${id}${APIRoute.NEARBY}`)
      .reply(200, {nearById: 3});

    return detailsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER_DETAILS,
          payload: {
            card: {hotelId: 1},
            nearPlaces: {nearById: 3},
            reviews: {commentsId: 2}
          },
        });
      });
  });

  it(`Should make a correct API call to /favorite/: hotel_id/: status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const changeFavoriteStatus = setOfferStatus(1, 1);

    apiMock
      .onPost(`favorite/1/1`)
      .reply(200, [{cardId: 1}]);

    return changeFavoriteStatus(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER,
          payload: [{cardId: 1}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_FAVORITE_OFFERS,
          payload: [{cardId: 1}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.UPDATE_NEARPLACES,
          payload: [{cardId: 1}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.UPDATE_CARD_FROM_OFFER_DETAILS,
          payload: [{cardId: 1}],
        });
      });
  });

  it(`Should make a correct API call to /cooments/: id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const commentData = {
      comment: `My comment...`,
      rating: 4,
      hotelId: 10
    };

    const commentPoster = postComment(commentData);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${commentData.hotelId}`)
      .reply(200, mockReviews);

    return commentPoster(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_REVIEWS,
          payload: mockReviews,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_STATE_REVIEW_FORM,
          payload: `DEFAULT`,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_STATE_REVIEW_FORM,
          payload: `EDITING`,
        });
      });
  });
});

