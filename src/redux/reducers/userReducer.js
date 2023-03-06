const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "GET_USERS":
      return { ...state, users: payload };
      break;

    default:
      return state;
      break;
  }
};

export default userReducer;
