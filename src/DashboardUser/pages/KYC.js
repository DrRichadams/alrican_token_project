import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase/config';
import { UserAuth } from '../../contexts/AuthContext';
import { colors } from '../../constants/colors';
import { getExtention } from '../../constants/functions';
import ClipLoader from "react-spinners/ClipLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import PuffLoader from "react-spinners/PuffLoader";


const override = {
    display: "block",
    // margin: "0 auto",
    margin: 0,
    borderColor: colors.accent,
  };

const KYC = () => {
    const [kyc_img, setKyc_img] = useState(null);
    const [tempimg, settempimg] = useState(null);
    const [imgType, setimgType] = useState('');
    const [hasImg, sethasImg] = useState(null);
    const [isLoading, setisLoading] = useState(false);

    const navigate = useNavigate();
    const { userdata, addKYCFirebase } = UserAuth();

    const handleChange = (e) => {
        setKyc_img(e.target.files[0]);
        settempimg(URL.createObjectURL(e.target.files[0]));  
        sethasImg(true);
        setimgType(getExtention(e.target.files[0].name))
    }

    const handleChangePic = () => {
        sethasImg(false);
        settempimg(false);
        setKyc_img(null);
    }
    
    const handleUploadPic = () => {
        setisLoading(true)
        uploadKYC()
    }

    useEffect(() => {
        console.log(kyc_img)
    }, [kyc_img])

    const uploadKYC = () => {
        if(!kyc_img) return
        const imageRef = ref(storage, `kyc/${userdata.id}.${imgType}`);
        uploadBytes(imageRef, kyc_img).then((data) => {
            console.log("retuned data", data)
            const imgRef = ref(storage, `kyc/${data.metadata.name}`);
            getDownloadURL(imgRef)
            .then((url) => {
                addKYCFirebase(userdata.id, url)
                setisLoading(false)
                // console.log("My possible url ", url)
            })
        //   addImgUrlFirebase(userdata.id, "proofs", data.metadata.name);
        //   hasProvidedProofFirebase(userdata.id);
          navigate("/rerouter");
        })
    }

  return (
    <KYC_box>
        <ImageBox>
            { !tempimg && <Image src="https://firebasestorage.googleapis.com/v0/b/acm-crypto.appspot.com/o/essentials%2Fkyc_demo.png?alt=media&token=db855ef6-9732-4513-ae0d-abb51ac18568" alt="" /> }
            {tempimg && <Image src={tempimg} alt="" />}
        </ImageBox>
        <Instruction>Provide a picture of your ID, Passport or Driver's license. <br /> Hold it close to your face as illustrated in the diagram</Instruction>
        { !hasImg && <FileInput type="file" onChange={(e) => handleChange(e)} /> }
        { hasImg && <ChoosAnother onClick={handleChangePic}>Chose the wrong picture?</ChoosAnother>}
        { hasImg && !isLoading && <UploadBtn onClick={handleUploadPic} disabled={isLoading}>Upload picture</UploadBtn>}
        {isLoading && <PuffLoader color={colors.accent} loading={isLoading} cssOverride={override} size={10} /> }
    </KYC_box>
  )
}

export const ImageBox = styled.div`
    max-width: 300px;
`;

export const ChoosAnother = styled.button`
    border: none;
    padding: 12px;
    /* background-color: ${colors.accentShadow}; */
    background-color: transparent;
    color: blue;
    text-decoration: underline;
    /* width: 150px; */
    /* border-radius: 6px; */
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
        /* background-color: ${colors.accent}; */
        color: ${colors.accent};
    }
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
    /* display: flex;
    justify-content: center;
    align-items: center; */
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
