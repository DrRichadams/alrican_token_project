import React from "react";
import styled from "styled-components";
import { colors } from "./constants/colors";

const Spinner = () => {
    return(
        <SpinnerContainer>
            <SpinnerBox>
                <LoadingText>Loading</LoadingText>
                <SpinnerRed />
                <SpinnerBlue />
                <SpinnerGreen />
            </SpinnerBox>
        </SpinnerContainer>
    )
}

const SpinnerContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const SpinnerBox = styled.div`
    box-sizing: border-box;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    overflow: hidden;
    position: relative;
    animation: text-color 2s ease-in-out infinite;
`;

const SpinnerSector = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    /* background-color: red; */
    border-radius: 50%;
    border: 15px solid transparent;
    mix-blend-mode: overlay;
    /* animation: rotate var(--duration) var(--timing) infinite; */
    pointer-events: none;
`;

const SpinnerRed = styled(SpinnerSector)`
    box-sizing: border-box;
    border-left-color: ${colors.accent};
    animation: rotate 1.5s ease-in-out infinite;
    @keyframes rotate {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
`;
const SpinnerBlue = styled(SpinnerSector)`
    box-sizing: border-box;
    border-left-color: ${colors.accentShadow};
    animation: rotate 2s ease-in infinite;
    @keyframes rotate {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
`;
const SpinnerGreen = styled(SpinnerSector)`
    box-sizing: border-box;
    border-left-color: lightcoral;
    animation: rotate 2.5s ease-out infinite;
    @keyframes rotate {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
`;

const LoadingText = styled.p`
    margin: 0;
    padding: 0;
    animation: text-color 2s ease-in-out infinite;
    @keyframes text-color {

    0%,
    100% {
        color: rgba(0, 0, 0, 1);
    }

    25%,
    75% {
        color: rgba(0, 0, 0, .5);
    }

    50% {
        color: rgba(0, 0, 0, .1);
    }
}
`;

export default Spinner;