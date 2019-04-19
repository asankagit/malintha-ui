import axios from 'axios';
// import { selectItem } from './index';

export function getAllUsers(date) { 
   
    return (dispatch) => {

        // axios.get(`http://localhost:3001/fb/${date}`)
        axios.get(`https://malintha-server.herokuapp.com/drive/children/${date}`)
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

