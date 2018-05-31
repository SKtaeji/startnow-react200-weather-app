const defaultState = {

  };
  
  export default function SearchReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      // Here in the case of the update description action
      case "UPDATE_CITY_NAME": {
        // we'll return an object
        return {
          // with all the previous state
          ...state,
          // but overwriting the description
          description: payload.description
        };
      }
  
      case "ADD_CITY": {
        const { description, amount } = action.payload;
        return {
          description: "",
          action: "",
          lineItems: [
            // here we have all the previous line items
            ...state.lineItems,
            //plus a new object
            { description, amount }
          ]
        };
      }
  
      default: {
        // the 'state = defaultState' above is new ES6 syntax
        // for defining a default value on a parameter
        return state;
      }
    }
  }
  