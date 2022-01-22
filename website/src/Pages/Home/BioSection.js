import React from "react";
import styled from "styled-components";

import portrait from "../../media/Portrait.svg";
import ResumeButton from "../../Components/ResumeButton";

const Wrapper = styled.div`
  .mainContainer {
    display: flex;

    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;

   

    width: 80vw;
    max-width: 2000px;
    /* background: red; */
  }

  .flexRow {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    width: auto;
  }

  .flexColumn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    width: clamp(200px, 47vw, 600px);
    top: 15px;
    gap: 40px;
    /* background: green; */
  }

  .portrait {
    width: clamp(230px, 50vw, 300px);
    padding: 0px;
  }

  p {
    position: relative;
    text-align: left;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.tan};
    padding: 0px;
    margin: 0px;
  }

  .bold {
    color: ${(props) => props.theme.colors.orange};
    font-weight: bold;
  }

  .underline {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.orange};
  }

  .highlight {
    display: inline;
    background: linear-gradient(
      180deg,
      transparent 40%,
      ${(props) => props.theme.colors.blue} 40%
    );
    padding: 0px 7px 0px 7px;
  }





  @media only screen and (max-width: 999px) {

    p {
      text-align: center;
    }

    .mainContainer {
      padding-top: 20px;
    }

    .flexColumn {
      /* background-color: green; */
      gap: 60px;
      width: 85vw;
      max-width: 450px;
    }

    /* @media only screen and (min-width: 500px) and (max-width: 974px) {
      .portrait {
        width: clamp(230px, 72vw, 300px);
      }

      .flexColumn:before {
        content: "";
        border-radius: 10px;
        position: absolute;
        top: -15px;
        bottom: -15px;
        left: -40px;
        border-left: 15px solid ${(props) => props.theme.colors.darkGray};
      }
    } */
  } ;
`;

const BioSection = () => {
  return (
    <div>
      <Wrapper>
        <container className="mainContainer">
          <container className="flexRow">
            <img className="portrait" src={portrait} alt="portrait" />

            <container className="flexColumn">
              <p className="aboutText">
                My name is <span className="bold"> Michael Maust.</span> I am an{" "}
                <span className="underline">entrepreneur</span>,{" "}
                <span className="underline">engineer</span>, and{" "}
                <span className="underline">frontend developer</span>.
              </p>

              <p className="missionText">
                My mission is to build and create innovative software and businesses{" "}
                <span className="highlight">
                  that bring value to people's lives.
                </span>
              </p>

        
            </container>
            
          </container>
        </container>
      </Wrapper>
    </div>
  );
};

export default BioSection;
