import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import LatestPosts from "./latestPosts";

import Prism from "prismjs";

const ArticleStyle = styled.div`

* {
    margin: 0px;
    padding: 0px;
  }



article {

  position: relative;
  margin-top: clamp(180px, 20vh, 200px);
}




  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  font-family: ${(props) => props.theme.fonts.primary};

  /* background: lightgray; */

  .latestPosts {
    margin-bottom: 200px;
  }

 

  .latestPosts {
    margin-bottom: 200px;
  }



  article {
    width: clamp(150px, 80vw, 1000px);
    /* background: gray; */
    padding: 20px;
  }

  .imageContainer {
    position: relative;
    display: flex;
    width: clamp(100px, 80vw, 1000px);
    height: clamp(200px, 25vh, 400px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: clamp(200px, 70%, 600px);
    height: clamp(100px, 60%, 200px);
    z-index: -300;
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

  .mainImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    position: relative;
    display: flex;
    margin: auto;
    box-shadow: ${(props) => props.theme.shadow.box};
  }

  .postTitle {
    font-size: clamp(2rem, -0.675rem + 6.333vw, 3.2rem);

    font-weight: bold;
    color: ${(props) => props.theme.colors.tan};
    margin: 50px 0px 20px 0px;
  }

  .detailContainer {
    padding: 10px 15px 10px 15px;
    margin: 0px 0px 10px 0px;
    flex-wrap: wrap;
    display: inline-flex;
    align-items: left;
    flex-direction: row;
    gap: 10px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.darkGray};
    box-shadow: ${(props) => props.theme.shadow.box};
  }

  .tags {
    width: auto;
    color: ${(props) => props.theme.colors.blue};
  }

  .divider {
    position: relative;
    height: inherit;
    width: 5px;
    background: ${(props) => props.theme.colors.charcoal};
    border: none;
    border-radius: 5px;
    margin: 0px 0px 0px 0px;
    padding: 0px;
  }

  .date {
    color: ${(props) => props.theme.colors.tan};
    font-weight: lighter;
    width: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${(props) => props.theme.colors.tan};
    text-transform: uppercase;
    position: relative;

    &:not(.postTitle) {
      position: relative;
      display: inline-block;
      margin: 30px 0px 10px 0px;
      font-weight: bold;
      background-color: ${(props) => props.theme.colors.blue};
      border-radius: 10px;
      padding: 0px 15px 0px 15px;
      display: inline-block;

      /* TODO: fix horizontal sizing issue multiple lines */
      /* &:before {
        content: "";
        z-index: -1;
        left: -0.2em;
        display: inline-block;
        top: 0.45em;
        border-width: 0.45em;
        border-style: solid;
        border-radius: 5px;
        border-color: ${(props) => props.theme.colors.blue};
        position: absolute;
        width: 100%;
      } */
    }
  }

  h1 {
    font-size: clamp(1.9rem, -0.875rem + 8.333vw, 2.3rem);
  }

  h2 {
    font-size: clamp(1.8rem, -0.875rem + 8.333vw, 2rem);
  }

  h3 {
    font-size: clamp(1.7rem, -0.875rem + 8.333vw, 1.8rem);
  }

  h4 {
    font-size: clamp(1.4rem, -0.875rem + 8.333vw, 1.5rem);
  }

  h6 {
    font-size: clamp(1rem, -0.875rem + 8.333vw, 1.5rem);
    margin: 0px;
  }

  p {
    color: ${(props) => props.theme.colors.tan};
    font-size: 1.6rem;
    margin: 20px 0px 30px 0px;

    & code {
      background-color: ${(props) => props.theme.colors.darkGray};
      border-radius: 7px;
      padding: 2px 10px 2px 10px;
    }
  }

  a {
    color: ${(props) => props.theme.colors.tan};
    font-size: 1.6rem;
    font-weight: bold;
    text-decoration-color: ${(props) => props.theme.colors.orange};
  }

  ol,
  ul {
    color: ${(props) => props.theme.colors.tan};
    font-size: 1.6rem;
    margin-left: min(15%, 80px);
  }

  blockquote {
    position: relative;
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.tan};
    font-size: 1.6rem;
    padding: 20px 0% 30px 5%;
    display: inline-flex;
    max-width: 700px;

    &:before {
      content: "";
      border-left: 8px solid ${(props) => props.theme.colors.darkGray};
      border-radius: 5px;
      position: relative;
      display: inline-flex;
      margin-right: 30px;
    }
  }

  img:not(.mainImage) {
    border-radius: 20px;
    position: relative;
    width: 95%;
    max-width: 700px;
    margin: 20px 0 20px 0;
    box-shadow: ${(props) => props.theme.shadow.box};
  }


  
`;


const BottomStyle = styled.div`



* {
    margin: 0px;
    padding: 0px;
  }



position: relative;

 
  align-items: center;
  justify-content: center;





hr {
  position: relative;
 


 margin-top: clamp(70px, 10vh, 120px);
 margin-bottom: clamp(70px, 10vh, 120px);
 margin-left: auto;
 margin-right: auto;
  width: 40%;
  max-width: 500px;
  height: 10px;
  background-color: ${(props) => props.theme.colors.darkGray};
  border: none;
  border-radius: 20px;

}











`











export default function SinglePost() {
  const [postData, setPostData] = useState(null); // initial state is null
  const {slug} = useParams();

  const serializers = {
    types: {
      code: (props) => (
        <div>
          {console.log(props.node.code)}
          <pre data-language={props.node.language}>
            {Prism.highlight(
              props.node.code,
              Prism.languages.javascript,
              "javascript"
            )}
          </pre>
        </div>
      ),
    },
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `
            *[slug.current == "${slug}"]{
                title,
                _id,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                publishedAt,
                description,
                body,
                "tags": category->title
            }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  console.log(postData.tags);
  return (
   
      <main>
        {/* <Link to="/blog/"> Back to Blog</Link> */}
        <ArticleStyle>
        <article>
        
          <header>
            <div>
              <div>
                {/* <div>
                                <img src={urlFor(postData.authorImage).url()} alt={postData.name} />
                                <p >{postData.name}</p>
                            </div> */}
              </div>
            </div>

            <div className="imageContainer">
              <img
                className="mainImage"
                src={postData.mainImage.asset.url}
                alt={postData.title}
              ></img>

              <svg width="300" height="100" className="imageBorderLeft">
                <rect x="0" y="0" width="100%" height="100%" />
              </svg>

              <svg width="300" height="60" className="imageBorderRight">
                <rect x="0" y="0" width="100%" height="100%" />
              </svg>
            </div>

            <h1 className="postTitle">{postData.title}</h1>

            <div className="detailContainer">
              <h6 className="tags">#{postData.tags}</h6>
              <hr className="divider" />
              <h6 className="date">{postData.publishedAt}</h6>
            </div>

            <p className="description">{postData.description}</p>
          </header>

          <section>
            <div>
              <BlockContent
                blocks={postData.body}
                projectId="7vjlc1ik"
                dataset="production"
                serializers={serializers}
              />
            </div>
          </section>
        </article>
        </ArticleStyle>



          <BottomStyle>

          <hr />

        <div className="latestPosts">
          <LatestPosts />
        </div>

        <hr />

        </BottomStyle>



      </main>
    
  );
}
