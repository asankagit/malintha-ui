import axios from 'axios';

export function getAllUsers(date) { 
    
    return (dispatch) => {

        axios.get(`http://192.168.1.100:3001/api/${date}`)
            .then(function (response) {
                console.log("xxxxx user action:",response);
                dispatch({
                    type: 'RESPONSE_REC',
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

