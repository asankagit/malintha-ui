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


const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.gray,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
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
    backgroundColor: 'gray',
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
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [''],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
  description:  [<CartoonList/>],
    buttonText: 'Get started',
    imagePath: "https://html.com/wp-content/uploads/flamingo.jpg",
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price:  '',
    description: [ <CartoonList/>],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Loctions'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];








function Pricing(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap className={classes.toolbarTitle}>
            Hewawissage Hasaralla
          </Typography>
          <Button>Features</Button>
          <Button>Enterprise</Button>
          <Button>Support</Button>
          <Button color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
     
      <main className={classes.layout}>
        {/* Hero unit */}
        
        
        <Grid item xs={12} sm={12} md={12}>
            {/* <ItemDetail/> */}
            <LightBox/>
        </Grid>
        {/* <div className={classes.heroContent}> */}
        <div>
          <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
            <Card style={{height:200}}>
            <h1>Thissa Hewawissa</h1>
            <h6>Cartoonist | Author</h6>
            </Card>
              
          </Typography>
          <Typography variant="title" align="center" color="textSecondary" component="p">
           
          </Typography>
        </div>
        {/* End hero unit */}


        <Grid container spacing={12}  alignItems="flex-start">
        
        <Grid xs={12} sm={3} md={3}>
          <DateList/>
          <DateList/>
        </Grid>
        <Grid item  xs={12} sm={9} md={9}>
              <Card>
                <CartoonList/>
                </Card>
                
        </Grid>
        
        
          {/* {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography variant="display2" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <img src ={tier.imagePath} alt="img" height="15 0" />
                    <Typography variant="title" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  {tier.description.map(line => (
                    <Typography variant="subheading" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
                <p> ptag working </p>
               
              </Card>
            
            </Grid>
          ))}
           */}
        </Grid>
        
      </main>
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
      {/* End footer */}
    </React.Fragment>
  );
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pricing);