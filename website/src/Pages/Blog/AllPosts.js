// src/components/AllPosts.js

import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import sanityClient from "../../client.js";
import styled from "styled-components";

const Wrapper = styled.div`
  top: 200px;
  position: relative;
  display: flex;

  padding-bottom: 300px;





  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;
  width: 100vw;
  background-color: gray;

  position: relative;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  flex-direction: column;

  * {
    margin: 0px;
    padding: 0px;
    text-decoration: none;
  }

  .postCards {




    
    display: flex;
    margin: 20px;
    position: relative;
    width: 300px;
    
    background-color: ${(props) => props.theme.colors.darkGray};
    width: 300px;
    border-radius: 25px;
    height: 400px;
  }

  .cardContainer {
    
    
  }

  .mainImage {
    width: 300px;
    border-radius: 25px;
    height: 250px;
    object-fit: cover;
  }

  .postLink {
    color: red;
  }

  h1 {
    text-decoration: none;
    color: red;
  }

  .test {
    text-decoration: none;
  }

  .textContainer {
  }

  .postDescription {
    color: ${(props) => props.theme.colors.tan};
    font-size: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
        <div>
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link
                to={"/blog/" + post.slug.current}
                key={post.slug.current}
                className="postCards"
              >
                <div className="cardContainer">
                  <span key={index}>
                    <img
                      className="mainImage"
                      src={post.mainImage.asset.url}
                      alt=""
                    />

                    <h1 className="postTitle">{post.title}</h1>
                    <div className="textContainer">
                      <p className="postDescription">{post.description}</p>
                    </div>
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default AllPosts;
