import React, {useState, useEffect} from "react";
import styled from "styled-components";
import quotes from "./quoteArray";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* padding: 0px 0px 30vh 0px; */
  width: 100%;
  height: auto;

  .wisdomGenerator {
    position: relative;
    border: 5px solid ${(props) => props.theme.colors.tan};
    border-radius: 25px;
    height: 450px;
    width: max(50%, 250px);
    max-width: 300px;
    margin: 20px 20px 20px 20px;
  }

  .topContainer {
    position: absolute;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-weight: bold;
    font-size: 1.3em;
    color: ${(props) => props.theme.colors.tan};
    border-radius: 10px;
    margin: 0px;
  }

  .wisdom {
    position: relative;
    top: -20px;
    left: 20%;
    background-color: ${(props) => props.theme.colors.orange};
    text-align: center;
    padding: 5px 25px 5px 25px;
  }

  .generator {
    position: relative;
    right: 20%;
    background-color: ${(props) => props.theme.colors.blue};
    text-align: center;
    padding: 5px 15px 5px 15px;
    top: -15px;
  }

  .quoteIcon {
    position: relative;
    top: 5px;
    height: 30px;
    margin: 20px;
    fill: ${(props) => props.theme.colors.darkGray};
  }

  .center,
  .contentContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .quote,
  .author {
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.tan};

    font-size: 1.2rem;
    margin-left: auto;
    margin-right: auto;
  }

  .contentContainer {
    position: relative;
    top: 60px;
  }

  .quoteContainer,
  .authorContainer {
    align-items: center;
    display: flex;
    text-align: center;
  }

  .quoteContainer {
    position: relative;
    height: 140px;
    width: 85%;
  }

  .authorContainer {
    margin-top: 20px;
    position: relative;
    height: 80px;
    width: 90%;
  }

  .quote {
    height: auto;
    margin: 0px;
    padding: 0px;
    font-style: italic;
  }

  .author {
    padding: 0px;
    font-weight: bold;
  }

  hr {
    position: relative;
    margin-top: 30px;
    max-width: 80px;
    width: 10vw;
    height: 5px;
    background-color: ${(props) => props.theme.colors.darkGray};
    border: none;
    border-radius: 20px;
  }

  .newQuoteButton {
    font-weight: 700;
    position: absolute;
    bottom: -26px;
    color: ${(props) => props.theme.colors.tan};
    padding: 10px 30px;
    background-color: ${(props) => props.theme.colors.green};
    border-radius: 15px;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    transition: ease-in-out 500ms;

    &:hover {
      transform: scale(1.05);

      color: ${(props) => props.theme.colors.tan};
    }
  }
`;

function randomNumber() {
  var lastNum,
    max = quotes.length,
    random;

  random = Math.floor(Math.random() * max);

  while (lastNum !== random) {
    return random;
  }

  // do {
  //   random = Math.floor(Math.random() * max);
  // } while (random === lastNum)

  // lastNum = random;
}

const WisdomGenerator = () => {
  const [quoteIndex, setQuoteIndex] = useState(randomNumber());

  const deliverNewQuote = () => {
    setQuoteIndex(randomNumber());
  };

  useEffect(() => {
    deliverNewQuote();
  }, []);

  return (
    <Wrapper>
      <div className="wisdomGenerator">
        <div className="center">
          <div className="topContainer">
            <h1 className="wisdom">WISDOM</h1>
            <h1 className="generator">GENERATOR</h1>
          </div>

          <div className="contentContainer">
            <svg
              className="quoteIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14.05 12.01"
            >
              <path d="M11.07,12a2.57,2.57,0,0,1-2.13-1,5.13,5.13,0,0,1-.83-4.66,10.84,10.84,0,0,1,2.63-4.45C11.29,1.26,11.92.72,12.5.14A.35.35,0,0,1,13,.09a5.61,5.61,0,0,0,.54.29.49.49,0,0,1,.12.85A8.06,8.06,0,0,0,11.4,5.12a3.44,3.44,0,0,0,1.9,3.94l.31.15a.64.64,0,0,1,.21,1.1,5.16,5.16,0,0,1-1.89,1.45A7,7,0,0,1,11.07,12Z" />
              <path d="M0,7.8A7.63,7.63,0,0,1,1.32,3.87,16,16,0,0,1,4.66.11.49.49,0,0,1,5,.06a5.07,5.07,0,0,1,.61.32.49.49,0,0,1,.13.85A8.32,8.32,0,0,0,3.53,5,3.51,3.51,0,0,0,5.67,9.2a.64.64,0,0,1,.24,1.13A4.93,4.93,0,0,1,3.62,11.9a2.27,2.27,0,0,1-2.35-.66A4.88,4.88,0,0,1,0,7.8Z" />
            </svg>

            <container className="quoteContainer">
              <p className="quote">{quotes[quoteIndex].quote}</p>
            </container>
            <hr />

            <container className="authorContainer">
              <p className="author">{quotes[quoteIndex].author}</p>
            </container>
          </div>

          <button className="newQuoteButton" onClick={deliverNewQuote}>
            + MORE
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default WisdomGenerator;
