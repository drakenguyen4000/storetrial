import axios from "axios";

export const getItems = () => (dispatch) => {
  dispatch(itemsLoading());
  axios
    .get("/list")
    .then((res) =>
      dispatch({
        type: "GET_ITEMS",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

// export const selectedItem = (dispatch, item) => {
export const selectedItem = (id) => (dispatch) => {
  dispatch(itemsLoading());
  axios
    .get(`/list/${id}`)
    .then(res =>
      dispatch({
        type: "SELECTED_ITEMS",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const itemsLoading = () => {
  return {
    type: "LOADING_ITEMS",
  };
};
