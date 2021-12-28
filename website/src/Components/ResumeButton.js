import React from 'react';
import styled from 'styled-components';

import LinkedIn from '../media/LinkedIn.svg';
import GitHub from '../media/GitHub.svg';
import Medium from '../media/Medium.svg';
import YouTube from '../media/YouTube.svg';

const Wrapper = styled.div`

  a {
    margin-top: 20px;
    justify-content: center;
    display: flex;
  }

  .resume {
    padding: 10px 30px;
    background-color: ${(props) => props.theme.colors.blue};
    border-radius: 10px 30px 10px 30px;

    &:hover {
      transform: scale(1.1);
      transition: ease-in-out 500ms;
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
          href="https://drive.google.com/file/d/1IfkSktkRyeXvZypM0DNy1iCBrxGoSvpa/view?usp=sharing"
        >
          <div className="resume">DOWNLOAD CV</div>
        </a>
      </div>
    </Wrapper>
  );
};

export default ResumeButton;
