import { colors } from "../constants/colors";
import styled from "styled-components";



export const InvestmentPackages = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    margin-bottom: 50px;
    @media (max-width: 980px) {
        grid-template-columns: 1fr 1fr;
    };
    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

export const FooterParagraph = styled.h3`
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: 15px;
    color: #01050f;
`;

export const FooterTitle = styled.h3`
    color: ${colors.accent};
    margin: 0;
`;

export const ContactDetail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const InnerFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    padding-top: 50px;
    margin-bottom: 200px;
    @media(max-width: 950px) {
        grid-template-columns: 1fr 1fr;
    }
    @media(max-width: 750px) {
        grid-template-columns: 1fr;
    }
`;

export const BottomFooter = styled.div`
    box-sizing: border-box;
    padding: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 60px;
    background-color: ${colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #ccc;
    @media(max-width: 680px) {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: center;
        gap: 15px;
    }
`;

export const FQQCONTAINER = styled.div`

`;

export const FaqBox = styled.div`
    padding-bottom: 15px;
    border-bottom: 2px solid #fff;
`;

export const FaqQuestionBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FaqQuestion = styled.p`
    /* color: ${colors.accent}; */
    color: #d9d9d9;
    text-transform: uppercase;
    padding-right: 60px;
    pointer-events: none;
`;

export const FaqAnswer = styled.p`
    color: ${colors.secondary};
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: 13px;
    line-height: 22px;
    padding-right: 60px;
    display: ${props=>props.display};
    pointer-events: none;
`;

export const Para = styled.p`
    color: #fff;
    text-align: center;
    font-family: roboto, sans-serif;
    font-weight: 300;
    margin-bottom: 50px;
`;

export const SocContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    @media (max-width: 830px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 80px;
    }
    @media (max-width: 450px) {
        grid-template-columns: 1fr;
        /* gap: 80px; */
    }
`;

export const SocCircle = styled.a.attrs(props=>({
    href: `https://${props.link}`,
    target: "_blank",
}))`
    background-color: #fff;
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: ${props=>props.color};
    position: relative;
    overflow: hidden;
    border: 2px solid transparent;
    * {
        transition: all 300ms ease-in-out;
        z-index: 1;
    };
    :hover {
        //color: #ccc !important;
        box-shadow: -3px -3px 12px #fff,
                    3px 3px 12px #fff;
        border: 2px solid ${props=>props.color};
    };
    :hover > *{
        transform: scale(1.5);
    };
`;

export const CompansationPlan = styled.div`
    display: flex;
    /* align-items: flex-start; */
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    /* background-color: red; */
    gap: 20px;
    @media (max-width: 780px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const PackageBox = styled.div`
    background-color: ${props=>props.bg_color};
    position: relative;
    padding: 70px 20px;
    margin-top: 80px;
    border-radius: 8px;
    //box-shadow: -6px -6px 4px rgba(255,255,255,0.6);
`;

export const PackageTitle1 = styled.h3`
    color: ${colors.accent};
    font-family: oswald, sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 900;
    margin: 0;
    padding: 0;
    text-align: center;
`;
export const PackageTitle = styled.p`
    color: ${props=>props.color};
    margin: 0;
    padding: 0;
    font-family: roboto, sans-serif;
    line-height: 22px;
    font-weight: 400;
`;

export const PackagePrize = styled.p`
    background-color: ${colors.accent};
    border: 8px solid ${colors.primary};
    border-radius: 50%;
    width: 70px;
    height: 70px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.bg_color};
    font-size: 13px;
    font-weight: bold;
    position: absolute;
    top: -55px;
    left: 50%;
    transform: translateX(-50%);
`;

export const PackageBtn = styled.button`
    background-color: ${colors.accent};
    color: ${colors.primary};
    border: 2px solid transparent;
    border-radius: 6px;
    padding: 12px 30px;
    font-family: roboto, sans-serif;
    text-transform: uppercase;
    font-size: bold;
    display: block;
    margin: 15px auto;
    cursor: pointer;
    :hover{
        background-color: transparent;
        color: ${colors.accent};
        border-color: ${colors.accent};
    };
`;

export const StrategyBox = styled.div`
    position: relative;
    z-index: 100;
    padding-bottom: 15px;
    margin-bottom: 10px;
    ::after {
        content: '';
        position: absolute;
        z-index: -1;
        bottom: 0;
        left: 0;
        height: calc(${props => props.pos} * 3px);
        width: 100%;
        background-color: ${colors.accent};
    }
`

export const StrategyTitle = styled.p`
    color: ${colors.secondary};
    font-family: roboto, sans-serif;
    text-transform: uppercase;
    /* text-align: right; */
`

export const CustomeTitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-family: oswald;
    font-size: 60px;
    color: ${props => props.color};
    position: relative;
    padding-bottom: 20px;
    text-transform: uppercase;
    ::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: ${props => props.b_color};
    };
    @media (max-width: 860px) {
        font-size: 40px;
    };
    @media (max-width: 580px) {
        font-size: 30px;
    };

`;
export const InnerServiceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px) {
        flex-direction: column;
    };
`;

export const HomeBanner = styled.div`
    display: flex;
    align-items: center;
    height: 80vh;
    /* background-color: red; */
    @media (max-width: 780px) {
        flex-direction: column;
    };
`;

export const About_sect = styled.div`
    display: flex;
    align-items: flex-start;
    min-height: 80vh;
    /* background-color: red; */
    gap: 20px;
    @media (max-width: 780px) {
        flex-direction: column;
        align-items: flex-end;
    }
`;

export const BoxContainer = styled.div`
    box-shadow: 12px 12px 30px rgba(255, 138, 0, 0.4),
                -12px -12px 30px rgba(255, 138, 0, 0.4);
    /* background-color: ${colors.bg_color}; */
    padding: 20px;
    max-width: 300px;
    /* min-width: 250px; */
    @media (max-width: 750px) {
        min-width: 250px;
        max-width: 150px;
    }
    @media (max-width: 700px) {
        max-width: 100%;
    }
`;