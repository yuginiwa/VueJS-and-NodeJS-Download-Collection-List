import Vue from 'vue';

const state = {
  user: "",
  authenticated: false
};

const mutations = {
  'LOGIN_USER' (state, {id, username, gender, email}) {
    let message;

    // if ()
    state.user = {
      id,
      username,
      gender,
      email
    };

    state.authenticated = true;

    message = state.message = "Login success!";
    console.log('user', state.user, 'message', message, 'state.authenticated', state.authenticated);
  }
};

const actions = {
  registerUser({commit}, user) {
    Vue.http.post('http://localhost:5000/api/signup', {
      username: user.username,
      password: user.password,
      gender: user.gender,
      email: user.email
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        localStorage.setItem('token', data.token);
    });
  },
  logingInUser({commit}, user) {
    Vue.http.post('http://localhost:5000/api/login', {
      username: user.username,
      password: user.password
    })
      .then(response => response.json())
      .then(data => {
        // SAVE JWT TOKEN TO LOCAL STORAGE
        // if (response.body.message) {
        //   return commit('ERROR_MESSAGES', data.data.message);
        // }

        localStorage.setItem('token', data.token);
        // console.log('data.user', data.user);
        commit('LOGIN_USER', data.user);
    });
  }
};

const getters = {
  user: state => {
    return state.user;
  },
  authenticated: state => {
    return state.authenticated;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
