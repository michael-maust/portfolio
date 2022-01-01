import React from "react";
import styled from "styled-components";

import image from "./portrait.svg";

const Wrapper = styled.div`




padding: 50px 0px 100px 0px;





.centered, .bioContainer, .portraitContainer {

    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  
}


  
.bio {
    position: relative;
    margin-top: 60px;
    height: auto;
    width: min(80%, 600px );
    font-size: ${(props) => props.theme.fontSizes.medium};
    color: ${(props) => props.theme.colors.tan};
  }

  .highlight {
    color: ${(props) => props.theme.colors.orange};
    font-weight: bold;
    
  }




 .bio::before {
    content: "";
    left: -40px;
    position: absolute;
    float: left;
    background-color: ${(props) => props.theme.colors.tan};
    width: 15px;
    height: 100%;
    border-radius: 15px;
    transition: background-color 2s ease-in 2s ease-out;
  }







 

  /* .learnMore {
    color: ${(props) => props.theme.colors.orange};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: bold;
    margin: 36px 0px 40px 36px;
  } */

  


  .container {
    margin-bottom: 1000px;
  }


  .welcome {
    color: ${(props) => props.theme.colors.tan};
    font-weight: 400px;
    font-size: 2.8rem;
    margin: 0px;
    padding: 0px;

  }

    .portrait {
      width: min(70%, 400px );
      padding: 0px;
      margin: 0px;
    };
  



  
`;

const BioSection = () => {
  return (
    <div>
      <Wrapper>
        <section className="centered">

          <div className="portraitContainer">
            <h1 className="welcome"> WELCOME!</h1>
            <img className="portrait" src={image} alt="portrait" />
          </div>



          <div className="bioContainer">
            <p className="bio">
              Hello! My name is
              <span className="highlight"> Michael Maust.</span> I am
              an entrepreneur, engineer, and software developer. I believe in
              creating software and businesses that bring value to peoples'
              lives. I am very ambitious and driven to constantly improve and
              learn more each and every day.
            </p>

            {/* <a className="learnMore" href="/About">
              Learn More
            </a> */}
          </div>


        </section>
      </Wrapper>
    </div>
  );
};

export default BioSection;
