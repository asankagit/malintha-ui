import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectItem } from './../actions/index';
import { dataRecieved } from './../actions/action-response-load';
import { getDefaultImageCardItems } from './../actions/pageload.action';
import { bindActionCreators } from 'redux';
import { getAllUsers } from './../actions/user.actions';
import { popLightBox } from './../actions/lightbox.action';



import Demo from './../views/demo'
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';


class FolderList extends Component {
    constructor(props) {
        super(props);
        if (!this.props.folders.size) {
            this.props.deaultimages();
        }
    }

    renderList() {
        return (
            <Grid container spacing={12} alignItems="flex-end">

                {/* <Grid item xs={12} sm={6} md={12}> */}
                {

                    this.props.folders.map((folder) => {
                        return (<Grid item xs={12} sm={12} md={4}>
                            <span onClick={() => { this.props.selectItem(folder); this.props.lightboxStatus(); alert("click") }}  >

                                {/* <li key={folder.title}
                    onClick={() => { this.props.selectItem(folder) }}
                    className="list-group-item">
                    {folder.title}
                 </li> */}
                                <Demo
                                    tittle={folder.title} url={folder.url} description={folder.title} />

                            </span>
                        </Grid>
                        );
                    })
                }

            </Grid>
            // </Grid>
        )

    }




    // renderListAfterResponseReceived(){
    //     return this.props
    // }

    render() {
        console.log("render function called")
        let mt = true;
        for (let obj in this.props.folders) {
            if (obj.hasOwnProperty(obj))
                mt = false
        }
        if (mt == true) {


            return <div>
                <button name onClick={() => { this.props.imagecard({ title: 'asa' }) }}>
                    Reload Data
                </button>

                please select one element to see details </div>
        }


        console.log("Folder", this.props.folders)

        return (
            <div className={this.props.container}>

                {this.renderList()}
                {/* <button onClick={() => { this.props.imagecard({ title: 'asa' }) }}>
                    Reload Data
                </button>
                

                <button name onClick={() => { this.props.xusers(); alert("click trigger") }}>
                    Fetch user Data
                </button> */}


            </div>
        );

    }
}

function mapStateToProps(state) {
    console.log("folder-list.js this STATES:", state)
    //what ever retunr  is will showup as props
    return {
        // books: [{title:'aba'},{title:'shrloc homes'}]
        // books: state.imagecard
        folders: state.imagecard,
        member: this.xusers,
        lightbox: this.lightboxStatus
    };

}
function mapDispatchToPropos(dispatch) {
    /**anythin  retrun from this function will endup as props  on  folder-list container */
    console.log("dispatch", dispatchEvent)
    /**whener selectItem is called, result should be pass to reducers  */
    // return bindActionCreators({ selectItem: selectItem, imagecard: dataRecieved }, dispatch); /** before add getall usrrrs */
    return {
        selectItem: bindActionCreators(selectItem, dispatch),
        imagecard: bindActionCreators(dataRecieved, dispatch),
        xusers: bindActionCreators(getAllUsers, dispatch),
        lightboxStatus: bindActionCreators(popLightBox, dispatch),
        deaultimages: bindActionCreators(getDefaultImageCardItems, dispatch)
    }
}

// export default connect(mapStateToProps)(FolderList); //before adding action and dispatchTOProps 
export default connect(mapStateToProps, mapDispatchToPropos)(FolderList);