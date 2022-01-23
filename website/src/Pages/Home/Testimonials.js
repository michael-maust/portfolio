import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import testimonialArray from "./testimonialArray";

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
    padding: 30px 0px 30px 0px;
    box-shadow: ${(props) => props.theme.shadow.box};
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: auto;
    padding: 30px 20px 30px 20px;
    margin: 0 auto;
  }

  .title {
    position: relative;
    color: ${(props) => props.theme.colors.tan};
    font-weight: bold;
    font-size: clamp(1.9rem, -0.875rem + 8.333vw, 2.8rem);
    margin-top: 20px;
    margin-bottom: 5px;
    padding: 0px;
  }

  hr {
    background-color: ${(props) => props.theme.colors.charcoal};
    border: none;
    border-radius: 20px;
    width: 200px;
    height: 7px;
    margin: 10px;
  }

  .description {
    width: 95%;
    max-width: 800px;

    position: relative;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.para2};
    color: ${(props) => props.theme.colors.tan};
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .testimonialCard {
    margin-top: 20px;
    position: relative;
    background-color: ${(props) => props.theme.colors.charcoal};
    border-radius: 25px;

    width: clamp(180px, 70vw, 600px);
    height: auto;

    padding: 30px;
    cursor: pointer;
    box-shadow: ${(props) => props.theme.shadow.box};
    transition: ease-in-out 0.5s;
  }

  .testimonialPicture {
    width: auto;
    height: 70px;
    border-radius: 50%;
  }

  .recommenderName {
    color: ${(props) => props.theme.colors.orange};
    font-size: 1.4rem;
    font-weight: 600;
  }

  .position {
    color: ${(props) => props.theme.colors.tan};
    font-style: italic;
    font-size: 1.1rem;
    font-weight: 100;
  }

  .testimonialDetails {
    display: flex;

    gap: 15px;
  }

  .recommendation {
    position: relative;
    white-space: pre-line;
    width: auto;

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
    font-size: ${(props) => props.theme.fontSizes.para};
    font-weight: 500;
    position: absolute;
    width: max-content;
    bottom: 15px;
    right: 20px;
  }
`;

// useInterval custom hook resolves the issue of changing state within a setInterval function.
// Credit: Dan Abramov (Made freely available)

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Testimonials = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [index, setIndex] = useState(0);


  const generateCircles = testimonialArray.map((testimonial) =>(

    <div
          className="skillItem"
          key={index}
        //   onClick={() => modalGenerator(true, skill.index)}
        >
    
            {testimonial.name}</div>
    
    ))



  useInterval(() => {
    if (index === testimonialArray.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, 5000);












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

            <div className="testimonialCard" key={testimonialArray[index].name}>
              <div className="testimonialDetails">
                <img
                  className="testimonialPicture"
                  src={testimonialArray[index].picture}
                  alt=""
                />

                <div className="TextContainer">
                  <p className="recommenderName">
                    {testimonialArray[index].name}
                  </p>
                  <p className="position">{testimonialArray[index].position}</p>
                </div>
              </div>
              <p className="recommendation">
                {testimonialArray[index].recommendation}
              </p>
              <p className="seeMore">...see more</p>
            </div>

            <div className="cardSelector">{generateCircles}</div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Testimonials;
