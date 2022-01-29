import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Wrapper = styled.div`
  * {
    margin: 0px;
    padding: 0px;
    font-family: ${(props) => props.theme.fonts.primary};
  }

  .componentContainer {
    z-index: 300;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 25px;
    height: auto;
    width: clamp(240px, 90vw, 700px);
    overflow: hidden;
  }

  .title {
    position: relative;
    color: ${(props) => props.theme.colors.orange};
    font-weight: bold;
    font-size: clamp(1.9rem, -0.875rem + 8.333vw, 2.8rem);
    margin-top: 50px;
    margin-bottom: 0px;
    padding: 0px;
  }

  .description,
  .successMessage {
    width: 95%;
    max-width: 500px;
    position: relative;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.para};
    color: ${(props) => props.theme.colors.tan};
  }

  form {
    position: relative;
    display: flex;
    flex-direction: column;

    align-items: left;
    justify-content: center;
    padding: 1% 1% 40px 1%;
    gap: 10px;
  }

  .flexCenter {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input,
  textArea {
    background-color: ${(props) => props.theme.colors.darkGray};
    font-size: ${(props) => props.theme.fontSizes.para2};
    color: ${(props) => props.theme.colors.tan};
    border: none;
    border-radius: 10px;
    height: 30px;
    width: clamp(200px, 70vw, 400px);
    margin-left: 0px;
    padding: 15px;

    &:focus {
      outline: none;
      border-bottom: 3px solid ${(props) => props.theme.colors.lightBlue};
    }
  }

  textArea {
    padding-top: 20px;
    height: 150px;
    resize: none;
  }

  label {
    font-size: ${(props) => props.theme.fontSizes.para2};
    color: ${(props) => props.theme.colors.lightBlue};
    font-weight: 600;

    font-style: italic;
    position: relative;
    top: 25px;
    right: -5%;
  }

  button {
    border: none;
    border-radius: 10px;
    padding: 5px;
    margin-top: 20px;
    background-color: ${(props) => props.theme.colors.green};
    font-size: ${(props) => props.theme.fontSizes.para2};
    font-weight: 600;
    color: ${(props) => props.theme.colors.tan};
    width: 200px;
    align-items: center;
    cursor: pointer;
    transition: ease-in-out 0.5s;

    &:hover {
      transform: scale(1.05);
    }
  }

  hr {
    background-color: ${(props) => props.theme.colors.darkGray};
    border: none;
    border-radius: 20px;
    width: clamp(100px, 50vw, 350px);
    height: 7px;
  }

  .successMessage {
    color: ${(props) => props.theme.colors.lightBlue};
  }
`;

const ContactForm = () => {
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i5q6o8e",
        "template_m4lsllr",
        form.current,
        "user_RZjgKD6LUoGgz9KCLbdnG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFeedbackMessage(
            "Thanks for reaching out! I will get back to you shortly."
          );
        },
        (error) => {
          console.log(error.text);
          setFeedbackMessage(
            "Failed to send. Please try again later or email me at info@michaelmaust.com"
          );
        }
      );

    e.target.reset();
  };

  return (
    <div>
      <Wrapper>
        <div className="componentContainer">
          <hr />
          <h1 className="title">CONTACT ME</h1>

          <p className="description">
            Reach out if you any questions, inquiries, or would simply like to
            say hi!
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <label className='disable-select'>NAME</label>
            <input type="text" name="fullName" required/>
            <label className='disable-select'>EMAIL</label>
            <input type="email" name="emailAddress" required/>
            <label className='disable-select'>MESSAGE</label>
            <textarea name="message" required/>

            <div className="flexCenter">
              <button className='disable-select' type="submit">SUBMIT</button>
            </div>
          </form>

          <div className="successMessage">{feedbackMessage}</div>

          <div className="skillsContainer"></div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContactForm;
