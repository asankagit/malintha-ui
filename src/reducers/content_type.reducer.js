export default function (state = {}, action) {
    switch (action.type) {
        case 'CONTENT_TYPE':
           return action.payload;
        default:
           return state;
    }
    return state;

}