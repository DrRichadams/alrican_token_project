import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import BG_IMAGE from "../../resources/BG_IMAGE.jpg"

export const RightContainer = styled.div`
    background-color: #01050f10;
    /* background: linear-gradient(60deg, rgba(255, 138, 0, 0.3), rgba(255,0,0,0.2)); */
    /* background-image: url("../../resources/BG_IMAGE.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */
    width: 100%;
    padding: 20px 100px;
    position: relative;
    overflow: hidden;
`;


export const ChildrenContainer = styled.div`
    position: relative;
    z-index: 1000;
`;





const RightContainerComponent = ({children}) => {
    return(
        <RightContainer>
            <ChildrenContainer>{children}</ChildrenContainer>
        </RightContainer>
    )
}

export default RightContainerComponent;