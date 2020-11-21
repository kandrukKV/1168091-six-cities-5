import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../action";
import {user} from "./user";
import {checkAuth, login} from "../../api-actions";
import {APIRoute, AuthorizationStatus} from "../../../const";

const api = createAPI(() => {});

describe(`Action creators work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authInfo: null
    });
  });

  it(`Reducer changes current authorizationStatus`, () => {
    expect(user(
        {
          authorizationStatus: AuthorizationStatus.NO_AUTH
        },
        {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        }
    )).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH
    });
  });

  it(`Reducer seting authInfo`, () => {
    expect(user(
        {
          authInfo: null
        },
        {
          type: ActionType.SET_AUTH_INFO,
          payload: {userName: `Jon`}
        }
    )).toEqual({
      authInfo: {userName: `Jon`}
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login for checkLogin`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authInfo = {
      email: `ivanov@ivan.ru`,
      auth: `AUTH`
    };
    const getAuthInfo = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, authInfo);

    return getAuthInfo(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH_INFO,
          payload: authInfo,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: authInfo.auth,
        });
      });
  });

  it(`Should make a correct API call to /login for Log in`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {
      login: `ivanov@ivan.ru`,
      password: 123
    };
    const authInfo = {
      email: `ivanov@ivan.ru`,
      auth: `AUTH`
    };
    const getAuthInfo = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, authInfo);

    return getAuthInfo(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH_INFO,
          payload: authInfo,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: authInfo.auth,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/`,
        });
      });
  });
});
