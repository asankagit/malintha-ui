import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import { connect } from 'react-redux'
import { closeLightBox } from './../actions/lightbox.action'
import { bindActionCreators } from 'redux';

// import VideoIframe from 'components/cat-video';

const imagesoldlist = [
  // VideoIframe,
  // '//placekitten.com/1500/500',
  // '//placekitten.com/4000/3000',
  // '//placekitten.com/800/1200',
  // '//placekitten.com/1500/1500',
  'https://2.bp.blogspot.com/-uhzqRHbSUqE/WWRPagzb5uI/AAAAAAABHCo/kbx8205HTQ4NThlrnMhEDLE8ak7JqJoUACLcBGAs/s1600/19964917_10207540825957618_1668178836_n.png',
  'https://2.bp.blogspot.com/-uhzqRHbSUqE/WWRPagzb5uI/AAAAAAABHCo/kbx8205HTQ4NThlrnMhEDLE8ak7JqJoUACLcBGAs/s1600/19964917_10207540825957618_1668178836_n.png'
];
console.log(imagesoldlist)






class LightBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };

    
    

  }

  render() {
    let images = ['https://2.bp.blogspot.com/-uhzqRHbSUqE/WWRPagzb5uI/AAAAAAABHCo/kbx8205HTQ4NThlrnMhEDLE8ak7JqJoUACLcBGAs/s1600/19964917_10207540825957618_1668178836_n.png',
    'https://2.bp.blogspot.com/-uhzqRHbSUqE/WWRPagzb5uI/AAAAAAABHCo/kbx8205HTQ4NThlrnMhEDLE8ak7JqJoUACLcBGAs/s1600/19964917_10207540825957618_1668178836_n.png'];
    // const { photoIndex, isOpen } = this.state;
    const photoIndex = 0;
    const isOpen = this.props.isOpen;

    
    
    if(this.props.activeimage!=null){
      
      console.log("IMAGELIGHTBOX:",this.props.activeimage.url)
      images =[this.props.activeimage.url]
    }



    
    return (
      <div>
        {/* <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button> */}

        {/* {isOpen && ( */}
        {this.props.isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            // onCloseRequest={() => this.setState({ isOpen: false })}
            onCloseRequest={() => { this.props.lightBoxStatus() }}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isOpen: state.lightBoxStatus,
    activeimage: state.activeItems


  }
}

function mapDispatchToPropos(dispatch) {
  return {
    lightBoxStatus: bindActionCreators(closeLightBox, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToPropos)(LightBox)

