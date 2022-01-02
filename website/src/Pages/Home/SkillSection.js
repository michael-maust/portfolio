import React, {useState} from "react";
import styled from "styled-components";

import skillsArray from "./SkillsArray";
import InfoIcon from "../../media/InfoIcon.svg";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0px 300px 0px;

  height: auto;

  .background {
    z-index: 300;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.colors.darkGray};
    border-radius: 25px;
    height: auto;
    width: clamp(240px, 90vw, 700px);
    overflow: hidden;
    box-shadow: ${(props) => props.theme.shadow.box};
  }

  .title {
    position: relative;
    color: ${(props) => props.theme.colors.tan};
    font-weight: bold;
    font-size: calc(1.6rem + 0.8vw);
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 0px;
  }

  .skillsContainer {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1% 1% 40px 1%;
    gap: 20px;
  }

  .skillItem {
    position: relative;
    background-color: ${(props) => props.theme.colors.charcoal};
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;

    width: clamp(180px, 70vw, 280px);
    height: 80px;

    padding: 10px;
    cursor: pointer;
    box-shadow: ${(props) => props.theme.shadow.box};
    transition: ease-in-out 0.5s;

    &:hover {
      transform: scale(1.05);
    }

    .InfoIcon {
      position: relative;
      z-index: 500px;
      padding: 0px;
      margin: 5px 5px auto auto;
    }
  }

  .skillIcon {
    position: relative;
    height: 60%;
    max-height: 60px;
    width: auto;
    margin: auto 3%;
  }

  .skillDetails {
    position: relative;
    padding-left: 10px;
  }

  .skillName {
    margin-left: 0px;
    margin-right: 0px;
    padding: 0px;
    color: ${(props) => props.theme.colors.orange};
    font-weight: bold;
    font-size: 1.1rem;
  }

  .skillExperience {
    position: relative;
    color: ${(props) => props.theme.colors.tan};
    font-weight: bold;
    top: -15px;
    padding: 2px;
    
  }

  
`;



const ModalStyle = styled.div`
  .experienceModal {
    z-index: 2000;
    visibility: ${(props) => (props.toggleModal.toggle ? "" : "hidden")};
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: clamp(240px, 90vw, 700px);
    
  }

  .modalBackground {
   
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.3);
    backdrop-filter: blur(10px);
   
  }

  .modalContainer {
    position: fixed;
    background: ${(props) => props.theme.colors.charcoal};
    box-shadow: ${(props) => props.theme.shadow.box};
    
    height: auto;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    border-radius: 25px;
    padding: 20px 20px 40px 20px;
    
    
  }

  .toggleOffButton {
    position: absolute;
    right: 30px;
    bottom: 30px;
    fill: ${(props) => props.theme.colors.darkGray};
    cursor: pointer;
    

    &:hover{
      transform: scale(1.1);
    }
  }

.rowFlex {
  
  display: flex;
  flex-direction: row;
  align-items: center;


}



  .modalSkillIcon {
    position: relative;
    height: clamp(40px, 40vw, 60px);
    width: auto;
    margin: 0px;
   
  }

  .modalSkillDetails {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    margin-left: 20px;
    
  }

  .modalSkillName {
    margin-left: 0px;
    margin-right: 0px;
    padding: 0px;
    color: ${(props) => props.theme.colors.orange};
    font-weight: bold;
    font-size: 1.4rem;
  }

  .modalSkillExperience {
    position: relative;
    color: ${(props) => props.theme.colors.tan};
    font-weight: bold;
    font-size: 1.4rem;
    margin: 0px;
    padding: 0px;
    top: -20px;
    
  }

  .modalSkillDescription {
    position: relative;
    color: ${(props) => props.theme.colors.tan};
    
    font-size: 1.4rem;
    
    
    top: -20px;

    
  }











`;

const SkillSection = () => {
  const [toggleModal, setToggleModal] = useState({
    toggle: false,
    index: 0,
  });

  const modalGenerator = (toggle, arrayIndex) => {
    setToggleModal({toggle: toggle, index: arrayIndex});
  };

  
  
  const renderSkills = skillsArray.map((skill) => (
    <div
      className="skillItem"
      key={skill.name}
      onClick={() => modalGenerator(true, skill.index)}
    >
      <img className="skillIcon" src={skill.icon} alt="" />

      <div className="skillDetails">
        <p className="skillName">{skill.name}</p>
        <div className="skillExperience">{skill.experience}</div>
      </div>
      <img className="InfoIcon" src={InfoIcon} alt="" />
    </div>
  ));

  return (
    <div>
      <Wrapper>
        <div className="background">
          <h1 className="title">EXPERIENCE</h1>
          <div className="skillsContainer">{renderSkills}</div>
        </div>
      

      <ModalStyle toggleModal={toggleModal}>
        <div className="experienceModal">
          <div className="modalBackground" onClick={() => modalGenerator(false, 0)}></div>
            <div className="modalContainer">


            <svg className="toggleOffButton"
                onClick={() => modalGenerator(false, 0)}xmlns="http://www.w3.org/2000/svg" width="30.008" height="30" viewBox="0 0 30.008 30"><path d="M29.845,26.289,40.562,15.571a2.511,2.511,0,0,0-3.552-3.552L26.293,22.737,15.575,12.019a2.511,2.511,0,1,0-3.552,3.552L22.741,26.289,12.024,37.006a2.511,2.511,0,0,0,3.552,3.552L26.293,29.84,37.011,40.558a2.511,2.511,0,0,0,3.552-3.552Z" transform="translate(-11.285 -11.289)"/></svg>



              

              <container className="rowFlex">
              
              <img
                className="modalSkillIcon"
                src={skillsArray[toggleModal.index].icon}
                alt=""
              />

              <div className="modalSkillDetails">
                <p className="modalSkillName">
                  {skillsArray[toggleModal.index].name}
                </p>
                <div className="modalSkillExperience">
                  {skillsArray[toggleModal.index].experience}
                </div>

                

                </div>
                </container>


                <p className="modalSkillDescription">
                  {skillsArray[toggleModal.index].description}
                </p>
              
            </div>
          
        </div>
      </ModalStyle>

      </Wrapper>
    </div>
  );
};

export default SkillSection;
