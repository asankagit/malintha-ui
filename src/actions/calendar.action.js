import axios from 'axios';

export function getDates() { 
    
    return (dispatch) => {

        axios.get("http://localhost:3001/drive/calendar")
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

