import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


import { getAllUsers } from './../actions/user.actions'; // getAllUser methods to get calender dates ;this must be renamed
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDates } from './../actions/calendar.action';
import { clear } from './../actions/clean.action';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class NestedList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
        if (!this.props.date.size) {
            this.props.calendar();
        }
    }

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    render() {
        const { classes } = this.props;


        let mt = true;
        for (let obj in this.props.date) {
            if (obj.hasOwnProperty(obj))
                mt = false
        }
        if (mt != true) {
            return (
                <div className={classes.root}>
                    <div class="mdl-tabs vertical-mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                        {this.props.date.map((d) => {
                            console.log("datelist",d)
                            return (
                                <div class="mdl-tabs vertical-mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                                    <div class="mdl-grid mdl-grid--no-spacing">
                                        <div class="mdl-tabs__tab-bar">
                                            <div href="#tab1-panel" class="mdl-tabs__tab is-active">
                                                <span class="hollow-circle"></span>
                                                <List  >

                                                    <ListItem class='listitem' button onClick={() => { this.props.clearimages(); this.props.datelist(d.id) }}>

                                                        <ListItemText inset primary={d.name} />

                                                    </ListItem>

                                                </List>
                                            </div>

                                        </div>
                                    </div>
                                </div>






                            )
                        })
                        }



                    </div>
                </div>)
        } else {

            return (<p>Loading...</p>)
        }








        // return (
        //     <div className={classes.root}>

        //         <List
        //             component="nav"
        //             subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}>
        //             <ListItem button onClick={() => { this.props.datelist() }}>
        //                 <ListItemText inset primary="June 2018" />

        //             </ListItem> 


        //             {/* <ListItem button onClick={this.handleClick}>

        //                 <ListItemText inset primary="April 2018" />
        //                 {this.state.open ? <ExpandLess /> : <ExpandMore />}
        //             </ListItem>
        //             <Collapse in={this.state.open} timeout="auto" unmountOnExit>
        //                 <List component="div" disablePadding>
        //                     <ListItem button className={classes.nested}>
        //                         <ListItemIcon>

        //                             <SendIcon/>
        //                         </ListItemIcon>
        //                         <ListItemText inset primary="Starred" />
        //                     </ListItem>
        //                 </List>
        //             </Collapse> */}
        //         </List>
        //     </div>
        // );
    }
}

NestedList.propTypes = {
    classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {

    return {
        date: state.calendar

    };

}
function mapDispatchToPropos(dispatch) {
    /**anythin  retrun from this function will endup as props  on  folder-list container */
    console.log("dispatch", dispatchEvent)
    /**whener selectItem is called, result should be pass to reducers  */
    // return bindActionCreators({ selectItem: selectItem, imagecard: dataRecieved }, dispatch); /** before add getall usrrrs */
    return {
        datelist: bindActionCreators(getAllUsers, dispatch),
        calendar: bindActionCreators(getDates, dispatch),
        clearimages: bindActionCreators(clear, dispatch)
    }
}


// export default withStyles(styles)(NestedList);
export default connect(mapStateToProps, mapDispatchToPropos)(withStyles(styles)(NestedList));