// src/components/AllPosts.js

import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import sanityClient from "../../client.js";
import styled from "styled-components";
import touchIcon from "../../media/touchIcon.svg";

const Wrapper = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;

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

    margin-top: 10px;
  }

  .postContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    gap: 30px;
  }

  .postCards {
    position: relative;
    background-color: ${(props) => props.theme.colors.charcoal};
    border-radius: 25px;
    height: auto;
    width: clamp(250px, 80vw, 300px);
    transition: ease-in-out 0.5s;
    cursor: pointer;
    box-shadow: ${(props) => props.theme.shadow.box};

    &:hover {
      transform: scale(1.02);
    }
  }

  .touchIcon {
      position: absolute;
      z-index: 500px;
      padding: 0px;
      margin: 5px 5px auto auto;
      width: 25px;
      bottom: 10px;
      right: 10px;
      
    }





  .mainImage {
    position: relative;
    width: 100%;
    border-radius: 25px 25px 0px 0px;
    height: clamp(150px, 40vh, 350px);
    filter: opacity(30%);

    object-fit: cover;
  }

  .headerContainer {
    position: absolute;
    top: 0px;
    margin: 20px;
    overflow: hidden;
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

    font-size: clamp(1.2rem, -0.875rem + 2.333vh, 1.4rem);
    
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
  .tags {
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

  hr {
    background-color: ${(props) => props.theme.colors.charcoal};
    border: none;
    border-radius: 20px;
    width: 200px;
    height: 7px;
    margin: 10px;
  }

  .description {
    width: 80%;
    max-width: 700px;
    position: relative;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.para};
    color: ${(props) => props.theme.colors.tan};
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .moreButton {
  margin-top: 20px;
  font-size: clamp(1.1rem, -0.875rem + 2vw, 1.4rem);
  font-weight: 700;
  border-radius: 10px 30px 10px 30px;
  color: ${(props) => props.theme.colors.tan};
  background-color: ${(props) => props.theme.colors.green};
  padding: 5px 20px 5px 20px;
  transition: ease-in-out 0.5s;
    cursor: pointer;

  &:hover {
      transform: scale(1.02);
    }
}
`;

const LatestPosts = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] [0...3]  {
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
          <hr />
          <p className="description">
            I love writing and sharing what I know. Here are a few articles that
            I've recently written:
          </p>

          <div className="postContainer">
            {allPostsData &&
              allPostsData
                .map((post, index) => (
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

                      <div className="headerContainer">
                        <h1 className="postTitle">{post.title}</h1>
                        <p className="postDescription">{post.description}</p>
                      </div>

                      <div className="contentContainer">
                        <h6 className="date">{post.publishedAt}</h6>
                        <h6 className="tags">#{post.tags}</h6>
                        <img className="touchIcon" src={touchIcon} alt="" />
                      </div>
                    </span>
                  </Link>
                ))
                .reverse()}
          </div>
          <Link to={"/blog/"} className="moreButton">
            SEE MORE {'>'}
          </Link>
        </div>
        
      </div>
    </Wrapper>
  );
};

export default LatestPosts;
