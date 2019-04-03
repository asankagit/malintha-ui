import {combineReducers} from 'redux';
import ImageReducer from './reducer_image_card';
import Activeitems from './reducer_active_item';
import UsersRed from './users.reducer';
import LightBoxReducer from './lightbox.reducer';
import CalendarReducer from './calendar.reducer';
import ContentType from './content_type.reducer';


const rootReducer = combineReducers({
    imagecard: ImageReducer, 
    activeItems: Activeitems,
    xusers:UsersRed,
    lightBoxStatus:LightBoxReducer,
    calendar:CalendarReducer,
    switchContent:ContentType
});

export default rootReducer;