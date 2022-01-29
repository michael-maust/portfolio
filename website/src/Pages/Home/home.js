import React from "react";
import Styled from "styled-components";

// File Imports
import WisdomGenerator from "./WisdomGenerator";
import BioSection from "./BioSection";
import WebsiteDetails from "./WebsiteDetails";
import LatestProjects from "../Projects/LatestProjects";


import SkillSection from "./SkillSection";
import LatestPosts from "../Blog/latestPosts";
import Testimonials from "./Testimonials";
import ContactForm from "../Contact/ContactForm";




const Wrapper = Styled.div`

  


  top: clamp(150px, 25vh, 250px);
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  




  margin-left: auto;
  margin-right: auto;
  
  font-family: ${(props) => props.theme.fonts.primary};



  
    


      

  
  .centerSpacing {
    padding-top: 200px;
  }

  .bottomSpacing {
    padding-top: 50px;
  }









`;

const home = () => {
  return (
    <div className="HomePage">
      <Wrapper>
        <div className=""></div>

        <div className="topSpacing"></div>

      
        <BioSection />


        <div className="centerSpacing"></div>

        

        <WebsiteDetails />

        <div className="centerSpacing"></div>

        <LatestProjects />

        <div className="centerSpacing"></div>

       <WisdomGenerator />

        <div className="centerSpacing"></div>

        
        <SkillSection />

        <div className="centerSpacing"></div>

  
      <Testimonials />

      <div className="centerSpacing"></div>


        <LatestPosts />

        <div className="centerSpacing"></div>

        <ContactForm />

        <div className="bottomSpacing"></div>

       

      </Wrapper>
    </div>
  );
};

export default home;
