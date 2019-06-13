import React from "react"

export const FacebookShare = ({ shareLink = window.location.href, iconColor }) => {
    function _handleClick() {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareLink}%2F&amp;src=sdkpreparse`, "popUpWindow", "height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes")
    }
    return (
        <div>
            <div id="fb-root" />
            <div
                onClick={_handleClick}
                style={{color: iconColor}}
            >
                <svg
                    width="30px"
                    height="30px"
                    aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="svg-inline--fa fa-facebook fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                ><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
            </div>

        </div>
    )
}
