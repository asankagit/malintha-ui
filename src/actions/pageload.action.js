import axios from 'axios';

export function getDefaultImageCardItems() {
    return (dispatch) => {
        axios.get('http://192.168.1.100:3001')
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
