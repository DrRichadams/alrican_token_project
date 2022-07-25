import React from "react";
import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";

import { colors } from "../../constants/colors";
import { AiFillGold } from "react-icons/ai"
import { AiFillAppstore } from "react-icons/ai"
import { FaUserFriends } from "react-icons/fa"
import { MdHistory } from "react-icons/md"
import { RiLogoutCircleRLine } from "react-icons/ri"

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
import { UserAuth } from "../../contexts/AuthContext";

import { useDispatch } from "react-redux";
import { openModal } from "../../store/actions/modalAction";

const UserDashboard = () => {
    const { userdata} = UserAuth();
    console.log("My user", userdata)
    const dispatch = useDispatch()
    const handleLogout = () => {
        // alert("Logging you out")
        dispatch(openModal())
    }
    return(
        <MainContainer className="main_container">
            <LeftContainer className="left_container">
                <LeftMenu className="left_menu">
                    <ProfileContainer>
                    <UserProfileContainer className="user_profile_container">
                        <UserPicContainer className="left_user_profile_box">
                            <UserPic src={process.env.PUBLIC_URL + "images/user1.jpg"} alt="" />
                        </UserPicContainer>
                        <UserDetailsContainer className="right_user_profile_box">
                            <UserTitle>{userdata.names}</UserTitle>
                            <UserPlan>{userdata.userType}</UserPlan>
                        </UserDetailsContainer>
                    </UserProfileContainer>
                    <LogoutBtn onClick={handleLogout}>
                        <RiLogoutCircleRLine size={25}/>
                    </LogoutBtn>
                    </ProfileContainer>
                    <div className="left_menu_links_container">
                        <h3 className="menu_links_title">More options</h3>
                        <div className="menu_boxes">
                            <NavLink to={""} style={({isActive}) => isActive ? selectedLink:unselectedLink}>
                                <AiFillAppstore size={30} />
                                <MenuLinkTitlte>DASHBOARD</MenuLinkTitlte>
                            </NavLink>
                            <NavLink to={"/user_dash/earnings"} style={({isActive}) => isActive ? selectedLink:unselectedLink}>
                                <AiFillGold size={30} />
                                <MenuLinkTitlte>AFFILIATES</MenuLinkTitlte>
                            </NavLink>
                            {/* <NavLink to={"/user_dash/affiliates"} style={({isActive}) => isActive ? selectedLink:unselectedLink}>
                                <FaUserFriends size={30} />
                                <MenuLinkTitlte>INVESTMENTS</MenuLinkTitlte>
                            </NavLink> */}
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

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: orange;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    :hover {
        color: red;
    }
`;

export const LogoutBtn = styled.div`

`;

export default UserDashboard;