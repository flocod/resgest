// reducers.js
const initialState = {
    count: 45,
    isMenuActive:false
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        console.log(state.count + 1);
        return { ...state, count: state.count + 1  };
      case 'DECREMENT':
        console.log(state.count - 1);
        return { ...state, count: state.count - 1 };
      case 'MENUIO':
        console.log(!state.isMenuActive);
        return { ...state, isMenuActive: !state.isMenuActive};
      default:
        return state;
    }
  };
  
  export default rootReducer;
