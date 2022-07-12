import React from "react";
import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";

import { colors } from "../../constants/colors";
import { AiFillGold } from "react-icons/ai"
import { AiFillAppstore } from "react-icons/ai"
import { FaUserFriends } from "react-icons/fa"
import { MdHistory } from "react-icons/md"

import { 
    LeftMenu,
    LeftContainer,
    MainContainer,
    commonLinkStyles,
    selectedLink,
    unselectedLink,
    MenuLinkTitlte,
    UserProfileContainer,
    UserDetailsContainer,
    UserPlan,
    UserTitle,
    UserPicContainer,
    UserPic,
 } from "../features/UserDashStyledComponents";
 import { RightContainer } from "../features/Containers";
 import RightContainerComponent from "../features/Containers";


const UserDashboard = () => {
    return(
        <MainContainer className="main_container">
            <LeftContainer className="left_container">
                <LeftMenu className="left_menu">
                    <UserProfileContainer className="user_profile_container">
                        <UserPicContainer className="left_user_profile_box">
                            <UserPic src={process.env.PUBLIC_URL + "images/user1.jpg"} alt="" />
                        </UserPicContainer>
                        <UserDetailsContainer className="right_user_profile_box">
                            <UserTitle>Alice Alexus</UserTitle>
                            <UserPlan>Premium member</UserPlan>
                        </UserDetailsContainer>
                    </UserProfileContainer>
                    <div className="left_menu_links_container">
                        <h3 className="menu_links_title">More options</h3>
                        <div className="menu_boxes">
                            <NavLink to={""} style={({isActive}) => isActive ? selectedLink:unselectedLink}>
                                <AiFillAppstore size={30} />
                                <MenuLinkTitlte>DASHBOARD</MenuLinkTitlte>
                            </NavLink>
                            <NavLink to={"/user_dash/earnings"} style={({isActive}) => isActive ? selectedLink:unselectedLink}>
                                <AiFillGold size={30} />
                                <MenuLinkTitlte>DIVIDENTS AND AFFILIATES</MenuLinkTitlte>
                            </NavLink>
                            <NavLink to={"/user_dash/affiliates"} style={({isActive}) => isActive ? selectedLink:unselectedLink}>
                                <FaUserFriends size={30} />
                                <MenuLinkTitlte>INVESTMENTS</MenuLinkTitlte>
                            </NavLink>
                            <NavLink to={"/user_dash/withdrawal_history"} style={({isActive}) => isActive ? selectedLink:unselectedLink}>
                                <MdHistory size={30} />
                                <MenuLinkTitlte>WITHDRAWAL HISTORY</MenuLinkTitlte>
                            </NavLink>
                        </div>
                    </div>
                </LeftMenu>
            </LeftContainer>
            <RightContainerComponent>
                <Outlet />
            </RightContainerComponent>
        </MainContainer>
    )
}

export default UserDashboard;