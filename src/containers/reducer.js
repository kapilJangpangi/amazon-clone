export const initialState = {
  basket: [],

};

const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case "ADD":
      return {
        ...state,
        basket: [...state.basket, action.item]
      }
    case "REMOVE":
      return {state}
    default:
      return state;
  }
}

export default reducer;