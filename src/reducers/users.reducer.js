export default function (state = {}, action) {
    switch (action.type) {
        case 'FECTH_USERS':
            console.log("User reducer -",state)
            // return [...state,action.payload];
            return action.payload;
        default:
            return state;
    }
    return state;

}