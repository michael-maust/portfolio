import React from 'react';
import Styled from 'styled-components';






// File Imports
import WisdomGenerator from './WisdomGenerator';
import BioSection from './BioSection';
import SkillSection from './SkillSection'


const Wrapper = Styled.div`

  


  top: 140px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  
  font-family: ${(props) => props.theme.fonts.primary};

  
    

       

      

  
       









`;

const home = () => {
  return (
    <div className='HomePage'> 
    <Wrapper>
     
      <div className=""></div>

          
    <BioSection />
    <SkillSection />

      <WisdomGenerator />
    </Wrapper>


</div>
  );
};

export default home;
