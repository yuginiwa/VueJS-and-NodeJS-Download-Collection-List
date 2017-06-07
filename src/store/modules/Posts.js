import Vue from 'vue';

import data from '../../data/data';

const state = {
  posts: {}
};

const mutations = {
  'ADD_NEW_POST' (state, {_id, title, category, genres, image, plot} ) {
    console.log(state.posts);
    const findRecord = state.posts.find(data => data.data === title);
    let message;
    if (findRecord) {
      message = state.message = 'Collection already exist on record.';
      console.log('message', message);
      return message;
    }

    state.posts.push({
      _id,
      title,
      category,
      genres,
      image,
      plot
    });

    message = state.message = 'Collection successfully created';
    console.log('state.posts', state.posts, 'message', message);
  },
  'LOAD_ALL_USER_POSTS' (state, posts) {
    // console.log('state.posts', state.posts);
    state.posts = posts;
  }
};

const actions = {
  addNewPost ({commit}, post) {
    Vue.http.post('http://localhost:5000/api/post', {
      title: post.title,
      genres: post.genres,
      category: post.category,
      image: post.image,
      plot: post.plot,
      newGenreArray: post.newGenreArray
    }, {
      headers: {
        'x-auth': localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        commit('ADD_NEW_POST', data);
    });
  },
  loadAllUserPosts ({commit}) {
    Vue.http.get('http://localhost:5000/api/posts', {
      headers: {
        'x-auth': localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(posts => {
        // console.log(posts);
        commit('LOAD_ALL_USER_POSTS', posts);
    });
  }
};

const getters = {
  posts: state => {
    return state.posts;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
