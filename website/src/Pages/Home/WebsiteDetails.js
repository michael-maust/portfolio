import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`

  h1 {
    padding: 0px;
    margin: 0px;
    line-height: inherit;
  }

  .banner {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.darkGray};
    padding: 30px 0px 30px 0px;
    box-shadow: ${(props) => props.theme.shadow.box};
  }

  .container {
    display: flex;
    height: auto;
    padding: 30px 20px 30px 20px;
    margin: 0 auto;
  }

  .aboutTitle {
    color: ${(props) => props.theme.colors.orange};
    font-size: clamp(1.9rem, -0.875rem + 8.333vw, 2.8rem);
    font-weight: 700;
    display: inline-block;
    width: min-content;
    text-align: right;
    line-height: 1;
    position: relative;
  }

  hr {
    width: 10px;
    height: auto;
    background-color: ${(props) => props.theme.colors.charcoal};
    border: none;
    border-radius: 20px;
    margin: 0px 20px 0px 20px;
  }

  .websiteDetails {
    width: 90vw;
    max-width: 600px;
    position: relative;
    text-align: left;
    font-size: ${(props) => props.theme.fontSizes.para};
    color: ${(props) => props.theme.colors.tan};
    margin: 0px;
  }

  .githubLink {
    color: ${(props) => props.theme.colors.tan};
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.orange};
  }

  @media only screen and (max-width: 900px) {
    .aboutTitle {
      width: 100%;
      text-align: left;
      margin-bottom: -5px;
    }

    .container {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
      width: 80%;
    }

    hr {
      width: clamp(150px, 40vw, 300px);
      height: 10px;
      margin: 0px;
      margin-bottom: -5px;
    }
  }
`;

const WebsiteDetails = () => {
  return (
    <div>
      <Wrapper>
        <div className="banner">
          <div className="container">
            <h1 className="aboutTitle">ABOUT THE SITE</h1>

            <hr />
            <p className="websiteDetails">
              This portfolio is the culmination of my programming and web design
              skills. Before coding, I designed the prototype in Adobe XD. I
              used JavaScript, React, vanilla CSS, and as few dependencies as
              possible. The site is hosted on Google Firebase. For a deep dive
              behind the scenes, check out my{" "}
              <a
                href="https://github.com/michael-maust/portfolio"
                target="blank"
                rel="noopener noreferrer"
                className="githubLink"
              >
                GitHub Repository.
              </a>
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default WebsiteDetails;
