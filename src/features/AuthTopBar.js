import React from "react";
import { TopBar, BackLink, BackTitle } from "./AuthStyledComponents";
import { BsArrowLeft } from "react-icons/bs"

const AuthTopBar = ({toLink}) => {
    return(
        <TopBar className="top_bar">
            <BackLink to={`/${toLink}`}> <BsArrowLeft size={25} /> </BackLink>
            <BackTitle>Ariel Crypto.</BackTitle>
        </TopBar>
    )
}

export default AuthTopBar;