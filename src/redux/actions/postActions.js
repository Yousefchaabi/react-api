import axios from "axios";

export const getUsers = (payload) => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return dispatch({ type: "GET_USERS", payload: res.data });
    })
    .catch((err) => {
      return console.dir(err);
    });
};
