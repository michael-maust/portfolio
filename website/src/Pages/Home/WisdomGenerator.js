import React, {useState} from 'react';
import styled from 'styled-components';

import quoteIcon from './media/quoteIcon.svg';

const Wrapper = styled.div`
  .wisdomGenerator {
    border: 5px solid ${(props) => props.theme.colors.tan};
    border-radius: 25px;
    height: auto;
    width: 250px;
    margin-bottom: 200px;
    
  }

  h1 {
    font-weight: bold;
    font-size: 1.3em;
    color: ${(props) => props.theme.colors.tan};
    border-radius: 10px;
  }

  .wisdom {
    position: relative;
    top: -20px;
    left: 60px;
    background-color: ${(props) => props.theme.colors.orange};
    text-align: center;
    padding: 0px;
    margin: 0px;
    width: 60%;
  }

  .generator {
    position: relative;
    top: -10px;
    left: 35px;
    background-color: ${(props) => props.theme.colors.blue};
    text-align: center;
    padding: 0px;
    margin: 0px;
    width: 60%;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }



.quote, .author {
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.tan};
    text-align: center;
    
    font-size: 1.2rem;
   
}

.boundingBox {
    height: 120px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
}


  .quote {
    
    
    margin: 0px;
    padding: 0px;
    font-style: italic;
    
    
   
  
    
    
    
 
  }

  
.author {
    padding: 0px;
    font-weight: bold;
    margin: 20px 30px;
   

}



  .quoteIcon {
    height: 30px;
    margin: 20px;
    color: red;
    fill: ${(props) => props.theme.colors.darkGray};
  }


hr {

    margin-top: 30px;
    width: 30%;
    height: 5px;
    background-color: ${(props) => props.theme.colors.darkGray};
    border: none;
    border-radius: 20px;
}

.newQuoteButton {

    position: relative;
    bottom: -26px;
    color: ${(props) => props.theme.colors.tan};
    padding: 10px 30px;
    background-color: ${(props) => props.theme.colors.green};
    border-radius: 15px;
    border: none;
    font-size: 1.2rem;


   


    &:hover {
      transform: scale(1.1);
      transition: ease-in-out 500ms;
      color: ${(props) => props.theme.colors.tan};
    }
}





`;

const quotes = [
  {
    quote:
      'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'Every adversity, every failure, every heartbreak, carries with it the seed of an equal or greater benefit.',
    author: 'Napoleon Hill',
  },
];

function randomNumber() {
  var min = 0,
    max = quotes.length,
    random;

  do {
    random = Math.floor(Math.random() * (max - min)) + min;
  } while (random === randomNumber.last);

  randomNumber.last = random;
  console.log(random);
  return random;
}

const WisdomGenerator = () => {
  const [quote, setQuote] = useState(quotes[randomNumber()]);

  const deliverNewQuote = () => {
    let newNumber = randomNumber();
    console.log(quotes[newNumber]);
    setQuote(quotes[newNumber]);
  };

  return (
    <Wrapper>
      <div className="wisdomGenerator">


          
        <h1 className="wisdom">WISDOM</h1>
        <h1 className="generator">GENERATOR</h1>


        <div className="center">
          <svg
            className="quoteIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14.05 12.01"
          >
            <path d="M11.07,12a2.57,2.57,0,0,1-2.13-1,5.13,5.13,0,0,1-.83-4.66,10.84,10.84,0,0,1,2.63-4.45C11.29,1.26,11.92.72,12.5.14A.35.35,0,0,1,13,.09a5.61,5.61,0,0,0,.54.29.49.49,0,0,1,.12.85A8.06,8.06,0,0,0,11.4,5.12a3.44,3.44,0,0,0,1.9,3.94l.31.15a.64.64,0,0,1,.21,1.1,5.16,5.16,0,0,1-1.89,1.45A7,7,0,0,1,11.07,12Z" />
            <path d="M0,7.8A7.63,7.63,0,0,1,1.32,3.87,16,16,0,0,1,4.66.11.49.49,0,0,1,5,.06a5.07,5.07,0,0,1,.61.32.49.49,0,0,1,.13.85A8.32,8.32,0,0,0,3.53,5,3.51,3.51,0,0,0,5.67,9.2a.64.64,0,0,1,.24,1.13A4.93,4.93,0,0,1,3.62,11.9a2.27,2.27,0,0,1-2.35-.66A4.88,4.88,0,0,1,0,7.8Z" />
          </svg>


        <container className="boundingBox">
          <p className="quote">{quote.quote}</p>
          </container>
          <hr />

          <p className="author">{quote.author}</p>
         

          <button className="newQuoteButton" onClick={deliverNewQuote}>+ MORE</button>

        </div>


      </div>
    </Wrapper>
  );
};

export default WisdomGenerator;
