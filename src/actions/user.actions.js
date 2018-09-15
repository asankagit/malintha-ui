import axios from 'axios';

export function getAllUsers() {

    return (dispatch) => {

        axios.get('http://192.168.1.100:4000')
            .then(function (response) {
                console.log("xxxxx",response);
                dispatch({
                    type: 'FECTH_USERS',
                    payload: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
                dispatch({
                    type: 'FECTH_USERS',
                    payload: error
                });
            });


    }
}

