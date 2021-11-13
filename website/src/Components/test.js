import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`


p {
    font-size: 20px;
    color: red;
}

h1 {
    color: black;
}



.card {

    background-color: white;
    margin: 100px;
    padding: 100px;
    border-radius: 50px;
    inline-size: 300px;
    overflow-wrap: break-word;
    box-shadow: 50px 10px 80px 5px black;



}

`;

const test = () => {
  return (
    <Wrapper>
      <div>
        <div className="card">
          <h1>HEADER</h1>
          <p>
            This is a test paragraph. I am a person. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Atque expedita harum quis cumque amet
            earum eius dignissimos corrupti distinctio hic dolores, nisi enim
            odio quam totam cupiditate, autem maxime nulla?
          </p>

          
            

        </div>
      </div>
    </Wrapper>
  );
};

export default test;
