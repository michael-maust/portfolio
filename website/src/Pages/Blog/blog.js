



import React, {useEffect} from 'react'
import AllPosts from './AllPosts'
import styled from 'styled-components';
import Prism from 'prismjs'


const Wrapper = styled.div`



`



const code = `var data = 1;`;

const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');





const Blog = () => {

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  

 
 
  return (
    <Wrapper>
    <div>


    <code className="prettyprint"> {code}  </code>
    
       
      <AllPosts />
    </div>
    </Wrapper>
  )
}

export default Blog
