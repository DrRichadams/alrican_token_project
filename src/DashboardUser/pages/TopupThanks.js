import React, {useState} from 'react';
import styled from 'styled-components';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase/config';
import { UserAuth } from '../../contexts/AuthContext';
import { colors } from '../../constants/colors';
import { getExtention } from '../../constants/functions';
import PuffLoader from "react-spinners/PuffLoader";

const override = {
    display: "block",
    // margin: "0 auto",
    margin: 0,
    borderColor: colors.accent,
};


const TopupThanks = () => {
    const [image, setImage] = useState(null);
    const [tempImage, setTempImage] = useState(null);
    const [imgType, setimgType] = useState('');
    const [submitable, setSubmitable] = useState(true)
    const [isLoading, setisLoading] = useState(false);

    const {userdata, addTopupProofFirebase} = UserAuth();

    const handleInputChange = (e) => {
        setTempImage(URL.createObjectURL(e.target.files[0]))
        setImage(e.target.files[0])
        setSubmitable(false)
        setimgType(getExtention(e.target.files[0].name))
    }
    const handleSubmit = () => {
        setisLoading(true)
        //UNCOMMENT BELOW FUNCTION CALL WHEN YOU HAVE ALL THE NECESSARY ARGUMENTS
        // uploadTopupProof()
    }

    
    const uploadTopupProof = () => {
        if(!image) return
        let imgName= `${userdata.id}__${Math.random().toString()}.${imgType}`;
        // const imageRef = ref(storage, `topup_proofs/${userdata.id}__${Math.random().toString()}.${imgType}`);
        const imageRef = ref(storage, `topup_proofs/${imgName}`);
        uploadBytes(imageRef, image).then((data) => {
            // console.log("retuned data", data)
            // const imgRef = ref(storage, `topup_proofs/${data.metadata.name}`);
            const imgRef = ref(storage, `topup_proofs/${imgName}`);
            getDownloadURL(imgRef)
            .then((img_url) => {
                addTopupProofFirebase(userdata.id, img_url)
                // setisLoading(false)
                // console.log("My possible url ", img_url)
                setisLoading(false)
            })
        //   navigate("/rerouter");
        })
    }

  return (
    <div>
      <MainTitle>Thank you for buying our coin</MainTitle>
      <Warning>Kindly submit your proof of payment below (e.g a screenshot)</Warning>
      <ImgBox>
        {tempImage && <Image src={tempImage} alt="logo" /> }
      </ImgBox>
      <MyProof>
        <ProofHeader>
            <ProofTitle>
                <ProofLabel>My proof of payment</ProofLabel>
                <ProofItem>Select a proof screenshot from your system / gallery</ProofItem>
            </ProofTitle>
            { !isLoading && <SubmitBtn onClick={handleSubmit} disabled={submitable}>Submit</SubmitBtn> }
            {isLoading && <PuffLoader color={colors.accent} loading={isLoading} cssOverride={override} size={10} /> }
        </ProofHeader>
        <input type="file" onChange={(e) => handleInputChange(e)} />
      </MyProof>
    </div>
  )
}


export const Image = styled.img`
    width: 100%;
`;
export const ImgBox = styled.div`
    max-width: 300px;
`;
export const ProofItem = styled.p`
    margin: 0 0 12px 0;
    font-family: Roboto, sans-serif;
`;
export const ProofLabel = styled.h3`
    margin: 0;
    font-family: Roboto, sans-serif;
`;
export const Warning = styled.p`
    margin: 4px 0 20px 0;
    font-family: Roboto, sans-serif;
`;
export const MainTitle = styled.h3`
    margin: 0;
    font-family: Inter, sans-serif;
    text-transform: uppercase;
`;
export const SubmitBtn = styled.button`
    border: none;
    padding: 12px;
    border-radius: 6px;
    width: 100px;
    cursor: pointer;
    background-color: #fff;
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    transition: all .25s ease-in-out;
    :hover{
        background-color: ${colors.accent};
        color: #fff;
    }
`;
export const ProofTitle = styled.div`
    
`;
export const ProofHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const MyProof = styled.div`
    background-color: rgba(255, 100, 50, .1);
    padding: 12px;
    border-radius: 6px;
`;

export default TopupThanks
