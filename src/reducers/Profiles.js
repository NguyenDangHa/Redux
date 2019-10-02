import *  as types from '../actions/actionTypes';

var initialState = {};

const Profiles = (state = initialState, action) => {
    switch (action.type) {
        case types.showData:
            //console.log(action)
            if (action.profiles) {
                state = action.profiles
            }
            return state

        case types.deleteProfile:
            state = null;
            return state    

        default: return state
    }
}

export default Profiles;
