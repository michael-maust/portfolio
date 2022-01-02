import React, {useState} from "react";
import styled from "styled-components";

import skillsArray from "./SkillsArray";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0px 300px 0px;

  height: auto;

  .background {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.colors.darkGray};
    border-radius: 25px;
    height: 450px;
    width: clamp(240px, 70vw, 700px);
    overflow: hidden;
  }


.title {
  position: relative;
  color: ${(props) => props.theme.colors.tan};
  font-weight: bold;
  font-size: calc(2rem + 0.8vw);
  margin-top: 20px;
  margin-bottom: 0px;
  padding: 0px;
}



  .skillsContainer {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1% 1% 5% 1%;
  }

  .skillItem {
    position: relative;
    background-color: ${(props) => props.theme.colors.charcoal};
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    width: clamp(180px, 40vw, 250px);
    height: 80px;
    margin: 10px;
    padding: 10px;
  }

  .skillIcon {
    position: relative;
    height: 60%;
    width: auto;

    margin: auto 3%;
  }

  .skillDetails {
    position: relative;
    left: -30px;
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
  }
`;

const SkillSection = () => {
  const renderSkills = skillsArray.map((skill) => (
    <div className="skillItem" key={skill.name}>
      <img className="skillIcon" src={skill.icon} alt="" />

      <div className="skillDetails">
        <p className="skillName">{skill.name}</p>
        <div className="skillExperience">{skill.experience}</div>
      </div>
    </div>
  ));

  return (
    <div>
      <Wrapper>
        <div className="background">
          <h1 className="title">SKILLS</h1>
          <div className="skillsContainer">{renderSkills}</div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SkillSection;
