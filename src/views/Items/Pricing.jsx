import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


import CartoonList from './../../containers/folder-list';
import ItemDetail from './../../containers/item_detail'
import LightBox from './../../containers/LightBox'
import DateList from './../../containers/datelist'
import Navigation from "../../components/navigation"
import Drawer from "../../components/Drawer"

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
    fontSize: 0.01 
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
    [theme.breakpoints.up(1000 + theme.spacing.unit * 3 * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    backgroundColor: '#f5f5f5',
  },
  heroContent: {
    // backgroundImage:  "url('http://listtoday.org/wallpaper/2016/10/clinton-trump-election-political-cartoon-18-desktop-wallpaper.jpg')" ,
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 0.2}px 0 ${theme.spacing.unit * 0.2}px`,
    
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'relative',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
    backgroundColor: '#568932',
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
   
  },
  footer: {
    justifyContent:'center',
    alignItems:'center',
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 1}px 0`,
    
  },
});

const tiers = [
  
];
const footers = [
  {title: '',description: ['','', '']},
  {
    title: `Cartoon World version${React.version}`,
    description: ['Cartoonist','All Right Recieved', '2018', 'Sri Lanka'],
  },
  
];








function Pricing(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      
     
      <div /*main className={classes.layout} */>
        {/* Hero unit */}
      
        
        <Grid item xs={12} sm={12} md={12}>
            {/* <ItemDetail/> */}
            <LightBox/>
        </Grid>
        {/* <div className={classes.heroContent}> */}
        <div>
          <Typography variant="display2" align="center" color="textPrimary" gutterBottom >
            <Card>
            <h1></h1>  
            <p>Thissa Hewawissa</p>
            </Card>
              
          </Typography>
          <Typography variant="title" align="center" color="textSecondary" component="p">
           
          </Typography>
        </div>
        {/* End hero unit */}

        <Navigation/>
        <Grid container spacing={12}  alignItems="flex-start">
        
        <Grid xs={12} sm={3} md={3}>
          <DateList/>
          
        </Grid>
        <Grid item  xs={12} sm={9} md={9}>
              <Card>
                <CartoonList/>
                </Card>
                
        </Grid>
        
        </Grid>
        
      </div  >
      {/* Footer */}
      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="title" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item} variant="subheading" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer>
      
      <Drawer/>
      {/* End footer */}
    </React.Fragment>
  );
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pricing);