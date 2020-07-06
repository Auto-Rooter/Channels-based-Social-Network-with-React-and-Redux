// Well be responsible for determinig what type of change we want to make to our global state 
// within our types file we`ll create our first type to be 

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