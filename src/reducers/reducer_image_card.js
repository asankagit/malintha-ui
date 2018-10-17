export default function (state = {}, action) {
    
    switch (action.type) {
        case 'RESPONSE_REC':
            return action.payload
        case 'CLEAR':
            return action.payload;
            
        case 'DEFAULT_IMAGE_CARD_REC':
            return action.payload;

    }

    return state;

}