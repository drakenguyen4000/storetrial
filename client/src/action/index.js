import axios from "axios";

//Get Items List
export const getList = () => (dispatch) => {
  dispatch(itemsLoading());
  axios
    .get("/list")
    .then((res) =>
      dispatch({
        type: "GET_LIST",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

//show Item
export const showItem = (id) => (dispatch) => {
  dispatch(itemsLoading());
  axios
    .get(`/list/${id}`)
    .then((res) =>
      dispatch({
        type: "SHOW_ITEM",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const getItems = (id) => (dispatch) => {
  console.log(id);
  dispatch(itemsLoading());
  axios
    .get(`/list/shoppingcart`)
    .then((res) =>
      dispatch({
        type: "GET_ITEMS",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};



// export const getItems = (id) => (dispatch) => {
//   console.log(id);
//   dispatch(itemsLoading());
//   axios.get(`/shoppingcart/${id}`).then((res) =>
//     dispatch({
//       type: "GET_ITEMS",
//       payload: res.data,
//     })
//   );
// };

export const addItem = (item) => (dispatch) => {
  dispatch(itemsLoading());
  dispatch({
    type: "ADD_ITEM",
    payload: item,
  });
};

export const itemsLoading = () => {
  return {
    type: "LOADING_ITEMS",
  };
};
