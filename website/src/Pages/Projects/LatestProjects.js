// src/components/AllPosts.js

import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import sanityClient from "../../client.js";
import styled from "styled-components";

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

  .projectComponent {
    background-color: ${(props) => props.theme.colors.darkGray};
    border-radius: 25px;
    height: auto;
    width: clamp(100px, 90vw, 1300px);
    padding: 20px 0px 50px 0px;
    box-shadow: ${(props) => props.theme.shadow.box};

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }

  .componentTitle {
    position: relative;
    color: ${(props) => props.theme.colors.tan};
    font-weight: bold;
    font-size: clamp(1.9rem, -0.875rem + 8.333vw, 2.8rem);
  }

  .description {
    width: 95%;
    max-width: 800px;
    position: relative;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.para2};
    color: ${(props) => props.theme.colors.tan};
    margin-top: 5px;
    margin-bottom: 10px;
  }

  .projectContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    gap: 30px;
    align-items: stretch;
    flex-grow: 1;
  }

  .projectCards {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    align-items: flex-start;
    justify-content: center;
    flex-grow: 1;

    position: relative;
    background-color: ${(props) => props.theme.colors.charcoal};
    border-radius: 25px;
    height: auto;
    width: clamp(200px, 70vw, 300px);
    padding: 20px;
    transition: ease-in-out 0.5s;
    cursor: default;
    box-shadow: ${(props) => props.theme.shadow.box};

    &:hover {
      transform: scale(1.02);
    }
  }

  .cardContent {
    height: 100%;
  }

  .mainImage {
    position: relative;

    border-radius: 15px;
    height: clamp(150px, 100vh, 170px);
    object-fit: cover;
    width: 100%;
  }

  .projectTitle {
    padding-top: 5px;
    vertical-align: middle;

    text-decoration: none;
    color: ${(props) => props.theme.colors.orange};
    font-weight: bold;
    text-transform: uppercase;

    font-size: clamp(1.2rem, -0.875rem + 6.333vw, 1.7rem);
  }

  .projectDescription {
    color: ${(props) => props.theme.colors.tan};

    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    font-size: clamp(1rem, -0.875rem + 2.333vw, 1.2rem);
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

  .tags {
    margin-top: 5px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.blue};
    text-transform: lowercase;
    font-size: clamp(1rem, -0.875rem + 5.333vw, 1.2rem);
    line-height: 1.5rem;
    height: 3rem;
    margin-bottom: 20px;

    overflow: hidden;
  }

  hr {
    background-color: ${(props) => props.theme.colors.charcoal};
    border: none;
    border-radius: 20px;
    width: 200px;
    height: 7px;
    margin: 10px;
  }

  .codeLink,
  .demoLink,
  .detailsLink {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: clamp(1rem, -0.875rem + 2vw, 1.2rem);

    color: ${(props) => props.theme.colors.lightBlue};
    text-transform: uppercase;
    transition: ease-in-out 0.5s;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.blue};
    }
  }

  .codeLink,
  .demoLink {
    &:after {
      content: "|";
      color: ${(props) => props.theme.colors.charcoal};
      padding-left: 5px;
      position: absolute;
      font-weight: 700;
    }
  }

  .linkContainer {
    width: max-content;
    margin-top: 10px;
    margin-bottom: 10px;
    background: ${(props) => props.theme.colors.darkGray};
    font-weight: 700;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .null {
    display: none;
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

const LatestProjects = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project" && status == "featured"]  {
        title,
        slug,
        demoLink,
        codeLink,
        status,
        tags,
        publishedAt,
        description,
        body,
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
        <div className="projectComponent">
          <h1 className="componentTitle">PROJECTS</h1>
          <hr />
          <p className="description">
            Creating stuff is my passion. I love bringing ideas into reality and
            solving problems. Check out what I've been up to recently:
          </p>

          <div className="projectContainer">
            {allPostsData &&
              allPostsData
                .map((project, index) => (
                  <div className="projectCards">
                    <span key={index} className="cardContent">
                      <img
                        className="mainImage"
                        src={project.mainImage.asset.url}
                        alt=""
                      />

                      <h1 className="projectTitle">{project.title}</h1>
                      <p className="projectDescription">
                        {project.description}
                      </p>

                      <div className="linkContainer">
                        <a
                          className={`codeLink ${project.codeLink}`}
                          href={project.codeLink}
                          target="blank"
                          rel="noopener noreferrer"
                        >
                          Code
                        </a>

                        <a
                          className={`demoLink ${project.demoLink}`}
                          href={project.demoLink}
                          target="blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>

                        <Link
                          to={"/projects/" + project.slug.current}
                          key={project.slug.current}
                          className="detailsLink"
                        >
                          Details
                        </Link>
                      </div>

                      <h6 className="tags">{project.tags}</h6>
                    </span>
                  </div>
                ))
                .reverse()}
          </div>

          <Link to={"/projects/"} className="moreButton">
            SEE MORE {'>'}
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default LatestProjects;
