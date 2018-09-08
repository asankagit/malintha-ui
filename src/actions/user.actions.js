import axios from 'axios';

export function getAllUsers() {

    return (dispatch) => {

        axios.get('https://httpbin.org/get')
            .then(function (response) {
                console.log("xxxxx",response);
                dispatch({
                    type: 'FECTH_USERS',
                    payload: response.data.headers
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

