import React from "react"
import "./CartoonElement.css"
// import {SocialPlugins } from "../social/share"
export const CartoonElement = (props) => {
    return <div class="flex_container">
                {props.children}

            </div>
}