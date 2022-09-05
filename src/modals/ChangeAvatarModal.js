import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { FiX } from "react-icons/fi"
import { colors } from "../constants/colors";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase/config";
import { UserAuth } from "../contexts/AuthContext";

import { useSelector, useDispatch } from "react-redux";
import { closeAvatarModal } from "../store/actions/modalAction"; 


const getProofImg = async (id) => {
    const docRef = doc(db, "avatars", id);
    const docSnap = await getDoc(docRef);
  
    try {
        const data = docSnap.data();
        console.log(data)
        return data
    } catch (error) {console.log("My error", error)}
}

const ChangeAvatarModal = () => {
    const [imageName, setImageName] = useState(null)
    const [avId, setavId] = useState(null)
    const [currentImg, setCurrentImg] = useState('default.png')
    const {isOpen} = useSelector(state => state.changeAvatar);
    const dispatch = useDispatch()

    const {user, updateAvatarFirebase, my_avatars} = UserAuth();

      useEffect(() => {
        try{
         getProofImg(user.uid).then((data) => {
           console.log("My img profile", data)
           setImageName(data.url)
          })
        } catch(e) {console.log(e)}
    }, [user])

    // FEEDING INTO THE CURRENT IMAGE STATE FROM THE AUTH AVATARS ARRAY
    useEffect(() => setCurrentImg(imageName),[imageName])

    // HANDLING AVATAR CHANGE FUNCTIONS
    // const handleSelectAvatar = (name) => setCurrentImg(name)
    const handleSelectAvatar = (name, av) => {
        setImageName(name);
        setavId(av)
    }
    const handleChangeAvatar = () => {
        updateAvatarFirebase(user.uid, imageName, avId);
        dispatch(closeAvatarModal())
    }

    return ReactDOM.createPortal(
        <PortalContainer show={isOpen ? "flex":"none"}>
            <ChangeAvatarBox>
                <BtnClose onClick={() => dispatch(closeAvatarModal())}><FiX size={25} /></BtnClose>
                <AvatarPreviewBox>
                    {/* <PrevImage src={process.env.PUBLIC_URL+ `avatars/${currentImg}`}/> */}
                    <PrevImage src={imageName}/>
                </AvatarPreviewBox>
                <AvatarSelection>
                    {my_avatars.map(item=> (
                        <AvatarBox onClick={() => handleSelectAvatar(item.url, item.id)} key={item.id}>
                            <Image src={item.url}/>
                            <NameAvatar>{item.id}</NameAvatar>
                        </AvatarBox>
                    ))}
                </AvatarSelection>
                <ControlBtns>
                    <ChangeAvatarBtn onClick={handleChangeAvatar}>Save changes (You can come back to edit again)</ChangeAvatarBtn>
                </ControlBtns>
            </ChangeAvatarBox>
        </PortalContainer>,
        document.getElementById('change-avatar')
    )
}



// export const Imager = styled.div`
//     background-color: #f5f5f5;
//     width: 50px;
//     height: 50px;
//     border: 2px solid ${colors.accent};
//     border-radius: 50%;
//     overflow: hidden;
// `;

export const ImageWarning = styled.div`
  background: linear-gradient(45deg, #8E2DE2, #4A00E0);
`;

export const ChangeAvatarBtn = styled.button`
    border: none;
    outline: none;
    padding: 12px;
    border-radius: 6px;
    color: ${colors.accent};
    background-color: ${colors.accentShadow};
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    cursor: pointer;
    transition: all .25s cubic-bezier(1, 0.38, 0, 0.84);
    :hover {
        background-color: ${colors.accent};
        color: #fff;
    }
`;
export const ControlBtns = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`;
export const AvatarSelection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 15px;
`;

export const AvatarBox = styled.button`
    background-color: ${colors.accentShadow};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    border-radius: 6px;
    gap: 8px;
    border: 1px solid transparent;
    outline: none;
    cursor: pointer;
    transition: all .25s ease-in-out;
    box-shadow: 1px 1px 8px rgba(0,0,0,0.2);
    @media (max-width: 390px) {
        padding: 8px;
        gap: 4px;
    }
    :hover {
        transform: scale(1.1);
        border-color: ${colors.accent};
    }
`;

export const NameAvatar = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    color: ${colors.accent};
`;

export const PrevImage = styled.img`
    width: 100%;
`;
export const Image = styled.img`
    width: 40px;
`;

export const AvatarPreviewBox = styled.div`
    width: 170px;
    height: 170px;
    background-color: ${colors.accentShadow};
    border-radius: 50%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BtnClose = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    outline: none;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    border-radius: 6px;
    background-color: ${colors.accentShadow};
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
        background-color: ${colors.accent};
        color: #fff;
    }
`;
export const ChangeAvatarBox = styled.div`
    width: 60vw;
    height: 90vh;
    background-color: #fff;
    border-radius: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 6px;
    @media (max-width: 1190px) {
        width: 70vw;
    }
    @media (max-width: 1030px) {
        width: 80vw;
    }
    @media (max-width: 880px) {
        width: 95vw;
    }
`;

export const PortalContainer = styled.div`
    background-color: black;
    /* position: absolute; */
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: rgba(31,33,40,0.9);
    justify-content: center;
    align-items: center;
    display: ${props=>props.show};
`;

export default ChangeAvatarModal;
