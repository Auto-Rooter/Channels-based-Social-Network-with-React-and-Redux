//  after creating and exporting the first type we use it here firstly in index.js
//  
import * as actionTypes from './types';

export const setUser = user => {
    return {
        type: actionTypes.SET_USER,
        payload: {
            currentUser: user
        }
    }
}

// in order to actually perform the change to state of setting the user are 
// going to create a functions  called reduces and they will do that within this reducers
// folder and create just an index that just file


export const clearUser = () => {
    return {
        type: actionTypes.CLEAR_USER
    }
}