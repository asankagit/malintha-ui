import axios from 'axios';

export function getAllUsers() { 
    
    return (dispatch) => {

        axios.get('http://192.168.1.100:3001/btn')
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

