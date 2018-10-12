export default function (state = {}, action) {
    switch (action.type) {
        case 'FECTH_CALENDAR':
           return action.payload;
        default:
           return state;
    }
    return state;

}