export default function (state = {}, action) {
    
    switch (action.type) {
        case 'RESPONSE_REC':
            return [
                { title: 'new aba' ,url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/n/a/narichchi_saha_nawwi.jpg',description:''},
                { title: 'new response',url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/d/o/dosthara_haramitta.jpg',description:'' },
                { title: 'new request',url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/b/o/bonchi_ata_mole.jpg',description:'' },
				{ title: 'new aba' ,url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/n/a/narichchi_saha_nawwi.jpg',description:''},
                { title: 'new response',url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/d/o/dosthara_haramitta.jpg',description:'' },
                { title: 'new request',url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/n/a/narichchi_saha_nawwi.jpg',description:'' },{ title: 'new response',url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/d/o/dosthara_haramitta.jpg',description:'' },
                { title: 'new request',url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/n/a/narichchi_saha_nawwi.jpg',description:'' },{ title: 'new response',url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/d/i/dik_dandaa_saha_mahabada.jpg',description:'' },
                { title: 'new request',url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/n/a/narichchi_saha_nawwi.jpg',description:'' }
            ];
        case 'DEFAULT_IMAGE_CARD_REC':
            return action.payload;

        // default:

        //     return  [
        //         { title: 'aba' ,url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/n/a/narichchi_saha_nawwi.jpg',description:''},
        //         { title: 'response',url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/d/o/dosthara_haramitta.jpg',description:'' },
        //         { title: 'request',url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/n/a/narichchi_saha_nawwi.jpg',description:'' },
        //         { title: 'response',url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/d/o/dosthara_haramitta.jpg',description:'' },
        //         { title: 'request',url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/n/a/narichchi_saha_nawwi.jpg',description:'' },
        //         { title: 'response',url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/d/o/dosthara_haramitta.jpg',description:'' },
        //         { title: 'request',url:'https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/n/a/narichchi_saha_nawwi.jpg',description:'' }
        //     ];
    }

    return state;

}