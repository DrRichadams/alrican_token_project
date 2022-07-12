import React, { useState } from "react"
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
    return(
        <div className="home_page_">
            <SectionContainer bg_color={colors.primary}>
                <HomeMenu />
                {/* <div className="home_banner"> */}
                <HomeBanner>
                    <div className="left_sect">
                        <Title1 color={colors.secondary}>Ariel Crypto Management</Title1>
                        <Title2 color={colors.accent}>Your #1 investment platform</Title2>
                        <Text1 color={colors.secondary}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        tempor incididunt ut labore et dolore magna aliqua 
                        Ut enim ad minim veniam,
                        </Text1>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="right_about">
                        <Img1 src={process.env.PUBLIC_URL + "/images/right_about.png"} alt="" />
                    </div>
                </About_sect>
            </SectionContainer>
            <SectionContainer bg_color={colors.secondary}>
                <h3>WHAT WE STAND FOR</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, animi autem voluptatum impedit eos explicabo corrupti dolorum molestias blanditiis qui ipsa aut unde fugit nihil, accusamus molestiae, fuga porro alias?</p>
                <div className="future_box_container">
                    <BoxContainer>
                        <h3>MISSION</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, iusto! Ab saepe sunt nobis aliquam harum, ad, possimus, dolorum amet cupiditate quas at et laboriosam perspiciatis nostrum consectetur animi velit ipsam! Velit voluptates quis ipsum.</p>
                    </BoxContainer>
                    <BoxContainer>
                        <h3>VISION</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, iusto! Ab saepe sunt nobis aliquam harum, ad, possimus, dolorum amet cupiditate quas at et laboriosam perspiciatis nostrum consectetur animi velit ipsam! Velit voluptates quis ipsum.</p>
                    </BoxContainer>
                    <BoxContainer>
                        <h3>VALUES</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, iusto! Ab saepe sunt nobis aliquam harum, ad, possimus, dolorum amet cupiditate quas at et laboriosam perspiciatis nostrum consectetur animi velit ipsam! Velit voluptates quis ipsum.</p>
                    </BoxContainer>
                </div>
            </SectionContainer>
            <SectionContainer bg_color={colors.bg_color}>
                <CustomeTitle color={colors.accent} b_color="black">OUR SERVICES</CustomeTitle>
                <InnerServiceContainer>
                    <Img1 src={process.env.PUBLIC_URL + "/images/affiliates_pic.png"} alt="" className="left_service service_pic" />
                    <div className="right_service service_box">
                        <h1 className="service_title">Affiliate Marketing</h1>
                        <p className="service_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="service_btn">Get Started</button>
                    </div>
                </InnerServiceContainer>
                <InnerServiceContainer>
                    <div className="left_service service_box">
                        <h1 className="service_title">Investment Management</h1>
                        <p className="service_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="service_btn">Get Started</button>
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
                        <PackageBtn>Get started</PackageBtn>
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

export default HomePage;