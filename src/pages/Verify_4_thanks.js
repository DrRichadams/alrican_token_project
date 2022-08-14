import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { SectionContainer } from '../features/SectionContainer';
import MinMenuBar from '../features/MinMenuBar';
import { VerTitle, VerMessage1, MessageContainer } from '../features/VerifyStyledComponents';
import { WarningBox, WarningText } from '../features/VerifyStyledComponents';
import { RiErrorWarningLine } from "react-icons/ri";
import { colors } from '../constants/colors';
import styled from 'styled-components';
import { storage, db } from '../firebase/config';
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { UserAuth } from '../contexts/AuthContext';

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
    console.log("Possible url ", url)
  })
  return<Image src={my_img} alt="" />
}

const Verify_4_thanks = () => {
  const {user} = UserAuth();
  const navigate = useNavigate();

  const [imageName, setImageName] = useState(null)
  

  useEffect(() => {
   try{
    getProofImg(user?.uid).then((data) => {
      console.log("My img URL", data)
      setImageName(data.img_name)
     })
   } catch(e) {console.log(e)}
  }, [user])

  return (
    <SectionContainer>
      <MinMenuBar />
      <Margins>
        <MessageContainer>
            <VerTitle>Thank you for choosing to invest with us</VerTitle>
            <VerMessage1>Currently awaiting account and payment verification.</VerMessage1>
        </MessageContainer>
      </Margins>
      <WarningBox>
        <RiErrorWarningLine size={30} color={colors.accent} />
        <WarningText>This shouln't take more than 2 working days</WarningText>
      </WarningBox>
      <ProofBox>
        <ImageBox>
          {imageName && <ImageRender imgName={imageName} />}
          {!imageName && <Waiting>Loading.....please wait</Waiting>}
        </ImageBox>
        <RetrielBox>
          <TextBox>This is your submitted screenshot, if you made a mistake, click the button below to retry</TextBox>
          <RetryBtn onClick={() => navigate("/verify3")}>Retry</RetryBtn>
        </RetrielBox>
      </ProofBox>
    </SectionContainer>
  )
}


export const Waiting = styled.p`
  margin: 0;
`;
export const ImageBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const RetrielBox = styled.div`
    box-sizing: border-box;
    padding: 12px;
`;
export const TextBox = styled.p`
  font-family: Roboto, sans-serif;
  color: ${colors.accent};
  text-transform: uppercase;
  line-height: 25px;
`;
export const RetryBtn = styled.button`
    padding: 12px;
    width: 120px;
    background-color: ${colors.accent};
    color: #fff;
    border: none;
    border-radius: 6px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
      background-color: #01050f;
      color: ${colors.accent};
    }
`;

export const ProofBox = styled.div`
    background-color: #f5f5f5;
    border-radius: 6px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
`;
export const Image = styled.img`
    width: 100%;
`;
export const Margins = styled.div`
    margin: 20px 0;
`;

export default Verify_4_thanks
