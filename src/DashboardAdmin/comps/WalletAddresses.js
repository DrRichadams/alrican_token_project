import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from "react-icons/ai"
import { colors } from '../../constants/colors';

const WalletAddresses = () => {
    const [ wallets, setwallets ] = useState([
        { id: 1, name: "Bitcoin", address: "sdfjlnsdkfljasdflkjlkjasd", isInUse: true },
        { id: 2, name: "Etherium", address: "sdfjlnsdkfljasdflkjlkjasd", isInUse: false },
        { id: 3, name: "Dogcoin", address: "sdfjlnsdkfljasdflkjlkjasd", isInUse: false },
    ])
  return (
    <WalletAddressesContainer>
        <WalletsTitle>Your wallets</WalletsTitle>
        <AddWalletBox>
            <AddWalletDetails>
                <AddTitle>Add new wallet</AddTitle>
                <AddInput placeholder='Wallet name' />
                <AddInput placeholder='Wallet address' />
            </AddWalletDetails>
            <AddWalletBtn><AiOutlinePlus size={30}/></AddWalletBtn>
        </AddWalletBox>
        <Wallets>
            {
                wallets && wallets.map(item=>(
                    <Wallet>
                        <WalletNameBox>
                            <WalletName>{item.name}</WalletName>
                            <WalletDescrip>Name</WalletDescrip>
                        </WalletNameBox>
                        <WalletAddressBox>
                            <WalletAddress>IANIINVIEDJSKVOSDNVISDN</WalletAddress>
                            <WalletDescrip>Address</WalletDescrip>
                        </WalletAddressBox>
                        <WalletBtnsBox>
                            <WalletBtn>Delete</WalletBtn>
                            <WalletBtn>Use</WalletBtn>
                        </WalletBtnsBox>
                    </Wallet>
                ))
            }
        </Wallets>
    </WalletAddressesContainer>
  )
}


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
    display: flex;
    justify-content: space-between;
    align-items: center;
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
