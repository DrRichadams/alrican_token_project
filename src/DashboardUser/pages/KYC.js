import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const KYC = () => {
    const [kyc_img, setKyc_img] = useState(null);
    const [tempimg, settempimg] = useState(null);
    const handleChange = (e) => {
        setKyc_img(e.target.files[0]);
        settempimg(URL.createObjectURL(e.target.files[0]))
    }

    useEffect(() => {
        console.log(kyc_img)
    }, [kyc_img])

  return (
    <KYC_box>
        <ImageBox>
            { !tempimg && <Image src="https://firebasestorage.googleapis.com/v0/b/acm-crypto.appspot.com/o/essentials%2Fkyc_demo.png?alt=media&token=db855ef6-9732-4513-ae0d-abb51ac18568" alt="" /> }
            {tempimg && <Image src={tempimg} alt="" />}
        </ImageBox>
        <Instruction>Provide a picture of your ID, Passport or Driver's license. <br /> Hold it close to your face as illustrated in the diagram</Instruction>
        { kyc_img && <FileInput type="file" onChange={(e) => handleChange(e)} /> }
        <UploadBtn>Upload picture</UploadBtn>
    </KYC_box>
  )
}

export const ImageBox = styled.div`
    max-width: 300px;
`;

export const UploadBtn = styled.button`
    border: none;
    padding: 12px;
    background-color: ${colors.accentShadow};
    color: grey;
    width: 150px;
    border-radius: 6px;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
        background-color: ${colors.accent};
        color: #fff;
    }
`;
export const FileInput = styled.input`
    border: none;
    /* background-color: red; */
    color: ${colors.accent};
`;
export const Instruction = styled.p`
    /* background-color: red; */
    margin: 0;
    /* padding: 16px; */
    text-align: center;
    color: ${colors.accent};
`;
export const Image = styled.img`
    width: 100%;
    border-radius: 8px;
`;
export const KYC_box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    gap: 20px;
`;

export default KYC
