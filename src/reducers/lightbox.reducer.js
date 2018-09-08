export default function (state = null , action){
    switch(action.type){
    case 'OPEN_LIGHTBOX' :
        return action.payload;
    case 'CLOSE_LIGHTBOX':
        return action.payload;
    }

    return state;
}