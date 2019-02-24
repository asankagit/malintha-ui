import React from "react"
import render from "react-dom"

const fb = () => (
    <div>
        <div id="fb-root">
            <div class="fb-share-button"
                data-href="https://www.your-domain.com/your-page.html"
                data-layout="button_count">
            </div>
        </div>
        {(function (d, s, id) {
            let js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
            fjs.parentNode.insertBefore(js, fjs)
        }(document, 'script', 'facebook-jssdk'))}
    </div>
)

const root = () => (
    <div>
        <div id="fb-root"></div>
        <script async defer src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2"></script>
    </div>
)
const sharebutton = () => render(
    <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
        Share</a></div>
)
const addthis = () => (
    <div>
        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c713ce90b0da28e"></script>
    </div>
)

export class AddthisPlugin extends React.Component {
    render() {
        return (
            <div> 
               
                {/* <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c713ce90b0da28e"></script> */}
                {
                    (function (d, s, id) {
                        let js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s); js.id = id;
                        js.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c713ce90b0da28e";
                        fjs.parentNode.insertBefore(js, fjs)
                    }(document, 'script', 'facebook-jssdk'))
                 }
            </div>
        )
        
    }
}

export { fb, root, sharebutton, addthis }