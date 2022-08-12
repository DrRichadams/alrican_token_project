import React, {useState} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { FiX } from "react-icons/fi"
import { colors } from "../constants/colors";
import { UserAuth } from "../contexts/AuthContext";

import { useSelector, useDispatch } from "react-redux";
import { closeAddWalletModal } from "../store/actions/modalAction";

const AddWalletModal = () => {
    const {addWalletFirebase} = UserAuth();

    const [isbitcoin, setisbitcoin] = useState(true);
    const [isethereum, setisethereum] = useState(false);
    const [istron, setistron] = useState(false);

    const [walletname, setwalletname] = useState('');
    const [walletaddress, setwalletaddress] = useState('');

    const [currentwallet, setcurrentwallet] = useState('bitcoin');

    const dispatch = useDispatch()

    const {isOpen} = useSelector(state => state.addWallet)

    const clearFields = () => {
        setwalletname('');
        setwalletaddress('');
    }

    const exitPortal = () => {
        clearFields();
        dispatch(closeAddWalletModal())
    }

    const handleMenuShift = (loc) => {
        switch (loc) {
            case "btc":
                clearFields();
                setisbitcoin(true);
                setisethereum(false);
                setistron(false);
                setcurrentwallet("bitcoin");
                break;
            case "eth":
                clearFields();
                setisbitcoin(false);
                setisethereum(true);
                setistron(false);
                setcurrentwallet("ethereum");
                break;
            case "trn":
                clearFields();
                setisbitcoin(false);
                setisethereum(false);
                setistron(true);
                setcurrentwallet("tron");
                break;
        
            default:
                break;
        }
    }

    const handleWalletNameChange = (e) => {
        setwalletname(e.target.value)
    }
    const handleWalletAddressChange = (e) => {
        setwalletaddress(e.target.value)
    }

    const handleAddNewWallet = () => {
        if(walletname.length === 0) {
            alert("A wallet name is needed to continue");
            return
        }
        if(walletaddress.length === 0) {
            alert("A wallet address is needed to continue");
            return
        }
        addWalletFirebase(currentwallet, walletname, walletaddress).then(() => {
            clearFields();
            alert("Wallet added successfully")
        })
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
                <AcceptTitle>Create a new <TitleInner>{currentwallet}</TitleInner> wallet</AcceptTitle>
                <WalletInput type="text" placeholder="Wallet name" value={walletname} onChange={(e) =>handleWalletNameChange(e)} />
                <WalletInput type="text" placeholder="Wallet address" value={walletaddress} onChange={(e) => handleWalletAddressChange(e)} />
                <CreateWalletBtn onClick={handleAddNewWallet}>Add new wallet</CreateWalletBtn>
            </AcceptWalletBox>
        </PortalContainer>,
        document.getElementById('add-wallet')
    )
}



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

export default AddWalletModal;
