import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { UserAuth } from '../../contexts/AuthContext';
import { useDispatch } from "react-redux";
import { openAddWalletModal, openChangeWalletModal } from '../../store/actions/modalAction';
import { AiOutlinePlus } from "react-icons/ai"
import { colors } from '../../constants/colors';


const Awallet = ({aname, awallet}) => {
    const dispatch = useDispatch();
    const handleOpenChangeWalletModal = () => {
        dispatch(openChangeWalletModal())
    }

    return(
        <Wallet>
            <WalletNameBox>
                <WalletName>{aname}</WalletName>
                <WalletDescrip>Name</WalletDescrip>
            </WalletNameBox>
            <WalletAddressBox>
                <WalletAddress>{awallet}</WalletAddress>
                <WalletDescrip>Address</WalletDescrip>
            </WalletAddressBox>
            <WalletBtnsBox>
                {/* <WalletBtn>Delete</WalletBtn> */}
                {awallet && <WalletBtn onClick={() => handleOpenChangeWalletModal()}>Change</WalletBtn>}
            </WalletBtnsBox>
        </Wallet>
    )
}

const WalletAddresses = () => {
    const [ wallets, setwallets ] = useState([
        // { id: 1, name: "Bitcoin", address: "sdfjlnsdkfljasdflkjlkjasd", isInUse: true },
        // { id: 2, name: "Etherium", address: "sdfjlnsdkfljasdflkjlkjasd", isInUse: false },
        // { id: 3, name: "Tron", address: "sdfjlnsdkfljasdflkjlkjasd", isInUse: false },
    ])

    const dispatch = useDispatch();

    const {bitcoinwallets, ethereumwallets, tronwallets} = UserAuth();

    const myBitcoin = bitcoinwallets.find(item=>item.isActive === true)
    const myEthereun = ethereumwallets.find(item=>item.isActive === true)
    const myTron = tronwallets.find(item=>item.isActive === true)

    console.log("My wallets", wallets)

    useEffect(() => {
        setwallets([myBitcoin, myEthereun, myTron])
    }, [bitcoinwallets, ethereumwallets, tronwallets])
    useEffect(() => {
        setwallets([myBitcoin, myEthereun, myTron])
    }, [])

  return (
    <WalletAddressesContainer>
        <AddingBox>
            <WalletsTitle>Your active wallets</WalletsTitle>
            <AddBtn onClick={() => dispatch(openAddWalletModal())}><AiOutlinePlus size={30} /></AddBtn>
        </AddingBox>
    
        <Wallets>
            <Awallet aname={myBitcoin && myBitcoin.name} awallet={myBitcoin && myBitcoin.address} />
            <Awallet aname={myEthereun && myEthereun.name} awallet={myEthereun && myEthereun.address} />
            <Awallet aname={myTron && myTron.name} awallet={myTron && myTron.address} />
        </Wallets>
    </WalletAddressesContainer>
  )
}



export const AddingBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;

export const AddBtn = styled.button`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover{
        background-color: #fff;
        color: #01050f;
    }
`;


export const WalletBtn = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    text-transform: uppercase;
    color: ${colors.accent};
    font-family: Roboto, sans-serif;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
        color: orangered;
        transform: scale(.98);
        /* font-size: 12px; */
    }
`;
export const WalletBtnsBox = styled.div`
    display: flex;
    gap: 20px;
    padding-right: 20px;
    /* background-color: red; */
    justify-content: flex-end;
`;
export const WalletAddress = styled.p`
    margin: 0;
    color: #6C5DD3;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
`;
export const WalletAddressBox = styled.div`

`;
export const WalletNameBox = styled.div`

`;

export const WalletName = styled.p`
    margin: 0;
    color: #6C5DD3;
    font-family: Roboto, sans-serif;
    font-weight: 400;
`;

export const WalletDescrip = styled.p`
    margin: 0;
    color: ${colors.accentShadow};
    font-family: Roboto, sans-serif;
    font-size: 13px;
    font-weight: 700;
`;


export const AddWalletBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    background-color: #333;
    padding: 12px;
    border-radius: 6px;
`;

export const AddWalletDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const AddTitle = styled.h3`
    color: #fff;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
`;

export const AddInput = styled.input`
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 4px;
    width: 250px;
`;

export const AddWalletBtn = styled.button`
    background-color: ${colors.accent};
    color: #fff;
    border: none;
    padding: 4px 20px;
    width: 120px;
    border-radius: 4px;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
        background-color: #fff;
        color: ${colors.accent};
        box-shadow: 3px 3px 24px #333;
    }
`;


export const Wallet = styled.div`
    background-color: #242731;
    padding: 12px;
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-radius: 6px;
`;
export const Wallets = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    /* overflow-y: scroll; */
    width: 100%;
    height: 100%;
    /* background-color: red; */
`;
export const WalletAddressesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* background-color: blue; */
`;

export const WalletsTitle = styled.p`
    color: #fff;
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    font-weight: 600;
`;

export default WalletAddresses
