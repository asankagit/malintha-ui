import axios from 'axios';

export function getDates() { 
    
    return (dispatch) => {

        axios.get('http://192.168.1.100:3001/calendar')
            .then(function (response) {
                console.log("calendar:",response);
                dispatch({
                    type: 'FECTH_CALENDAR',
                    payload: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
                // dispatch({
                //     type: 'FECTH_USERS',
                //     payload: error
                // });
            });


    }
}

