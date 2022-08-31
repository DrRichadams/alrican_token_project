import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

import { colors } from "../../constants/colors";
import { AiFillGold } from "react-icons/ai"
import { AiFillAppstore } from "react-icons/ai"
import { AiFillWarning } from "react-icons/ai"
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
    LeftMobileMenu
 } from "../features/UserDashStyledComponents";
 import { RightContainer } from "../features/Containers";
 import RightContainerComponent from "../features/Containers";
import { UserAuth } from "../../contexts/AuthContext";

import { useDispatch } from "react-redux";
import { openModal, openAvatarModal } from "../../store/actions/modalAction";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../firebase/config";


const getProofImg = async (id) => {
    const docRef = doc(db, "avatars", id);
    const docSnap = await getDoc(docRef);
  
    try {
        const data = docSnap.data();
        console.log(data)
        return data
    } catch (error) {console.log("My error", error)}
}

const UserDashboard = () => {
    const [imageName, setImageName] = useState(null)
    const { userdata, user, hasKYC, myAvatar } = UserAuth();
    // console.log("My user", userdata)
    const dispatch = useDispatch()
    const handleLogout = () => {
        // alert("Logging you out")
        dispatch(openModal())
    }

    const navigate = useNavigate();

    useEffect(() => {
        try{
         getProofImg(user.uid).then((data) => {
        //    console.log("My img profile", data)
           setImageName(data.url)
          })
        } catch(e) {console.log(e)}
    }, [user])

    const handleUserProfileClicked = () => {
        dispatch(openAvatarModal())
    }

    return(
        <MainContainer>
            <LeftContainer>
                <LeftMenu>
                    <ProfileContainer>
                    <UserProfileContainer className="user_profile_container">
                        <ImgBoxer onClick={() => handleUserProfileClicked()}>
                            {/* <UserPic src={process.env.PUBLIC_URL + "images/user1.jpg"} alt="" /> */}
                            {/* {imageName && <ImageRender imgName={imageName} />} */}
                            {/* <Imager src={imageName} alt="" /> */}
                            {myAvatar && <Imager src={myAvatar[0]?.url} alt="" /> }
                        </ImgBoxer>
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
                {
                    !hasKYC &&
                    <KYC_box>
                        <KYC_warning>
                            <KYC_Title>You must enter your KYC information in order to be able to withdraw money.</KYC_Title>
                            <AiFillWarning size={20} />
                        </KYC_warning>
                        <KYC_btn onClick={() => navigate("/KYC")}>Let's do it!</KYC_btn>
                    </KYC_box>
                }
                <Outlet />
            </RightContainerComponent>
            <LeftMobileMenu>
            <ImgBoxer onClick={() => handleUserProfileClicked()}>
                {/* <UserPic src={process.env.PUBLIC_URL + "images/user1.jpg"} alt="" /> */}
                {/* {imageName && <ImageRender imgName={imageName} />} */}
                {/* <Imager src={imageName} alt="" /> */}
                {myAvatar && <Imager src={myAvatar[0]?.url} alt="" /> }
            </ImgBoxer>

                <MobileLinks>
                    <NavLink to={""} style={({isActive}) => isActive ? selectedLink:unselectedLink}>
                        <AiFillAppstore size={30} />
                        {/* <MenuLinkTitlte>DASHBOARD</MenuLinkTitlte> */}
                    </NavLink>
                    <NavLink to={"/user_dash/earnings"} style={({isActive}) => isActive ? selectedLink:unselectedLink}>
                        <AiFillGold size={30} />
                        {/* <MenuLinkTitlte>AFFILIATES</MenuLinkTitlte> */}
                    </NavLink>
                    <NavLink to={"/user_dash/withdrawal_history"} style={({isActive}) => isActive ? selectedLink:unselectedLink}>
                        <MdHistory size={30} />
                        {/* <MenuLinkTitlte>WITHDRAWAL HISTORY</MenuLinkTitlte> */}
                    </NavLink>
                </MobileLinks>

                <LogoutBtn onClick={handleLogout}>
                    <RiLogoutCircleRLine size={30} color={"orange"}/>
                </LogoutBtn>
            </LeftMobileMenu>
        </MainContainer>
    )
}


export const MobileLinks = styled.div`
    display: flex;
    /* flex-direction: row-reverse; */
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    color: orangered;
`;
export const KYC_warning = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: orangered;
`;

export const KYC_btn = styled.button`
    border: none;
    background-color: orangered;
    color: #fff;
    padding: 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
        background-color: red;
        color: black;
    }
`;
export const KYC_Title = styled.p`
    margin: 0;
    color: orangered;
    font-family: Roboto, sans-serif;
`;
export const KYC_box = styled.div`
    background-color: #f5f5f5;
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    padding: 12px 20px;
    border-radius: 7px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.4),
                -1px -1px 4px rgba(0,0,0,0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ImgBoxer = styled.div`
        background-color: #f5f5f5;
    width: 50px;
    height: 50px;
    border: 2px solid ${colors.accent};
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    transition: all .25s ease-in-out;
    margin-right: 20px;
    :hover {
        ::after{
            content: 'Edit';
            transition: all .25s ease-in-out;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background-color: rgba(0,0,0,0.5);
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Roboto, sans-serif;
            color: #f5f5f5;
            cursor: pointer;
        }
    }
`;

export const ImgBox = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
    background-color: ${colors.accent};
`;
export const Imager = styled.img`
    width: 100%;
`;

export const ImageWarning = styled.div`
  background: linear-gradient(45deg, #8E2DE2, #4A00E0);
`;
export const Waiting = styled.p`
  margin: 0;
  color: #fff;
`;

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