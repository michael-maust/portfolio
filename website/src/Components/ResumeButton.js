import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

  a {
    margin-top: 20px;
    margin-bottom: 10px;
    justify-content: center;
    display: flex;
    
    text-decoration: none;
    color: ${(props) => props.theme.colors.tan};
    font-weight: bold;
    padding: 5px 20px;
    
  }

  .resume {
    padding: 10px 30px;
    background-color: ${(props) => props.theme.colors.blue};
    border-radius: 10px 30px 10px 30px;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: ease-in-out 500ms;


    &:hover {
      transform: scale(1.05);
      
      color: ${(props) => props.theme.colors.tan};
    }
  }


 







`;

const ResumeButton = () => {
  return (
    <Wrapper>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/15GhfXmDOY2Yc39Wq35Beot2eAhs1PfIj/view?usp=sharing"
        >
          <div className="resume">DOWNLOAD RESUME</div>
        </a>
      </div>
    </Wrapper>
  );
};

export default ResumeButton;
