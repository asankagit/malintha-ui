import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import {Tabs, Tab,  TabPanel, TabList ,TabProvider} from 'react-web-tabs';
import  './navigationStyle.css'
import { render } from 'react-dom';
import CartoonList from './Gallery/CartoonGallery'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { publications,cartoons } from './../actions/content_type.action';

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
});

class Navigation extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
        if(value){
            this.props.setNavToPublications();
        }else{
            this.props.setNavToCartoons();
        }
    };

    handleChangeIndex = index => {
        alert(index)
        if(index){
            this.props.setNavToPublications();
        }else{
            this.props.setNavToCartoons();
        }
        this.setState({ value: index });
    };

    
    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>
                
               
                
                <Tabs 
                    value={this.state.value}
                    // onChange={this.handleChange}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    style = {{alignContent:"center"}}
                >
                    <Tab className="tabelement" label="Cartoons" />
                    <Tab classdName="tabelement" label="Publications" />
                    
                </Tabs>
              
                <SwipeableViews 
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={(index)=>{alert(index)}}
                >
                    <TabContainer    dir={theme.direction} >  </TabContainer>
                    <TabContainer   dir={theme.direction} >
                        {/* <CartoonList /> */}
                    </TabContainer>
                    
                </SwipeableViews>
            </div>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};


function mapStateToProps(state) {

}

function mapDispatchToPropos(dispatch) {
    return {
        setNavToCartoons: bindActionCreators(cartoons, dispatch),
        setNavToPublications: bindActionCreators(publications, dispatch),
    }
}

// export default withStyles(styles, { withTheme: true })(Navigation);
export default connect(mapStateToProps, mapDispatchToPropos)(withStyles(styles, { withTheme: true })(Navigation));