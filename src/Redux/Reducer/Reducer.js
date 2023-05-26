import { combineReducers } from "redux";

let ProductReducer=(state=[],Action)=>{
   switch (Action.type) {
    case "GET_DATA":
       return [...state,Action.payload]
    default:
      return  state;
   }
}


let rootreducer=combineReducers({ProductReducer})

export default rootreducer;