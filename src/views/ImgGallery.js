import React, { Component } from 'react';

class ImgGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {cat:''};
        //updateState();
    }

    updateState(){
        this.setState({cat:"meow"});
        // this.setState({imgList:{"2018":{"january":{name:"arrow",id:"2325656"},feb:{},    2017:{} }}});
        console.log("cat:"+this.state.cat);
    }
    render() {
        // this.setState({imgList:{  2018:{january:{name:"arrow",id:"2325656"},feb:{},    2017:{} }}});
       
        console.log("cat:", this.state.cat);
        return (
            <p onClick={()=>{this.updateState()}}> image list </p>
        );
    }
}

export default ImgGallery; 