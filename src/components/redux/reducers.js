const initialState = {
    searchValue: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SearchStyles':
        return {
          ...state,
          searchStyle: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  