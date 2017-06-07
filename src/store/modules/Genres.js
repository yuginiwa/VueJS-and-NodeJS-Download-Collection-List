import Vue from 'vue';

import data from '../../data/data';

const state = {
  genres: []
};

const mutations = {
  'INIT_GENRES' (state, genres) {
    state.genres = genres;
  }
};

const actions = {
  initGenres({commit}) {
    Vue.http.get('http://localhost:5000/api/genres', {
      headers: {
        'x-auth': localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(genres => {
        commit('INIT_GENRES', genres);
      });
  }
};

const getters = {
  genres: state => {
    return state.genres;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
