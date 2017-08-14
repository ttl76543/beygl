import AppDispatcher from '../dispatcher/AppDispatcher';
import MicroEvent from 'microevent-github';
import CONSTANTS from '../utils/constants';

var _bagels = {
  count: [],
  lang: "en"
};

function updateCart() {
  BagelStore.trigger('change');
}

function updateLang(lang) {
  _bagels.lang = lang;

  BagelStore.trigger('change');
}

let BagelStore = {
  getBagelCount: function() {
    return 5;
  },
  getLang: function() {
    return _bagels.lang;
  }
}

MicroEvent.mixin(BagelStore);

AppDispatcher.register(payload => {
  switch(payload.actionName) {
    case CONSTANTS.BAGEL_STORE.UPDATE_CART:
      updateCart();
    break;
    case CONSTANTS.BAGEL_STORE.UPDATE_LANG:
      updateLang(payload.lang);
    break;
      default:
  }
});

export default BagelStore;
