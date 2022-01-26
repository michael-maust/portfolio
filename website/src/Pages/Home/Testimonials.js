import React, {useState, useEffect, useRef, cloneElement} from "react";
import styled from "styled-components";
import testimonialArray from "./testimonialArray";
import touchIcon from "../../media/touchIcon.svg";

const Wrapper = styled.div`
  * {
    padding: 0;
    margin: 0;
  }

  h1 {
    padding: 0px;
    margin: 0px;
    line-height: inherit;
  }

  .banner {
    position: relative;
    display: flex;
    align-items: center;

    justify-content: center;
    position: relative;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.darkGray};
    padding: 10px 0px 10px 0px;
    box-shadow: ${(props) => props.theme.shadow.box};
    overflow: hidden;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: auto;
    padding: 30px 0px 30px 0px;
    margin: 0 auto;
  }

  .title {
    position: relative;
    color: ${(props) => props.theme.colors.tan};
    font-weight: bold;
    font-size: clamp(1.9rem, -0.875rem + 8.333vw, 2.8rem);

    padding: 0px;
  }

  hr {
    background-color: ${(props) => props.theme.colors.charcoal};
    border: none;
    border-radius: 20px;
    width: 200px;
    height: 7px;
    margin: 5px;
  }

  .description {
    width: 95%;
    max-width: 800px;
    position: relative;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.para2};
    color: ${(props) => props.theme.colors.tan};
    margin-top: 5px;
    margin-bottom: 20px;
  }

  .testimonialCard {
    margin-top: 20px;
    position: absolute;
    background-color: ${(props) => props.theme.colors.charcoal};
    border-radius: 25px;
    width: clamp(180px, 70vw, 600px);
    padding: 30px;
    height: auto;
    
    box-shadow: ${(props) => props.theme.shadow.box};
    transition: ease-in-out 0.5s;
    
  }

  .touchIcon {
      position: absolute;
      z-index: 500px;
      padding: 0px;
      margin: 5px 5px auto auto;
      width: 25px;
      top: 10px;
      right: 10px;
    }

  .testimonialPicture {
    width: auto;
    height: 15vw;
    max-height: 70px;

    border-radius: 50%;
  }

  .recommenderName {
    position: relative;
    color: ${(props) => props.theme.colors.orange};
    font-size: 1.4rem;
    font-weight: 600;

    width: 100%;
  }

  .position {
    color: ${(props) => props.theme.colors.tan};
    font-style: italic;
    font-size: 1rem;
    font-weight: 100;
  }

  .testimonialDetails {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 15px;

    padding-bottom: 10px;
  }

  .textContainer {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .recommendation {
    width: auto;
    position: relative;
    white-space: pre-line;

    margin-top: 10px;
    margin-bottom: 15px;

    text-overflow: clip;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fontSizes.para2};
    color: ${(props) => props.theme.colors.tan};
  }

  .seeMore {
    color: ${(props) => props.theme.colors.lightBlue};
    font-size: ${(props) => props.theme.fontSizes.para2};
    font-weight: 500;
    position: absolute;
    width: max-content;
    bottom: 15px;
    right: 20px;
    width: auto;
  }

  .cardContainer {
    position: relative;
    display: flex;
    flex-direction: row;

    justify-content: center;
    gap: 30px;
    height: 300px;
    width: 50px;
  
  
  }

  .overflowContainer {
    position: relative;
   
  }

  .paginator {
    position: relative;
    padding-top: 20px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .paginatorCircles {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.colors.lightBlue};
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    cursor: pointer;
    transition: ease-in-out 0.5s;

    &.active {
      background-color: ${(props) => props.theme.colors.blue};
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  .slideLeft,
  .slideRight {
    cursor: pointer;
  }

  .prevCard {
    left: 100%;
    opacity: 0;
    transition: ease-in-out .9s;
    
  }

  .activeCard {
    left: 50%;
    transform: translateX(-50%);
    transition: ease-in-out .9s;
    z-index: 100;
    cursor: pointer;
  }

  .nextCard {
    left: 100%;
    transform: translateX(-100%);
    transition: ease-in-out .9s;
    opacity: 0;
    
  }

  .showOnMobile {
    position: relative;
    display: none;
    padding-top: 30px;
  }

  @media only screen and (max-width: 450px) {
    .hideOnMobile {
      display: none;
    }

    .showOnMobile {
      display: unset;
    }
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
    background-color: rgba(0, 0, 0, 0.3);
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
    padding: 20px;
  }

  .toggleOffButton {
    position: absolute;
    right: 20px;
    bottom: 20px;
    fill: ${(props) => props.theme.colors.darkGray};
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }

  .rowFlex {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .recommendationModal {
    width: auto;
    max-height: 50vh;
    position: relative;
    white-space: pre-line;

    margin-top: 10px;
    margin-bottom: 15px;

    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fontSizes.para2};
    color: ${(props) => props.theme.colors.tan};
  }

  .recommendationContainer {
    overflow-y: auto;

    padding-right: 20px;
    margin-bottom: 50px;

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.colors.darkGray};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;

      background-color: ${(props) => props.theme.colors.charcoal};
      width: 2px;
      border: 2px solid ${(props) => props.theme.colors.darkGray};
    }
  }





`;

const Testimonials = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [index, setIndex] = useState(0);

  const modalGenerator = (toggle, arrayIndex) => {
    setToggleModal({toggle: toggle});
    setIndex(arrayIndex);
  };

  //Disables Body Scroll when Modal is Active
  if (toggleModal.toggle) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  const slideLeft = () => {
    console.log("slideLeft");
    console.log(index);
    if (index > 0) {
      setIndex(index - 1);
      console.log(index);
    } else {
      setIndex(testimonialArray.length - 1);
    }
  };

  const slideRight = () => {
    console.log("slideRight");
    console.log(index);
    if (index + 1 <= testimonialArray.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const generateCircles = testimonialArray.map((testimonial, currentIndex) => {
    let pageinatorStatus = currentIndex === index ? "active" : "inactive";

    return (
      <div
        className={`paginatorCircles ${pageinatorStatus}`}
        key={testimonial.index}
        onClick={() => setIndex(currentIndex)}
      ></div>
    );
  });

  const generateCards = testimonialArray.map((testimonial, currentIndex) => {
    let position =
      currentIndex > index
        ? "nextCard"
        : currentIndex === index
        ? "activeCard"
        : "prevCard";

    let activeModal = position === "activeCard" ? true : false;

    return (
      <div
        className={`testimonialCard ${position}`}
        key={testimonial.index}
        onClick={() => {
          modalGenerator(activeModal, currentIndex);
        }}
      >
        <div className="testimonialDetails">
          
          <img
            className="testimonialPicture"
            src={testimonial.picture}
            alt=""
          />
          <div className="textContainer">
            <p className="recommenderName">{testimonial.name}</p>
            <p className="position hideOnMobile">{testimonial.position}</p>
          </div>
          
        </div>
        
        <p className="position showOnMobile">{testimonial.position}</p>
        <p className="recommendation">{testimonial.recommendation}</p>
        <p className="seeMore">...see more</p>
        <img className="touchIcon" src={touchIcon} alt="" />
      </div>
      
    );
  });

  return (
    <div>
      <Wrapper>
        <div className="banner">
          <div className="container">
            <h1 className="title">TESTIMONIALS</h1>

            <hr />
            <p className="description">
              I've had the opportunity to meet and work with many incredible
              people throughout the years. Here's what they have to say about
              me:
            </p>

            <div className="overflowContainer">
              <div className="cardContainer">{generateCards}</div>
            </div>

            <div className="paginator">
              <svg
                className="slideLeft"
                xmlns="http://www.w3.org/2000/svg"
                width="18.025"
                height="31.808"
                viewBox="0 0 18.025 31.808"
                onClick={() => slideLeft()}
              >
                <path
                  id="Path_4593"
                  data-name="Path 4593"
                  d="M12146.431,5100.626l-13.783,13.783,13.783,13.783"
                  transform="translate(-12130.526 -5098.505)"
                  fill="none"
                  stroke="#929aa2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </svg>

              {generateCircles}

              <svg
                className="slideRight"
                xmlns="http://www.w3.org/2000/svg"
                width="18.025"
                height="31.808"
                viewBox="0 0 18.025 31.808"
                onClick={() => slideRight()}
              >
                <path
                  id="Path_4594"
                  data-name="Path 4594"
                  d="M12146.431,5100.626l-13.783,13.783,13.783,13.783"
                  transform="translate(12148.552 5130.313) rotate(180)"
                  fill="none"
                  stroke="#929aa2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </svg>
            </div>
          </div>
        </div>

        <ModalStyle toggleModal={toggleModal}>
          <div className="experienceModal">
            <div
              className="modalBackground"
              onClick={() => modalGenerator(false, index)}
            ></div>
            <div className="modalContainer">
              <svg
                className="toggleOffButton"
                onClick={() => modalGenerator(false, index)}
                xmlns="http://www.w3.org/2000/svg"
                width="30.008"
                height="30"
                viewBox="0 0 30.008 30"
              >
                <path
                  d="M29.845,26.289,40.562,15.571a2.511,2.511,0,0,0-3.552-3.552L26.293,22.737,15.575,12.019a2.511,2.511,0,1,0-3.552,3.552L22.741,26.289,12.024,37.006a2.511,2.511,0,0,0,3.552,3.552L26.293,29.84,37.011,40.558a2.511,2.511,0,0,0,3.552-3.552Z"
                  transform="translate(-11.285 -11.289)"
                />
              </svg>

              <div className="testimonialDetails">
                <img
                  className="testimonialPicture"
                  src={testimonialArray[index].picture}
                  alt=""
                />

                <div className="TextContainer modalText">
                  <p className="recommenderName">
                    {testimonialArray[index].name}
                  </p>
                  <p className="position">{testimonialArray[index].position}</p>
                </div>
              </div>
              <div className="recommendationContainer">
                <p className="recommendationModal">
                  {testimonialArray[index].recommendation}
                </p>
              </div>
            </div>
          </div>
        </ModalStyle>
      </Wrapper>
    </div>
  );
};

export default Testimonials;
