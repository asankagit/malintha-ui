import React, { Component } from 'react'
import { connect } from 'react-redux'


class SyncObject extends Component {

    render() {

        // if (!this.props.user) {
        //     return <div> User data here </div>
        // } else {
        //     return this.props.usr;

        // }

        if (!this.props.usr.length) {
            return <div>{this.props.usr.Connection}
            </div>
        }
        return (
            <p>{this.viewGen()}</p>
        );
    


    }

    viewGen(){
        return this.props.usr.map((x,i)=>{
            return <p>{x.Connection}</p>
        });
            
    }
}

function mapStateToProps(state) {
    return {
        usr: state.xusers,
        books: state.activeItems
    }
}




export default connect(mapStateToProps)(SyncObject);