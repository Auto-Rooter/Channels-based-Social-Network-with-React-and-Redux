// Now in order to perform the change to state , we created this reducer function
// 

import * as actionTypes from '../actions/types';
import { combineReducers } from 'redux'
// this is the state without any change 

const initialUserState = {
    currentUser: null,
    isLoading: true
};
// will be called user reducer because it will reduce all 
// the user related data

const user_reducer = (state = initialUserState, action) => {
    switch(action.type){
        case actionTypes.SET_USER:
            return{
                currentUser: action.payload.currentUser,
                isLoading: false
            };

        case actionTypes.CLEAR_USER:
            return {
                ...initialUserState,
                isLoading: false
            }
        default:
            return state;
    }
}
// Now we want our reducer function to only operate on a certain part of state.

// combine reducers: will allow us to determine what property on global state a given reducer updates 

// this reducer only modify our user property on the global state
// a given reducer updates will include combine reducers and within 
// the object that it takes we can determine that user producer will be updated
// and put it state values on this user property

const rootReducer = combineReducers({
    user: user_reducer
})

export default rootReducer;
