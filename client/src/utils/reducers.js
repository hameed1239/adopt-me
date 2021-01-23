import {
  UPDATE_DOGS,
  UPDATE_BREEDS,
  UPDATE_CURRENT_BREED,
  ADD_BREED,
  UPDATE_USER,
} from "./actions";

const defaultState = {
  dogs: [],
  breeds: [],
  temperaments: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    //if action type value is the value of 'UPDATE_PRODUCTS', return a new state object with an updated products array
    case UPDATE_DOGS:
      return {
        ...state,
        dogs: [...action.dogs],
      };

    case UPDATE_BREEDS:
      return {
        ...state,
        breeds: [...action.breeds],
      };

    case UPDATE_CURRENT_BREED:
      return {
        ...state,
        currentBreed: action.currentBreed,
      };

    case ADD_BREED:
      return {
        ...state,
        breeds: [...action.breeds],
      };

    case UPDATE_USER:
      return {
        ...state,
        users: [...action.users],
      };
    default:
      return state;
  }
};

export default reducer;
