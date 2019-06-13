import React from "react"
import { FacebookShare } from "./facebookShare"
import { TwitterShare } from "./twitterShare"
import  "./Share.css"

export const SocialPlugins = ({ sharelink, hashTag, text, iconColor, textColor }) =>
    <div className={"share_card"}>
        <p style={{color: textColor, fontSize: "10px"}}></p>
        <div className="circle">
            <FacebookShare shareLink={sharelink} iconColor={iconColor} />
        </div>
        <div className="circle">
            <TwitterShare text={text} link={sharelink} iconColor={iconColor} hashTag={hashTag} />
        </div>
    </div>