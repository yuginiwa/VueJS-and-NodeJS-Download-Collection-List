import data from '../../data/data';

const state = {
  categories: []
};

const mutations = {
  'INIT_CATEGORIES' (state, categories) {
    state.categories = categories;
  }
};

const actions = {
  initCategories({commit}) {
    commit('INIT_CATEGORIES', data.categories);
  }
};

const getters = {
  categories: state => {
    return state.categories;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
