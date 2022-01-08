// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import styled from "styled-components";


const Wrapper = styled.div`


padding: 10vw;




.mainImage {

  width: 300px;
  border-radius: 25px;
}

.postLink {

color: red;


}


h2 {
  text-decoration: none;

}



.test {
  text-decoration: none;

}


`












const AllPosts = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] [0...3]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      // .then((data) => console.log(data))
      .then((data) => setAllPosts(data))
      
      .catch(console.error);
  }, []);

  return (
    <Wrapper>
    <div>
      <h2>Blog Posts</h2>
      <h3>Welcome to my blog posts page!</h3>
      <div>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link to={"/blog/" + post.slug.current} key={post.slug.current} className='test'>
              <span key={index}>
                <img className='mainImage' src={post.mainImage.asset.url} alt="" />
                <span className='postLink'>
                  <h2>{post.title}</h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
    </Wrapper>
  );
}

export default AllPosts










