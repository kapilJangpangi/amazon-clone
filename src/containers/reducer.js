export const initialState = {
  basket: [],

};

const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case "ADD":
      return {
        ...state,
        basket: [...state.basket, action.items]
      }
    case "REMOVE":
      let newBasket =   [...state.basket]; 
      let ola = newBasket.filter(ing => ing.id !== action.id)
      console.log(ola)
      return {
        ...state,
        basket: ola  
      }
    default:
      return state;
  }
}

export default reducer;