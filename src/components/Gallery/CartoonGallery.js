import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import SelectedImage from "./SelectedImage";
import { connect } from 'react-redux';
import { getDefaultImageCardItems } from './../../actions/pageload.action';
import { bindActionCreators } from 'redux';
import { CartoonElement } from "./CartoonElement"
import  { SocialPlugins } from "../social/share"
const photos = [
    {
        src: "#",
        srcSet: [],
        sizes: [],
        width: true,
        height: true
    }
];

const GallerySrcsetSizes = () => <Gallery photos={photos} />;

class CartoonGallery extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.photoUrl.size) {
            this.props.defaultimages();

        }

        this.state = {
            photos: photos,
            selectAll: false,
            isloading: true
        };
        this.selectPhoto = this.selectPhoto.bind(this);
        this.toggleSelect = this.toggleSelect.bind(this);
        this._generatePhotos = this._generatePhotos.bind(this);
    }

    componentDidMount() {
        this.setState({ isloading: false })
    }

    _generatePhotos() {

        let photolist = [{}];

        if (typeof this.props.photoUrl != undefined && this.props.photoUrl[0]) {
            console.log("photourl", this.props.photoUrl)
            photolist.pop();
            this.props.photoUrl.map((image) => {
                let max = 10;
                let min = 8;
                let tmpobj = {};
                tmpobj.src = image.url;
                tmpobj.srcSet = [];
                tmpobj.sizes = [];
                tmpobj.width = Math.floor(Math.random() * (+max - +min)) + +min;
                tmpobj.height = Math.floor(Math.random() * (+max - +min)) + +min;
                tmpobj.index = image.id;
                photolist.push(tmpobj)
                

            })

        }
        console.log("x123", photolist)
        return photolist

    }

    selectPhoto(event, obj) {
        let photos = this.props.photoUrl || [];//this.state.photos;
        photos[obj.index].selected = !photos[obj.index].selected;
        this.setState({ photos: photos });
    }
    toggleSelect() {
        let photos = this.state.photos.map((photo, index) => {
            return { ...photo, selected: !this.state.selectAll };
        });
        this.setState({ photos: photos, selectAll: !this.state.selectAll });
    }

    _generateFlexElementCartoonItems = () => {
        return (Boolean(typeof this.props.photoUrl != undefined && this.props.photoUrl[0]) ? 
                this.props.photoUrl.map((image, index) => {
                   return (<div key={image.id} /*style={{backgroundImage:`url(${image.url})`}}*/>
                   <img src={image.url} width="100%" />
                   <div class="share"> <SocialPlugins  sharelink={"#"} hashTag="" text="" iconColor="" textColor =""/></div>
                    </div>)
                })
                : 
                (<p> no elements to show </p>))
            
    }

    
    render() {
       
        let photoautoGen = this._generatePhotos()
        let mt = true
        
        if (this.props.photoUrl[0]) {
            mt = false;
        }
        if (mt == true) {


            return(
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
            </div>
            )
        } else {

            return (
                <div>
                    <CartoonElement >
                        { this._generateFlexElementCartoonItems()}
                    </CartoonElement> 
                    {/* <Gallery 
                        photos={photoautoGen}
                        onClick={this.selectPhoto}
                        ImageComponent={SelectedImage}
                        direction={"column"}
                    /> */}

                </div>
            )
        }
    }


}



function mapStateToProps(state) {

    return {
        photoUrl: state.imagecard,


    };

}
function mapDispatchToPropos(dispatch) {
    return {
        defaultimages: bindActionCreators(getDefaultImageCardItems, dispatch),
    }
}


// export default withStyles(styles)(NestedList);
export default connect(mapStateToProps, mapDispatchToPropos)(CartoonGallery);
