// Action types
const ADD_ITEM = "addItem";
const GET_ITEM = "getItem";
const REMOVE_ITEM = "removeItem";

// Action creators
export const addItem = (data) => {
  return (dispatch) => {
    // console.log(data);
    dispatch({
      type: ADD_ITEM,
      payload: {
        data,
      },
    });
  };
};

export const getItem = () => {
  return (dispatch) => {
    console.log("getting data");
    dispatch({
      type: GET_ITEM,
    });
  };
};

// Reducer
const initialState = {};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, data: action.payload.data };
    case GET_ITEM:
      return [...state];
    default:
      return state;
  }
}
