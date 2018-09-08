import React, { Component } from 'react';

// const ImageCard = () => {
//     return <div>
//         <input/>
//         <button/>
//     </div>
// }

import FolderList from './../containers/folder-list';
import ItemDetail from './../containers/item_detail';
import SyncObj from './../containers/sync_obj';

// import Demo from './../views/demo';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

// import PricingPage from './../views/Items/Pricing'
// import Card from '@material-ui/core/Card/Card';


const styles = theme => ({
    col: {
        maxWiborder: 1
    },
    row: {
        border: 1

    }


});

class ImageCard extends Component {
    constructor(props) {
        super(props);
        // const classes = props;
        this.state = { term: '' };

    }

    render() {
        return <div class="row">
            <div class="row">
                <div class="col s1">1</div>
                <div class="col s7">ff</div>
                <div class="col s4">ff</div>
            </div>


            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <FolderList />
                </Grid>
                <Grid item xs={3}>
                    <SyncObj />
                </Grid>
                <Grid item xs={3}>
                    <div id="fb-root">{d()}</div>
                </Grid>
            </Grid>
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <img src="https://grantha.lk/media/catalog/product/cache/bfa4f59b59693a18ca4208a6e02422cd/p/a/pawena-holmana_2_.jpg"
                        height="200" alt="image missing" />

                    <ItemDetail />
                </Grid>

            </Grid>



            {/* <div class="fb-like" data-href="https://hackx.lk/xcv" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div> */}

            

        </div>




    }

}
function d() {

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.1';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}
export default ImageCard;
