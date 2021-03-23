export const ADD_NEW_RANDOM = 'ADD_NEW_RANDOM';

export const addNewRandom = (item) => {
    return {
        type: ADD_NEW_RANDOM,
        payload: item
    }
}