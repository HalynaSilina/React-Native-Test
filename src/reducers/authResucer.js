function authReducer(state, action) {
  switch (action.type) {
    case "setLogin": {
      return { ...state, login: action.login };
    }
    case "setEmail": {
      return { ...state, email: action.email };
    }
    case "setPassword": {
      return { ...state, password: action.password };
    }
    case "togglePasswordVisability": {
      return {
        ...state,
        showPassword: action.showPassword,
        secureTextEntry: action.secureTextEntry,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default authReducer;
