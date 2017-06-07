const state = {
  message: ''
};

const mutations = {
  'ERROR_MESSAGES' (state, message) {
    let errorMessage = state.message = message;

    console.log('message', errorMessage);
  }
}

const getters = {
  message: state => {
    return state.message;
  }
};

export default {
  state,
  getters
};
