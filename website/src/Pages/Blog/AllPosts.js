// src/components/AllPosts.js

import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import sanityClient from "../../client.js";
import styled from "styled-components";

const Wrapper = styled.div`
  top: 200px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-bottom: 1000px;

  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;

  * {
    margin: 0px;
    padding: 0px;
    text-decoration: none;
  }

  .postContainer {
    width: 80vw;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1% 1% 40px 1%;
    gap: 20px;
    margin: auto;
    background-color: ${(props) => props.theme.colors.darkGray};
    
  }

  .postCards {
    display: flex;
    flex-direction: column;
    margin: 20px;
    position: relative;
    
    
    background-color: ${(props) => props.theme.colors.charcoal};
    border-radius: 25px;
    height: 400px;
    width: 360px;
    overflow: hidden;
    transition: ease-in-out 0.5s;
    cursor: pointer;
    box-shadow: ${(props) => props.theme.shadow.box};
    padding: 1px;

    &:hover {
      transform: scale(1.02);
      
      
     

    }

  }

  .cardHeader {
    width: 100%;
    height: 65%;
    z-index: 100;
    overflow: hidden;
    
    
    
  }


  .textContainer {
    border-radius: 25px 25px 0px 0px;
    width: 99.7%;
    height: 66%;
    position: absolute;
    top: -1px;
    
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    
    
    
  }

.postTitle, .postDescription {
  padding-left: 20px;

}




  .postTitle {
    text-decoration: none;
    color: ${(props) => props.theme.colors.orange};
    font-weight: bold;
    padding-top: 20px;
    
  }




  .mainImage {
    
    position: relative;
    width: 100%;
    border-radius: 25px 25px 0px 0px;
    height: 100%;
    object-fit: cover;
    margin-right: 10px;
    
  }

 

 

  .test {
    text-decoration: none;
  }

  

  .postDescription {
    color: ${(props) => props.theme.colors.tan};
    font-size: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 90%;
  }
`;

const AllPosts = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] [0...3]{
        title,
        slug,
        publishedAt,
        description,
        body,
        "tags": category->title,
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
        <div className="postContainer">
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link
                to={"/blog/" + post.slug.current}
                key={post.slug.current}
                className="postCards"
              >
                <div className="cardHeader">
                  <span key={index}>
                    <img
                      className="mainImage"
                      src={post.mainImage.asset.url}
                      alt=""
                    />

                    <div className="textContainer">
                      <h1 className="postTitle">{post.title}</h1>

                      <p className="postDescription">{post.description}</p>
                    </div>
                  </span>
                </div>

                <div className="postDetailContainer">
                  <h6 className="date">{post.publishedAt}</h6>
                  <h6 className="tags">#{post.tags}</h6>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default AllPosts;
