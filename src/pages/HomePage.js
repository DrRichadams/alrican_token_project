import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeMenu from "../components/HomeMenu";
import { SectionContainer } from "../features/SectionContainer";
import { colors } from "../constants/colors";
import { Title1, Title2, Text1 } from "../utils/Titles";
import { Img1 } from "../utils/Images";
import { 
    investment_strategies, 
    investment_packages, 
    qualities,
    FAQ
} from "../constants/DATA";
import { FaFacebookF } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { RiInstagramFill, RiTwitterFill } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import InvestmentPackagesComponent from "../components/InvestmentPackagesComponent";

import { 
    FooterParagraph,
    FooterTitle,
    ContactDetail,
    InnerFooter,
    BottomFooter,
    FQQCONTAINER,
    FaqBox,
    FaqQuestionBox,
    FaqQuestion,
    FaqAnswer,
    Para,
    SocContainer,
    SocCircle,
    CompansationPlan,
    PackageBox,
    PackageTitle1,
    PackageTitle,
    PackagePrize,
    PackageBtn,
    StrategyBox,
    StrategyTitle,
    CustomeTitle,
    InnerServiceContainer,
    HomeBanner,
    About_sect,
    BoxContainer,
    InvestmentPackages
} from "../features/HomePageStyledComponents";

const HomePage = () => {
    const [ selQuestion, setSelQuestion ] = useState(0)
    const navigate = useNavigate();
    
    return(
        <div className="home_page_">
            <SectionContainer bg_color={colors.primary}>
                <HomeMenu />
                {/* <div className="home_banner"> */}
                <HomeBanner>
                    <div className="left_sect">
                        <Title1 color={colors.secondary}>ALL AFRICAN TOKEN</Title1>
                        <Title2 color={colors.accent}>Private Sale</Title2>
                        <BannerText color={colors.secondary}>
                            Welcome to the <Highlight>All african Coin</Highlight> Private sale. 
                            Here you get a chance to purchase our coin at a very affordable 
                            price and become one of the first individuals to purchase our cryptocurrency
                        </BannerText>
                    </div>
                    <div className="right_sect">
                        <Img1 src={process.env.PUBLIC_URL + "/images/banner_pic.png"} alt="" />
                    </div>
                </HomeBanner>
            </SectionContainer>
            <SectionContainer bg_color={colors.secondary}>
                <h3>KNOW MORE ABOUT US</h3>
                <h3>WE ARE AN AMAZING TEAM WITH YOUR BEST INTERESTS AT HEART</h3>
                <About_sect className="about_box">
                    <div className="left_about">
                        <h3>About <span>Us</span></h3>
                        <p>
                            We are a group of African Blockchain software developers and 
                            Cryptocurrency Experts and Enthousiast with 6+ years of experience. 
                            Team consists of 54 specialists and they are all equally distributed 
                            around Africa to represent and meet each country's population needs 
                            surrounding the crypto space. Our subject matter specialist offers 
                            professional blockchain app development services and Tokens that 
                            guarantee immutability and transparency across a distributed ledger.
                        </p>
                    </div>
                    <div className="right_about">
                        <Img1 src={process.env.PUBLIC_URL + "/images/right_about.png"} alt="" />
                    </div>
                </About_sect>
            </SectionContainer>
            <SectionContainer bg_color={colors.secondary}>
                <ValuesTitle>WHAT WE STAND FOR</ValuesTitle>
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, animi autem voluptatum impedit eos explicabo corrupti dolorum molestias blanditiis qui ipsa aut unde fugit nihil, accusamus molestiae, fuga porro alias?</p> */}
                <QualitiesBox>
                    <StandForContainer>
                        <img src={process.env.PUBLIC_URL + "images/mission.png"} alt="" />
                        <DetailsBox>
                            <QualitiesTitle>MISSION</QualitiesTitle>
                            <QualitiesStory>
                                Mission For the <Highlight>All African Token</Highlight> is to create multiple streams of income for its 
                                Holders. All African Token wants to provide multiple streams of income for its holders to 
                                unlock financial Freedom. All African Token will have an Exchange that will enable 
                                its holders to trade crypto Assets. All African Token will provide debit cards to its 
                                holders to be able to swap their crypto for fiat as well as their fiat for crypto 
                                on the platforms. Crypto ATMs will be available all around Africa to enable Holders 
                                to withdraw their crypto assets.
                            </QualitiesStory>
                        </DetailsBox>
                    </StandForContainer>
                    <StandForContainer>
                        <DetailsBox>
                            <QualitiesTitle>VISION</QualitiesTitle>
                            <QualitiesStory>
                                Vision for Token is to enable users to use the product that will be provided by the 
                                All African coin with efficiency and Income Generation for all its holders, Tokens that 
                                will be used to purchase, transact on the All African Platforms will be burned to decrease 
                                the Circulation and this will increase the Token price for the holders 
                            </QualitiesStory>
                        </DetailsBox>
                        <img src={process.env.PUBLIC_URL + "images/vision.png"} alt="" />
                    </StandForContainer>
                    <StandForContainer>
                    <img src={process.env.PUBLIC_URL + "images/values.png"} alt="" />
                        <DetailsBox>
                            <QualitiesTitle>VALUES</QualitiesTitle>
                            <QualitiesStory>
                                <ValueContainer>
                                    <ValueDot></ValueDot>
                                    <ValueTitle>HONESTY</ValueTitle>
                                </ValueContainer>
                                <ValueContainer>
                                    <ValueDot></ValueDot>
                                    <ValueTitle>TRANSPARENCY</ValueTitle>
                                </ValueContainer>
                                <ValueContainer>
                                    <ValueDot></ValueDot>
                                    <ValueTitle>DILIGENCE</ValueTitle>
                                </ValueContainer>
                                <ValueContainer>
                                    <ValueDot></ValueDot>
                                    <ValueTitle>PATIENCE</ValueTitle>
                                </ValueContainer>
                            </QualitiesStory>
                        </DetailsBox>
                    </StandForContainer>
                </QualitiesBox>
            </SectionContainer>
            <SectionContainer bg_color={colors.bg_color}>
                <CustomeTitle color={colors.accent} b_color="black">OUR SERVICES</CustomeTitle>
                <InnerServiceContainer>
                    <Img1 src={process.env.PUBLIC_URL + "/images/affiliates_pic.png"} alt="" className="left_service service_pic" />
                    <div className="right_service service_box">
                        <h1 className="service_title">Invite and Earn</h1>
                        <p className="service_paragraph">
                            All African Token is offering its holders an opportunity to earn some great rewards 
                            by Inviting others to the private sale. You will receive 10% paid in your wallet 
                            instantly when you invite a friend to become an All African Token Holder as well 
                            as many more Benefits. Consult White paper to find out more information on 
                            Affiliate Benefits
                        </p>
                        <button className="service_btn" onClick={() => navigate("/signup/uxDKTekFvuROQIpgtGLg4kJjOmq2")}>Get Started</button>
                    </div>
                </InnerServiceContainer>
                <InnerServiceContainer>
                    <div className="left_service service_box">
                        <h1 className="service_title">All African Token Future Services</h1>
                        <p className="service_paragraph">
                            <Highlight>All African Token</Highlight> is planning to have the following services :
                        </p>
                        <ValueContainerColumn>
                            <ValueTitle>Alrican metaverse</ValueTitle>
                            <ValueTitle>Alrican DEX (Decentralized Exchange)</ValueTitle>
                            <ValueTitle>Alrican CEX (Centralized Exchange)</ValueTitle>
                            <ValueTitle>Alrican ATMS  </ValueTitle>
                            <ValueTitle>NFT Market place </ValueTitle>
                            <ValueTitle>Smart Contracts </ValueTitle>
                            <ValueTitle>Crypto Refills</ValueTitle>
                            <ValueTitle>Music streaming app </ValueTitle>
                            <ValueTitle>Movies and series Streaming </ValueTitle>
                            <ValueTitle>And many more  </ValueTitle>
                        </ValueContainerColumn>
                        <button className="service_btn" onClick={() => navigate("/signup/uxDKTekFvuROQIpgtGLg4kJjOmq2")}>Get Started</button>
                    </div>
                    <Img1 src={process.env.PUBLIC_URL + "/images/investment_img.png"} alt="" className="right_service service_pic" />
                </InnerServiceContainer>
            </SectionContainer>
            <SectionContainer bg_color={colors.primary}>
                <CustomeTitle color={colors.accent} b_color="#fff">Investment Strategy</CustomeTitle>
                <div className="investment_strategies">
                    { investment_strategies.map((item, index) => ( <StrategyBox pos={index + 5} key={item.id}> <StrategyTitle>{item.name}</StrategyTitle> </StrategyBox> )) }
                </div>
            </SectionContainer>
            <SectionContainer bg_color={colors.primary}>
                <CustomeTitle color={colors.accent} b_color="#fff">Our Investment Packages</CustomeTitle>
                
                <InvestmentPackagesComponent />
            </SectionContainer>
            <SectionContainer bg_color={colors.menu_color}>
                <CustomeTitle color={colors.accent} b_color={colors.accent}>How it works</CustomeTitle>
                <InnerServiceContainer>
                    <Img1 src={process.env.PUBLIC_URL + "/images/how_it_works.png"} alt="" className="left_service service_pic" />
                    <div className="right_service service_box">
                        <h1 className="service_title">How to get the best out of your investments and affiliates</h1>
                        <p className="service_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </InnerServiceContainer>
            </SectionContainer>
            <SectionContainer bg_color={colors.primary}>
                <CustomeTitle color={colors.accent} b_color={colors.accent}>Assets under management value</CustomeTitle>
                <InnerServiceContainer>
                    <div className="right_service service_box">
                        <h1 className="service_title">Know more about your assets</h1>
                        <p className="service_paragraph" style={{ color: '#fff' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <Img1 src={process.env.PUBLIC_URL + "/images/assets_under.png"} alt="" className="left_service service_pic" />
                </InnerServiceContainer>
            </SectionContainer>
            <SectionContainer bg_color={colors.secondary}>
                <CustomeTitle color={colors.accent} b_color={colors.accent}>Compensation Plan</CustomeTitle>
                <CompansationPlan className="about_box">
                    <div className="left_about">
                        <h3>HERE IS OUR COMPENSATION PLAN</h3>
                        {/* <h3>About <span>Us</span></h3> */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="right_about">
                        <Img1 src={process.env.PUBLIC_URL + "/images/compansation.png"} alt="" />
                    </div>
                </CompansationPlan>
            </SectionContainer>
            <SectionContainer bg_color={"#01050F"}>
                <CustomeTitle color={colors.accent} b_color={colors.accent}>Let's get social</CustomeTitle>
                <Para>Get to know us personally through our social media platforms. <br></br>Can't wait to see you there!</Para>
                <SocContainer className="social_media_boxes">
                    <SocCircle link="facebook.com" color="#1976D2"><FaFacebookF size={36} /></SocCircle>
                    <SocCircle link="linkedin.com" color="#0177B5"><SiLinkedin size={36} /></SocCircle>
                    <SocCircle link="instagram.com" color="#D34069"><RiInstagramFill size={36} /></SocCircle>
                    <SocCircle link="twitter.com" color="#03A9F4"><RiTwitterFill size={36} /></SocCircle>
                </SocContainer>
            </SectionContainer>
            <SectionContainer bg_color={colors.primary}>
                <CustomeTitle color={colors.accent} b_color={colors.primary}>FREQUENTLY ASKED QUESTIONS</CustomeTitle>
                <Para>
                    Sometimes you might have questions that need instant answers. <br></br>
                    We have created this frequently asked questions section to help you get those answers faster.
                </Para>
                <FQQCONTAINER>
                    { FAQ.map((item, index) => (
                        <FaqBox key={item.id}>
                            <FaqQuestionBox>
                                <FaqQuestion>{item.question}</FaqQuestion>
                                {index + 1 == selQuestion ? <AiOutlineMinus color="#fff" size={33} onClick={() =>setSelQuestion(0)} style={{cursor: "pointer"}} />:<AiOutlinePlus color="#fff" size={33} onClick={() =>setSelQuestion(index + 1)} style={{cursor: "pointer"}} />}
                            </FaqQuestionBox>
                            <FaqAnswer display={index + 1 == selQuestion ? "block":"none"}>{item.answer}</FaqAnswer>
                        </FaqBox>
                    )) }
                </FQQCONTAINER>
            </SectionContainer>
            <SectionContainer bg_color={colors.bg_color} size={60}>
                <InnerFooter>
                    <div className="part1">
                        <FooterTitle>A.C.M</FooterTitle>
                        <FooterParagraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, animi autem voluptatum impedit eos explicabo corrupti dolorum molestias blanditiis qui ipsa aut unde fugit nihil, accusamus molestiae, fuga porro alias?</FooterParagraph>
                    </div>
                    <div className="part2">
                        <FooterTitle>GET STARTED.</FooterTitle>
                        <FooterParagraph>We have several investment channels to choose from. Start your awesome<br/> journey now.</FooterParagraph>
                        <PackageBtn onClick={() => navigate("/signup/uxDKTekFvuROQIpgtGLg4kJjOmq2")}>Get started</PackageBtn>
                    </div>
                    <div className="part3">
                        <FooterTitle>GET IN TOUCH</FooterTitle>
                        <div className="contacts">
                            <ContactDetail>
                                <strong>Cell:</strong>
                                <FooterParagraph>+264 854 998 481</FooterParagraph>
                            </ContactDetail>
                            <ContactDetail>
                                <strong>Email:</strong>
                                <FooterParagraph>assistance@ariel_crypto.com</FooterParagraph>
                            </ContactDetail>
                        </div>
                    </div>
                </InnerFooter>
                <BottomFooter>
                    <div style={{fontSize: '20px', fontWeight: 'bold'}}>&copy;</div>
                    <div>2022</div>
                    <div>All Rights Reserved</div>
                    <div>Developed by <span style={{color: "rgb(1,161,231)", cursor: "pointer"}}>THE REPUBLIC ARTIST</span></div>
                </BottomFooter>
            </SectionContainer>
        </div>
    )
}



export const ValueContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 15px;
    margin-bottom: 14px;
`;
export const ValueContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 14px;
`;
export const ValueDot = styled.div`
    background-color: green;
    width: 10px;
    height: 10px;
    border-radius: 50%;
`;
export const ValueTitle = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
    color: #01050f;
`;

export const QualitiesStory = styled.h3`
    font-family: Roboto, sans-serif;
    color: #01050f;
    font-weight: 300;
    font-size: 1rem;
`;
export const QualitiesTitle = styled.h3`
    margin: 0;
    margin-top: 25px;
    font-family: Inter, sans-serif;
    color: ${colors.accent};
`;
export const QualitiesBox = styled.div`
    
`;
export const DetailsBox = styled.div`
    
`;
export const StandForContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 40px;
    padding: 12px;
    gap: 20px;
`;
export const ValuesTitle = styled.h3`
    text-align: center;
    margin-bottom: 20px;
    font-family: Inter, sans-serif;
    font-size: 30px;
    font-weight: 800;
    color: ${colors.accent};
`;
export const BannerText = styled.p`
    color: #fff;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    line-height: 23px;
`;
export const Highlight = styled.span`
    color: ${colors.accent};
    text-transform: uppercase;
    font-weight: 600;
`;

export default HomePage;