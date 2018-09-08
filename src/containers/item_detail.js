import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';

class ItemDetail extends Component {

    render() {

        if (!this.props.book) {
            return <div> please select one element to see details </div>
        }
        return (
            <div>
                <p onClick={() => {this.myRequest()} }>Item Details view </p>
                <h1>{this.props.book.title}</h1>
                
            </div>
        );
    }

    myRequest() {
        console.log("inside http request method");
        axios.get('https://www.googleapis.com/drive/v3/files/1psOB0_7mAerN6pgx9i8U66lOhL44ob85?alt=media&key=AIzaSyDEZAWdMIwBpqhQ2XZWKA8fKVyWlMWOgSA').then(function (response) {
            console.log(response);
            
          }).catch(function (error) {
            console.log(error);
          });

    }
}

function mapStateToProps(state) {
    return {
        book: state.activeItems
    
    }
}




export default connect(mapStateToProps)(ItemDetail);