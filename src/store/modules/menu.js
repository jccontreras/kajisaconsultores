import * as constants from '@/store/constants';

const state = {
  isopen: true,
};

const actions = {};

const mutations = {
  // eslint-disable-next-line no-shadow
  [constants.OPEN_MENU]: (state) => {
    if (state.isopen) {
      state.isopen = false;
    } else {
      state.isopen = true;
    }
  },
  // eslint-disable-next-line no-shadow
  [constants.CLOSE_MENU]: (state) => {
    state.isopen = false;
  },
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
