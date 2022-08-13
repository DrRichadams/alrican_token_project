import React, {useState} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { FiX } from "react-icons/fi"
import { ImBin2 } from "react-icons/im"
import { colors } from "../constants/colors";
import { UserAuth } from "../contexts/AuthContext";

import { useSelector, useDispatch } from "react-redux";
import { closeChangeWalletModal } from "../store/actions/modalAction";

import { 
    PortalContainer,
    ExitPortal,
    BtnExit,
    WalletsMenu,
    MenuItem,
    AcceptWalletBox,
    AcceptTitle,
    TitleInner,
 } from "./features/modalsStyledComponents";

const ChangeWalletModal = () => {

    const {bitcoinwallets, ethereumwallets, tronwallets, updateWalletsFirebase} = UserAuth();

    let activeBTCID;
    let activeETHID;
    let activeTRNID;

    bitcoinwallets && bitcoinwallets.forEach(item => {
        if(item.isActive) {
            activeBTCID = item.id
        }
    });
    ethereumwallets && ethereumwallets.forEach(item => {
        if(item.isActive) {
            activeETHID = item.id
        }
    });
    tronwallets && tronwallets.forEach(item => {
        if(item.isActive) {
            activeTRNID = item.id
        }
    });

    const handleChangeWallet = (id) => {
        let disAble;
        if(currentwallet === "bitcoin") disAble = activeBTCID;
        if(currentwallet === "ethereum") disAble = activeETHID;
        if(currentwallet === "tron") disAble = activeTRNID;

        updateWalletsFirebase(currentwallet, id, disAble)
    }


    const [currentwallet, setcurrentwallet] = useState('bitcoin');
    const [isbitcoin, setisbitcoin] = useState(true);
    const [isethereum, setisethereum] = useState(false);
    const [istron, setistron] = useState(false);

    const dispatch = useDispatch()

    const {isOpen} = useSelector(state => state.changeWallet);

    const exitPortal = () => {
        dispatch(closeChangeWalletModal())
    }

    const handleMenuShift = (loc) => {
        switch (loc) {
            case "btc":
                setisbitcoin(true);
                setisethereum(false);
                setistron(false);
                setcurrentwallet("bitcoin");
                break;
            case "eth":
                setisbitcoin(false);
                setisethereum(true);
                setistron(false);
                setcurrentwallet("ethereum");
                break;
            case "trn":
                setisbitcoin(false);
                setisethereum(false);
                setistron(true);
                setcurrentwallet("tron");
                break;
        
            default:
                break;
        }
    }

    const inActiveBitcoinWallets = bitcoinwallets.filter(item=>!item?.isActive);
    const inActiveEthereumWallets = ethereumwallets.filter(item=>!item?.isActive);
    const inActiveTronWallets = tronwallets.filter(item=>!item?.isActive);


    const WalletLister = ({wallets}) => {
        if(wallets.lenght === 0) {
            return(
                <NoDataBox>There are no inactive wallets on the currently selected wallet type</NoDataBox>
            )
        }
        return(
            <ListerContainer>
                {
                    wallets && wallets.map(item=> (
                        <WalletItem key={item.id}>
                            <NamesBox>
                                <WalletName>{item.name}</WalletName>
                                <WalletLabel>Name</WalletLabel>
                            </NamesBox>
                            <AddressBox>
                                <WalletAddress>{item.address}</WalletAddress>
                                <WalletLabel>Address</WalletLabel>
                            </AddressBox>
                            <ButtonsBox>
                                <WalletBtn onClick={() => handleChangeWallet(item.id)}>Use wallet</WalletBtn>
                                {/* <WalletBtn><ImBin2 size={18} /></WalletBtn> */}
                            </ButtonsBox>
                        </WalletItem>
                    ))
                }
            </ListerContainer>
        )
    }

    return ReactDOM.createPortal(
        <PortalContainer show={isOpen ? "block":"none"}>
            <ExitPortal>
                <BtnExit onClick={exitPortal}><FiX size={35} /></BtnExit>
            </ExitPortal>
            <WalletsMenu>
                <MenuItem onClick={() => handleMenuShift("btc")} isActive={isbitcoin}>Bitcoin</MenuItem>
                <MenuItem onClick={() => handleMenuShift("eth")} isActive={isethereum}>Ethereum</MenuItem>
                <MenuItem onClick={() => handleMenuShift("trn")} isActive={istron}>Tron</MenuItem>
            </WalletsMenu>
            <AcceptWalletBox>
                <AcceptTitle>Change the active wallet for <TitleInner>{currentwallet}</TitleInner></AcceptTitle>
                {
                    currentwallet === "bitcoin" ? <WalletLister wallets={inActiveBitcoinWallets} />:
                    currentwallet === "ethereum" ? <WalletLister wallets={inActiveEthereumWallets} />:
                    currentwallet === "tron" ? <WalletLister wallets={inActiveTronWallets} />: <div>No data to show</div>
                }
            </AcceptWalletBox>
        </PortalContainer>,
        document.getElementById('change-wallet')
    )
}



export const NamesBox = styled.div`

`;
export const WalletName = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    color: ${colors.accent};
`;
export const WalletLabel = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: 13px;
`;
export const AddressBox = styled.div`

`;
export const WalletAddress = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    color: ${colors.accent};
`;
export const ButtonsBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
export const WalletBtn = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #6C5DD3;
    text-decoration: underline;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
        color: ${colors.accent};
    }

`;

export const NoDataBox = styled.div`

`;
export const WalletItem = styled.div`
    /* background-color: ${colors.accentShadow}; */
    background-color: #f5f5f5;
    padding: 6px 12px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 800px;
    border-radius: 6px;
`;
export const ListerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export default ChangeWalletModal;
