import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn11114186Reducer from '../features/SignIn11114186/redux/reducers'
import SignIn12114185Reducer from '../features/SignIn12114185/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn11114186: SignIn11114186Reducer,
SignIn12114185: SignIn12114185Reducer,

});