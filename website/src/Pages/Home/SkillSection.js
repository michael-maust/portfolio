import React from "react";
import styled from "styled-components";

import SkillTemplate from "./SkillTemplate";
import skillsArray from "./SkillsArray";



const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0px 300px 0px;
  width: 80vw;
  height: auto;

  .background {
    position: relative;
    border: 5px solid ${(props) => props.theme.colors.tan};
    border-radius: 25px;
    height: 450px;
    width: min(50%, 600px);
    
    margin: 20px 20px 20px 20px;
  }
`;

const SkillSection = () => {


  console.log(skillsArray[0].icon)
  return (
    <div>
      <Wrapper>



       <div className="">{skillsArray[0].name}</div>




      <SkillTemplate />


    <img src= {require("./src/media/AdobeIcon.svg")} alt="" />
    


     



        <div className="background">Hello world</div>
      </Wrapper>
    </div>
  );
};

export default SkillSection;
