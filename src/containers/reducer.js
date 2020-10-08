export const initialState = {
  basket: [],
  user: null

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
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
}

export default reducer;