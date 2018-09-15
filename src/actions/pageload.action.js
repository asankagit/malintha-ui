import axios from 'axios';

export function getDefaultImageCardItems() {
    return (dispatch) => {
        axios.get('http://192.168.1.101:4000')
            .then(function (response) {
                dispatch({
                    type: 'DEFAULT_IMAGE_CARD_REC',
                    payload: response.data
                })
            })
            .catch(function (error) {
                dispatch({
                    type: 'DEFAULT_IMAGE_CARD_REC',
                    payload: null
                })

            })
    }

}
