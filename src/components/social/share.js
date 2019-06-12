import React from "react"
import { FacebookShare } from "./facebookShare"
import { TwitterShare } from "./twitterShare"
import st from "./Share.css"

export const SocialPlugins = ({ sharelink, hashTag, text, iconColor, textColor }) =>
    <div className={st.share_card}>
        <p style={{color: textColor, fontSize: "10px"}}> SHARE </p>
        <FacebookShare shareLink={sharelink} iconColor={iconColor} />
        <TwitterShare text={text} link={sharelink} iconColor={iconColor} hashTag={hashTag} />
    </div>