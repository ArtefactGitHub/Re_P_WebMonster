// see: https://github.com/kylecorbelli/redux-token-auth#initial-state
const REDUX_TOKEN_AUTH_INITIAL_STATE = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        name: null, // <-- Just an example. Attributes are whatever you specify in your cofig (below).
      },
    },
  },
}

export default REDUX_TOKEN_AUTH_INITIAL_STATE
