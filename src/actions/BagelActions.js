import AppDispatcher from '../dispatcher/AppDispatcher';
import CONSTANTS from '../utils/constants';

export default {
  updateCart() {
    AppDispatcher.dispatch({
      actionName: CONSTANTS.BAGEL_STORE.UPDATE_CART
    });
  },
  updateLang(lang) {
    AppDispatcher.dispatch({
      actionName: CONSTANTS.BAGEL_STORE.UPDATE_LANG,
      lang: lang
    });
  }
}
