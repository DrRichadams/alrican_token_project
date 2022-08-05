import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { colors } from '../../constants/colors';
import {
    AiFillAppstore,
    AiFillCheckSquare,
    AiFillClockCircle,
    AiFillCopy,
    AiFillLayout,
    AiFillPieChart,
} from "react-icons/ai"

const MenuBtn = ({title, type, active, link, clickable}) => {
  const navigate = useNavigate();
  const handleNavigate = (navto) => {
    navigate(navto, {name: "Ma1"})
    clickable && clickable()
  };
  return (
    <BtnContainer>
      <ActBtn onClick={() => handleNavigate(link)} bgColor = {active ? "#6C5DD3":"transparent"} color={active ? "#fff":"rgba(108,93,211,0.5)"}>
        {type === "a" ? <AiFillAppstore size={25}/>
        : type === "b" ? <AiFillCheckSquare size={25}/>
        : type === "c" ? <AiFillClockCircle size={25}/>
        : type === "d" ? <AiFillCopy size={25}/>
        : type === "e" ? <AiFillLayout size={25}/>
        : type === "f" ? <AiFillPieChart size={25}/>
        : ""}
        {title}
      </ActBtn>
    </BtnContainer>
  )
}


export const ActBtn = styled.div`
   background-color: ${props=>props.bgColor};
   color: ${props=>props.color};
   font-family: Roboto, sans-serif;
   text-transform: uppercase;
   font-weight: 400;
   font-size: 14px;
   padding: 10px;
   margin: 0 20px;
   cursor: pointer;
   border-radius: 6px;
   display: flex;
   align-items: center;
   gap: 10px;
`;

export const BtnContainer = styled.div`
    /* background-color: grey; */
    margin-bottom: 12px;
    margin-top: 8px;
    /* padding: 15px 20px; */
`;

export default MenuBtn
