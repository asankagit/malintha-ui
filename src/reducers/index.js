import {combineReducers} from 'redux';
import ImageReducer from './reducer_image_card';
import Activeitems from './reducer_active_item';
import UsersRed from './users.reducer';
import LightBoxReducer from './lightbox.reducer';


const rootReducer = combineReducers({
    imagecard: ImageReducer, 
    activeItems: Activeitems,
    xusers:UsersRed,
    lightBoxStatus:LightBoxReducer
});

export default rootReducer;