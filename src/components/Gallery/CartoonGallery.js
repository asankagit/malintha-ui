import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import SelectedImage from "./SelectedImage";
import { connect } from 'react-redux';

const photos = [
    {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200",
        srcSet: [],
        sizes: [],
        width: true,
        height: true
    },
    {
        src: "https://source.unsplash.com/Dm-qxdynoEc/1600x1600",
        srcSet: [],
        sizes: [],
        width: true,
        height: true
    },
    {
        src: "https://source.unsplash.com/qDkso9nvCg0/1200x1600",
        srcSet: [],
        sizes: [],
        width: true,
        height: true
    },
    {
        src: "https://source.unsplash.com/iecJiKe_RNg/1200x1600",
        srcSet: [],
        sizes: [],
        width: true,
        height: true
    },
    {
        src: "https://source.unsplash.com/epcsn8Ed8kY/1200x1600",
        srcSet: [],
        sizes: [],
        width: true,
        height: true
    },
    {
        src: "https://source.unsplash.com/NQSWvyVRIJk/1600x1200",
        srcSet: [],
        sizes: [],
        width: true,
        height: true
    },
    {
        src: "https://source.unsplash.com/zh7GEuORbUw/1200x1600",
        srcSet: [],
        sizes: [],
        width: true,
        height: true
    },
    {
        src: "https://source.unsplash.com/PpOHJezOalU/1600x1200",
        srcSet: [],
        sizes: [],
        width: true,
        height: true
    },
    {
        src: "https://source.unsplash.com/I1ASdgphUH4/1600x1200",
        srcSet: [
            "https://source.unsplash.com/I1ASdgphUH4/500x375 500w",
            "https://source.unsplash.com/I1ASdgphUH4/800x600 800w",
            "https://source.unsplash.com/I1ASdgphUH4/1024x768 1024w",
            "https://source.unsplash.com/I1ASdgphUH4/1600x1200 1600w"
        ],
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
    }
];

const GallerySrcsetSizes = () => <Gallery photos={photos} />;

class CartoonGallery extends React.Component {
    constructor(props) {
        super(props);
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

        let photolist = [{
            src: "https://source.unsplash.com/I1ASdgphUH4/1600x1200",
            srcSet: [
                "https://source.unsplash.com/I1ASdgphUH4/500x375 500w",
                "https://source.unsplash.com/I1ASdgphUH4/800x600 800w",
                "https://source.unsplash.com/I1ASdgphUH4/1024x768 1024w",
                "https://source.unsplash.com/I1ASdgphUH4/1600x1200 1600w"
            ],
            sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
            width: 4,
            height: 3
        }];
        console.log("4to URL", this.props.photoUrl)
        if (typeof this.props.photoUrl != undefined && this.props.photoUrl[0]){

            
            this.props.photoUrl.map((image) => {
                let tmpobj = {};
                tmpobj.src = image.url;
                tmpobj.srcSet = [];
                tmpobj.sizes = [];
                tmpobj.width = true;
                tmpobj.height = true;
                photolist.push(tmpobj)
                
            })
            
        }
        console.log("x123",photolist)
        return photolist

    }

    selectPhoto(event, obj) {
        let photos = this.state.photos;
        photos[obj.index].selected = !photos[obj.index].selected;
        this.setState({ photos: photos });
    }
    toggleSelect() {
        let photos = this.state.photos.map((photo, index) => {
            return { ...photo, selected: !this.state.selectAll };
        });
        this.setState({ photos: photos, selectAll: !this.state.selectAll });
    }
    render() {
        let photoautoGen = this._generatePhotos()
        return (
            <div>
                
                <Gallery
                    photos={photoautoGen }
                    onClick={this.selectPhoto}
                    ImageComponent={SelectedImage}
                    direction={"column"}
                />

            </div>
        )
    }


}



function mapStateToProps(state) {

    return {
        photoUrl: state.imagecard,


    };

}
function mapDispatchToPropos(dispatch) {

}


// export default withStyles(styles)(NestedList);
export default connect(mapStateToProps)(CartoonGallery);
