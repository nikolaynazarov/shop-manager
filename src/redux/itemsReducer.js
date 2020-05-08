import { ADD_ITEM, REMOVE_ITEM, FETCH_ITEMS } from './types';

const initialState = {
  items: [],
  expiredItems: [],
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] }
    case REMOVE_ITEM:
      return { ...state, items: state.items.filter(item => item.id !== action.payload) }
    case FETCH_ITEMS:
      return { ...state, items: action.payload }
    default:
      return state;
  }
}

export default itemsReducer;