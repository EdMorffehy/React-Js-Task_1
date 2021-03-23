import {ADD_NEW_RANDOM} from "../actions";

const initialState = {
    randomItem: 'animated-section-moveFromLeft'
}

const randomItem = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_RANDOM: {
            return {
                ...state,
                randomItem: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default randomItem;