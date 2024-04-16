// reducers.js
const initialState = {
    count: 45,
    isMenuActive:false,
    USER_DATA:"dfdf",
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        console.log(state.count + 1);
        return { ...state, count: state.count + 1  };
      case 'DECREMENT':
        console.log(state.count - 1);
        return { ...state, count: state.count - 1 };
      case 'USERCONNECTION':
        console.log('CurrentUser IN REDUCER.JS',JSON.parse(localStorage.getItem('CurrentUser')));
        return { ...state, USER_DATA:JSON.parse(localStorage.getItem('CurrentUser'))};
      case 'MENUIO':
        console.log(!state.isMenuActive);
        return { ...state, isMenuActive: !state.isMenuActive};
      default:
        return state;
    }
  };
  
  export default rootReducer;
