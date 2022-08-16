import React, {useState, useEffect} from "react";
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

const ImageRender = ({imgName}) => {
    const [my_img, setMy_img] = useState(null)
    const imgRef = ref(storage, `avatars/${imgName}`);
    getDownloadURL(imgRef)
    .then((url) => {
      setMy_img(url)
    //   console.log("Possible url ", url)
    })
    if(my_img !== null) return<Imager src={my_img} alt="" />
    if(my_img === null) return <ImageWarning></ImageWarning>
  }


const UserDashboard = () => {
    const [imageName, setImageName] = useState(null)
    const { userdata, user } = UserAuth();
    console.log("My user", userdata)
    const dispatch = useDispatch()
    const handleLogout = () => {
        // alert("Logging you out")
        dispatch(openModal())
    }

    useEffect(() => {
        try{
         getProofImg(user.uid).then((data) => {
           console.log("My img profile", data)
           setImageName(data.name)
          })
        } catch(e) {console.log(e)}
    }, [user])

    return(
        <MainContainer className="main_container">
            <LeftContainer className="left_container">
                <LeftMenu className="left_menu">
                    <ProfileContainer>
                    <UserProfileContainer className="user_profile_container">
                        <ImgBox>
                            {/* <UserPic src={process.env.PUBLIC_URL + "images/user1.jpg"} alt="" /> */}
                            {imageName && <ImageRender imgName={imageName} />}
                        </ImgBox>
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