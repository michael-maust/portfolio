import styled from "styled-components";


import CoverPicture from "../../media/CoverPicture.png";
import ContactForm from "../Contact/ContactForm";

const Wrapper = styled.div`
  * {
    margin: 0px;
    padding: 0px;
  }

  main {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: ${(props) => props.theme.fonts.primary};
    width: 100vw;
    

  }

 .content {

  max-width: 80vw;

 }

  .imageContainer {
    position: relative;
    display: flex;
    width: clamp(100px, 80vw, 1000px);
    height: clamp(100px, 30vw, 230px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: clamp(200px, 90%, 600px);
    height: clamp(100px, 80%, 200px);
    z-index: -300;
    box-shadow: ${(props) => props.theme.shadow.box};
  }

  .mainImage {
    width: 100%;
    height: 100%;
    object-position: center right;
    object-fit: cover;
    border-radius: 20px;
    position: relative;
    display: flex;
    margin: auto;
    box-shadow: ${(props) => props.theme.shadow.box};
  }

  .imageBorderLeft {
    position: absolute;
    top: -17px;
    left: -17px;
    border-radius: 20px 100px 20px 40px;
    fill: ${(props) => props.theme.colors.orange};
  }

  .imageBorderRight {
    position: absolute;
    bottom: -17px;
    right: -17px;
    border-radius: 20px 40px 20px 100px;
    fill: ${(props) => props.theme.colors.blue};
  }

  h1 {
    margin-top: 50px;
    color: ${(props) => props.theme.colors.tan};
    text-transform: uppercase;
    position: relative;
    font-size: clamp(2rem, -0.675rem + 6.333vw, 3.2rem);
  }

  p {
    margin: 0px;
    padding: 0px;
    width: 100%;
    max-width: 1000px;
    position: relative;
    text-align: left;
    font-size: ${(props) => props.theme.fontSizes.para};
    color: ${(props) => props.theme.colors.tan};
    white-space: pre-line;
  }

  a {
    color: ${(props) => props.theme.colors.tan};
    font-size: ${(props) => props.theme.fontSizes.para2};
    font-weight: bold;
    text-decoration-color: ${(props) => props.theme.colors.orange};
  }

  .divider {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 0px;
    width: 40%;
    height: 10px;
    background-color: ${(props) => props.theme.colors.darkGray};
    border: none;
    border-radius: 20px;
  }


.line-numbers {
  
}


pre {
  padding: 40px 0px 40px 50px;
  margin: 20px 0px 20px 0px;
  background: ${(props) => props.theme.colors.darkGray};
  border-radius: 25px;
  width: clamp(100px, 80%, 1000px);
  
  
  
  

  &:focus {
      outline: none;
    }
}




code {
  overflow: auto;
  font-size: ${(props) => props.theme.fontSizes.para3};
}





.spacing {
  margin-top: 100px;
}



`;






export default function AboutMe() {
  const Prism = require('prismjs');

  
 




  return (
    <Wrapper>
      <main>
        <div className="imageContainer">
          <img loading="lazy" className="mainImage" src={CoverPicture} alt="" />

          <svg width="300" height="100" className="imageBorderLeft">
            <rect x="0" y="0" width="100%" height="100%" />
          </svg>

          <svg width="300" height="60" className="imageBorderRight">
            <rect x="0" y="0" width="100%" height="100%" />
          </svg>
        </div>

        <div className="content">
          <h1>ABOUT ME</h1>

          <p>{`Back when I was 624 weeks old (12 years for you normal folk), my mom bought me a Java programming book for my birthday. At the time, I was a big fan of Minecraft and had the idea of developing my own mods for the game.  However, that interest quickly dissipated after I realized how laborious it is to merely say “Hello World”...`}</p>


<pre ><code className="language-javaScript">{`public class HelloWorld {
  public static void main(String[] args) {
      System.out.println("Hello, World");
  }

// As opposed to JavaScript: console.log("Hello, World");
`}
  
  
  </code></pre>




          <p>
            {`
            Unfortunately, at the time, I did not have any mentors in the tech space to encourage me to continue programming and thus I stopped for the time being. 
            
            Fast forward another 364 weeks: I am a sophomore at College of the Ozarks studying general engineering with minors in business administration and mathematics. It was common at this time for me to burn the proverbial “midnight oil” while solving exceedingly long calculus, physics, and engineering problems (P.S. it's wonderful to no longer be a sophomore). However, one of the highlights of my sophomore year was learning MatLab, which is a programming platform tailored specifically for engineers and scientists to solve and design analytical systems. My class was given a project to create an application with a visual interface that would allow the user to calculate and analyze beam deflection for structural analysis. This project reintroduced me into the world of software development and taught me the foundational principles of programming (i.e., loops, arrays, functions, etc.). My love for programming was reignited. 
            
            Throughout the next several years, I would go on to learn Python, JavaScript, CSS, and HTML. I dabbled a bit in data analysis and machining learning by creating a few Python scripts that could identify objects and do character recognition with the TensorFlow library. After a year of Python, I started learning frontend design using freeCodeCamp.org (big thanks to Quincy Larson by the way!). After going through the first three modules - Responsive Web Design, JavaScript Algorithms and Data Structures, and Front End Development Libraries - I had fallen in love with JavaScript and React. 
            
            As of writing this, I am now 1,174 weeks old and I am about to graduate from college. I love building and creating things, especially software and businesses that bring value to people's lives. My current goal is to work as a frontend developer, creating software that is both innovative and impacting.
            `}
          </p>
        </div>

        <div className="spacing">
        <ContactForm />
        </div>
      </main>



      
    </Wrapper>
  );
}
