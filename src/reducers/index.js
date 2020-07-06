import * as actionTypes from '../actions/types';
import { combineReducers } from 'redux'
// combineReducers will allow us to determ

// will be called user reducer because it will reduce all 
// the user related data

const initialUserState = {
    currentUser: null,
    isLoading: true
};

const user_reducer = (state = initialUserState, action) => {
    switch(action.type){
        case actionTypes.SET_USER:
            return{
                currentUser: action.payload.currentUser,
                isLoading: false
            }
        default:
            return state;
    }
}
// this reducer only modify our user property on the global state
// a given reducer updates will include combine reducers and within 
// the object that it takes we can determine that user producer will be updated
// and put it state values on this user property

const rootReducer = combineReducers({
    user: user_reducer
})

export default rootReducer;
