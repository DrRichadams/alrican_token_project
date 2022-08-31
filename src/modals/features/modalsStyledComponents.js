import styled from "styled-components";
import { colors } from "../../constants/colors";


export const TitleInner = styled.span`
    color: ${colors.accent};
`;
export const CreateWalletBtn = styled.button`
    border: none;
    background-color: ${colors.accent};
    color: #fff;
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    padding: 12px;
    width: 325px;
    /* box-shadow: 1px 1px 12px rgba(0,0,0,0.1); */
    border-radius: 6px;
    margin-top: 15px;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover{
        background-color: #01050f;
        color: ${colors.accent};
    }
`;
export const WalletInput = styled.input`
    border: none;
    outline-color: ${colors.accent};
    background-color: ${colors.accentShadow};
    font-family: Roboto, sans-serif;
    padding: 12px;
    width: 300px;
    box-shadow: 1px 1px 12px rgba(0,0,0,0.1);
`;
export const AcceptWalletBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 25px;
`;

export const AcceptTitle = styled.h3`
    font-family: Inter, sans-serif;
    text-transform: uppercase;
    color: #01050f;
`;


export const BtnExit = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: red;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover{
        background-color: red;
        color: #fff;
        transform: rotate(180deg) scale(0.8);
    }
`;
export const ExitPortal = styled.div`
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
export const WalletsMenu = styled.div`
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

export const MenuItem = styled.button`
    width: 120px;
    padding: 15px;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    border-bottom: 2px solid ${props=>props.isActive ? colors.accent:"transparent"};
    color: ${colors.accent};
    color: ${props=>props.isActive ? colors.accent:"rgba(108,93,211,0.4)"};
    font-family: Roboto, sans-serif;
    font-size: 17px;
    transition: all .25s ease-in-out;
    :hover {
        color: rgba(108,93,211,1);
    }
`;


export const PortalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
    padding: 25px;
    box-sizing: border-box;
    display: ${props=>props.show};
`;

// FROM LOGOUT MODATL

export const LogoutBox = styled.div`
    background-color: #fff;
    width: 30vw;
    min-width: 230px;
    height: 45vh;
    box-sizing: border-box;
    padding: 12px;
    border-radius: 6px;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.8),
    -3px -3px 12px rgba(0,0,0,0.5);
    @media (max-width: 1060px) {
        width: 50vw;
    }
    @media (max-width: 630px) {
        width: 70vw;
    }
    @media (max-width: 400px) {
        width: 95vw;
    }
`;
export const LogoutWarning = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 15px;
    margin-bottom: 25px;
    color: ${colors.accent};
`;
export const LogoutText = styled.h3`
    font-family: Inter, sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
`;
export const LogoutBtns = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;
export const LogoutCancel = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.accentShadow};
    color: ${colors.primary};
    cursor: pointer;
    transition: all 250ms ease-in-out;
    padding: 9px 15px;
    /* width: 100%; */
    flex: 1;
    border: 2px solid transparent;
    border-radius: 6px;
    box-sizing: border-box;
    :hover {
        /* opacity: .9;
        padding: 9px 12px; */
        transform: scale(0.95);
        border-color: ${colors.accent};
        color: ${colors.accent};
        background-color: transparent;
    }
`;
export const LogoutBtnText = styled.p`
    margin: 0;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    font-weight: 600;
`;
export const LogoutIndeed = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.accent};
    color: ${colors.secondary};
    cursor: pointer;
    transition: all 250ms ease-in-out;
    padding: 9px 15px;
    /* width: 100%; */
    flex: 1;
    border: 2px solid transparent;
    border-radius: 6px;
    box-sizing: border-box;
    :hover {
        /* opacity: .9;
        padding: 9px 12px; */
        transform: scale(0.95);
        border-color: ${colors.accent};
        color: ${colors.accent};
        background-color: transparent;
    }
`;