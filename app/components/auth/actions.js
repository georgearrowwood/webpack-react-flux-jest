import cookie from 'react-cookies';
import services from './services';
import constants from './constants';
import dispatcher from '../../modules/dispatcher';

export const auth = () => dispatcher.dispatch({ actionType: constants.AUTHENTICATED });

export const loginAction = async ({ login, password }, history) => {
  try {
    const res = await services().login({ login, password });
    cookie.save('user', res.data.user, { path: '/' });
    cookie.save('userToken', res.data.userToken, { path: '/' });
    dispatcher.dispatch({ actionType: constants.AUTHENTICATED });
    history.push('/');
  } catch (error) {
    dispatcher.dispatch({
      actionType: constants.AUTHENTICATION_ERROR,
      payload: 'Invalid email or password',
    });
  }
};

export const logoutUser = (history) => {
  cookie.remove('user', { path: '/' });
  cookie.remove('userToken', { path: '/' });
  dispatcher.dispatch({
    actionType: constants.UNAUTHENTICATED,
  });
  history.push('/');
};

