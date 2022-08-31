import styled from "styled-components";
import { colors } from "../../constants/colors";



export const commonLinkStyles = {
    textDecoration: 'none',
    marginBottom: '8px',
    padding: '8px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold'
    // justifyContent: 'center',
 }

 export const selectedLink = {
    ...commonLinkStyles,
    backgroundColor: colors.accentShadow,
    color: colors.accent,
};
export const unselectedLink = {
    ...commonLinkStyles,
    backgroundColor: 'transparent',
    color: '#aaa'
};

export const LeftMobileMenu = styled.div`
    /* background-color: red; */
    background-color: #fff;
    width: 100vw;
    height: 100%;
    min-height: 60px;
    padding: 8px 20px;
    box-sizing: border-box;
    display: none;
    /* display: flex; */
    justify-content: space-between;
    align-items: center;
    @media (max-width: 800px) {
        display: flex;
    }
`;
export const LeftMenu = styled.div`
    background-color: #d9d9d9;
    width: 300px;
    height: 100%;
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
`;
export const LeftContainer = styled.div`
    /* display: none;
    position: absolute;
    z-index: 2000; */
    @media (max-width: 800px) {
        display: none;
    }
`;
export const MainContainer = styled.div`
    display: flex;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const MenuLinkTitlte = styled.p`
    margin: 0;
    padding-left: 18px;
    transition: all 200ms ease-in-out;
    font-size: 14px;
    :hover{
        color: ${colors.accent}
    }
`;

export const UserProfileContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const UserDetailsContainer = styled.div`
    /* display: flex; */
`;
export const UserPlan = styled.p`
    margin: 0;
    color: #01050f;
    font-size: 13px;
`;
export const UserTitle = styled.h3`
    margin: 0;
    color: ${colors.primary};
    font-size: 17px;
    text-transform: capitalize;
`;
export const UserPicContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
`;
export const UserPic = styled.img`
    width: 100%;
`;