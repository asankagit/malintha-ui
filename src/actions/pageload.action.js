import axios from 'axios';

export function getDefaultImageCardItems() {
    return (dispatch) => {
        axios.get('https://malintha-server.herokuapp.com')
            .then(function (response) {
                dispatch({
                    type: 'DEFAULT_IMAGE_CARD_REC',
                    payload: response.data
                })
            })
            .catch(function (error) {
                dispatch({
                    type: 'ERROR_DEAULT',
                    payload: null
                })

            })
    }

}
