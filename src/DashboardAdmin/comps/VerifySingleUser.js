import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from "react-router-dom";
import { colors } from '../../constants/colors';
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { storage, db } from '../../firebase/config';
import { UserAuth } from '../../contexts/AuthContext';
import { usd_to_trustcoin } from '../../DashboardUser/features/formulars';



const getProofImg = async (id) => {
    const docRef = doc(db, "proofs", id);
    const docSnap = await getDoc(docRef); 
  
    try {
        const data = docSnap.data();
        console.log(data)
        return data
    } catch (error) {console.log("My error", error)}
  }


  const ImageRender = ({imgName}) => {
    const [my_img, setMy_img] = useState(null)
    const imgRef = ref(storage, `proofs/${imgName}`);
    getDownloadURL(imgRef)
    .then((url) => {
      setMy_img(url)
    //   console.log("Possible url ", url)
    })
    if(my_img !== null) return<Image src={my_img} alt="" />
    if(my_img === null) return <ImageWarning>The image is either too big or it is still loading</ImageWarning>
  }



const VerifySingleUser = () => {
    const [imageName, setImageName] = useState(null)
    const [customeTokens, setCustomeTokens] = useState('')
    const location = useLocation();
    const {userVerificationFirebase, signupfee, coinrate, user} = UserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        try{
         getProofImg(location.state.id).then((data) => {
           console.log("My img URL", data)
           setImageName(data.img_name)
          })
        } catch(e) {console.log(e)}
       }, [location.state.id])



    const handleVerify = () => {
        let coins = usd_to_trustcoin(customeTokens, coinrate);
        userVerificationFirebase(location.state.id, coins)
        navigate("/admin_dash/verify_users/potentially_paid")
    }

    const handleCustomeChange = (e) => {
      if(!isNaN(e.target.value)) {
          setCustomeTokens(e.target.value)
      }
    }

    let coins = usd_to_trustcoin(signupfee, coinrate);
    useEffect(() => {
        setCustomeTokens(coins)
    }, [user])

  return (
    <VerifySingleContainer>
        <ImageBox>
          {imageName && <ImageRender imgName={imageName} />}
          {!imageName && <Waiting>Loading.....please wait</Waiting>}
        </ImageBox>
        <DetailsBox>
        <LabelsContainer>
            <Label>{location.state.name}</Label>
            <Label>{location.state.email}</Label>
            <Label>{location.state.cell}</Label>
            <Label>{location.state.address}</Label>
        </LabelsContainer>
        <IdBox>
            <Id>{location.state.refererId}</Id>
            <ItemLabel>referer ID</ItemLabel>
        </IdBox>
        <IdBox>
            <Id>{location.state.id}</Id>
            <ItemLabel>client ID</ItemLabel>
        </IdBox>
        <div>
            <CustomeMoneyBox>
              <MoneyLabel>USD$ </MoneyLabel>
              <CustomeInput 
                  type="text" 
                  placeholder='Custome amount' 
                  value={customeTokens}
                  onChange={(e) => handleCustomeChange(e)}
              />
            </CustomeMoneyBox>
            <VerifyBtn onClick={() => handleVerify()}>Verify Client</VerifyBtn>
        </div>
        </DetailsBox>
    </VerifySingleContainer>
  )
}



export const CustomeInput = styled.input`
  border: none;
  outline: none;
  padding: 12px 12px 12px 6px;
  font-family: Roboto, sans-serif;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const CustomeMoneyBox = styled.div`
  display: flex;
  background-color: #fff;
  margin-bottom: 15px;
  overflow: hidden;
  border-radius: 3px;
`;
export const MoneyLabel = styled.p`
  margin: 0;
  padding: 12px 0 12px 12px;
  font-family: Roboto, sans-serif;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageWarning = styled.div`
  color: #fff;
  font-family: Roboto, sans-serif;
  color: ${colors.accent};
`;
export const Waiting = styled.p`
  margin: 0;
  color: #fff;
`;

export const Image = styled.img`
    width: 100%;
`;

export const VerifySingleContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
export const VerifyBtn = styled.button`
    /* position: absolute;
    top: 20px;
    right: 20px; */
    background-color: ${colors.accent};
    color: #fff;
    text-transform: uppercase;
    border: none;
    width: 120px;
    padding: 8px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all .25s ease-in-out;
    font-family: Roboto, sans-serif;
    font-size: 12px;
    border-radius: 6px;
    :hover {
        background-color: ${colors.accentShadow};
        color: ${colors.accent};
    }
`;

export const ImageBox = styled.div``;

export const DetailsBox = styled.div`
    background-color: #242731;
    padding: 25px 12px;
    box-sizing: border-box;
    border-radius: 6px;
    position: relative;
`;
export const LabelsContainer = styled.div`
    padding: 12px;
    margin-bottom: 15px;
`;
export const Label = styled.p`
    font-family: Roboto, sans-serif;
    color: #fff;
    font-weight: 400;
    margin: 0;
    margin-bottom: 7px;
`;
export const IdBox = styled.div`
    background-color: #1F2128;
    border-radius: 6px;
    padding: 12px;
    box-sizing: border-box;
    margin-bottom: 12px;
`;
export const Id = styled.p`
    margin: 0;
    color: ${colors.accent};
    font-family: Roboto, sans-serif;
`;
export const ItemLabel = styled.p`
    margin: 0;
    color: #fff;
`;

export default VerifySingleUser
