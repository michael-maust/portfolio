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
  justify-content: center;

  padding-bottom: 1000px;

  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;

  * {
    margin: 0px;
    padding: 0px;
    text-decoration: none;
  }

  .postComponent {
    background-color: ${(props) => props.theme.colors.darkGray};
    border-radius: 25px;
    height: auto;
    width: clamp(100px, 90vw, 1300px);
    padding: 20px 0px 50px 0px;
    box-shadow: ${(props) => props.theme.shadow.box};

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }

  .componentTitle {
    position: relative;
    color: ${(props) => props.theme.colors.tan};
    font-weight: bold;
    font-size: calc(1.6rem + 0.8vw);

    margin-bottom: 20px;
    padding: 0px;
  }

  .postContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    
    gap: 30px;
  }

  .postCards {
    position: relative;
    background-color: ${(props) => props.theme.colors.charcoal};
    border-radius: 25px;
    height: auto;
    width: clamp(250px, 20vw, 350px);
    transition: ease-in-out 0.5s;
    cursor: pointer;
    box-shadow: ${(props) => props.theme.shadow.box};

    &:hover {
      transform: scale(1.02);
    }
  }

  .mainImage {
    position: relative;
    width: 100%;
    border-radius: 25px 25px 0px 0px;
    height: clamp(150px, 20vh, 250px);

    object-fit: cover;






  }

  .contentContainer {
    padding: 5px 20px 20px 20px;
  }

  .postTitle {
    

    vertical-align: middle;


    

 

    text-decoration: none;
    color: ${(props) => props.theme.colors.orange};
    font-weight: bold;
    text-transform: uppercase;

    font-size: clamp(1.5rem, -0.875rem + 5.333vw, 2rem);
  }

  .postDescription {
    color: ${(props) => props.theme.colors.tan};

    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  hr {
    margin-top: 15px;
    margin-bottom: 15px;
    width: 55%;
    height: 5px;
    background-color: ${(props) => props.theme.colors.darkGray};
    border: none;
    border-radius: 20px;
  }

  .date,
  .tags,
  .postDescription {
    font-size: clamp(1.2rem, -0.875rem + 5.333vw, 1.4rem);
  }

  .date {
    color: ${(props) => props.theme.colors.tan};

    font-weight: 300;
  }

  .tags {
    margin-top: 5px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.blue};
    text-transform: lowercase;
  }
`;

const LatestPosts = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] [1...4] {
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
        <div className="postComponent">
          <h1 className="componentTitle">LATEST POSTS</h1>

          <div className="postContainer">
            {allPostsData &&
              allPostsData.map((post, index) => (
                <Link
                  to={"/blog/" + post.slug.current}
                  key={post.slug.current}
                  className="postCards"
                >
                  <span key={index}>
                    <img
                      className="mainImage"
                      src={post.mainImage.asset.url}
                      alt=""
                    />

                    <div className="contentContainer">
                      <h1 className="postTitle">{post.title}</h1>
                      <p className="postDescription">{post.description}</p>

                      <hr />
                      <h6 className="date">{post.publishedAt}</h6>
                      <h6 className="tags">#{post.tags}</h6>
                    </div>
                  </span>
                </Link>
              )).reverse()}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LatestPosts;
