import React, {useState} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { FiX } from "react-icons/fi"
import { colors } from "../constants/colors";
import { UserAuth } from "../contexts/AuthContext";

import { useSelector, useDispatch } from "react-redux";
import { closeAddWalletModal } from "../store/actions/modalAction";

import { 
    PortalContainer,
    ExitPortal,
    BtnExit,
    WalletsMenu,
    MenuItem,
    AcceptWalletBox,
    AcceptTitle,
    TitleInner,
    WalletInput,
    CreateWalletBtn,
 } from "./features/modalsStyledComponents";

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

export default AddWalletModal;
