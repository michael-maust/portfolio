import React from 'react';
import styled from 'styled-components';

import LinkedIn from '../media/LinkedIn.svg';
import GitHub from '../media/GitHub.svg';
import Medium from '../media/Medium.svg';
import YouTube from '../media/YouTube.svg';

const Wrapper = styled.div`
  .mediaLink,
  img {
    height: 35px;
    padding: 15px 5px;

    &:hover {
      transform: scale(1.05);
    }
  }

  .Icons {
    margin: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
  }
`;

const SocialMediaLinks = () => {
  return (
    <Wrapper>
      <div className="Icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="mediaLink"
          href="https://www.linkedin.com/in/michael-maust-894712164/"
        >
          <img
            className="linkedIn"
            src={LinkedIn}
            alt="LinkedIn link icon"
          ></img>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="mediaLink"
          href="https://github.com/michael-maust"
        >
          <img className="GitHub" src={GitHub} alt="GitHub link icon"></img>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="mediaLink"
          href="https://medium.com/@michaelmaust"
        >
          <img className="Medium" src={Medium} alt="Medium link icon"></img>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="mediaLink"
          href="https://www.youtube.com/channel/UCMWm6Q_N5t7Y7pXgwLk4vEQ"
        >
          <img className="YouTube" src={YouTube} alt="YouTube link icon"></img>
        </a>
      </div>
    </Wrapper>
  );
};

export default SocialMediaLinks;
