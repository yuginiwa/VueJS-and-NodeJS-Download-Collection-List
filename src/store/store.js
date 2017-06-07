import Vue from 'vue';
import Vuex from 'vuex';

import Users from './modules/Users';
import Categories from './modules/Categories';
import Genres from './modules/Genres';
import Posts from './modules/Posts';
import Message from './modules/Message';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Users,
    Categories,
    Genres,
    Posts,
    Message
  }
});
