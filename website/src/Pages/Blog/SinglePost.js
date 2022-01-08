import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import pictureBorder from "../../media/pictureBorder.svg";

const Wrapper = styled.div`
  top: 200px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;

  font-family: ${(props) => props.theme.fonts.primary};

  margin-left: auto;
  margin-right: auto;
  /* background: lightgray; */

  font-family: ${(props) => props.theme.fonts.primary};

  article {
    width: clamp(150px, 80vw, 1000px);
    /* background: gray; */
    padding: 20px;
  }

  .imageContainer {
  
    position: relative;
    display: flex;
    width: clamp(100px, 80vw, 800px);
    height: clamp(200px, 20vh, 300px);
    
    
  }



svg {

  width: clamp(200px, 60%, 450px);
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
    font-size: 3rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.tan};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${(props) => props.theme.colors.orange};
    text-transform: uppercase;
  }

  p {
    color: ${(props) => props.theme.colors.tan};

    font-size: 1.3rem;
  }

  img {
    width: 500px;
  }
`;

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [postData, setPostData] = useState(null); // initial state is null
  const {slug} = useParams();

  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code> &lt;{props.node.code} </code>
        </pre>
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
                body,
                "name": author->name,
                "authorImage": author->image,
                "tags": category->title
            }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  console.log(postData.tags);
  return (
    <Wrapper>
      <main>
        {/* <Link to="/blog/"> Back to Blog</Link> */}
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

            <container className="imageContainer">
              <img
                className="mainImage"
                src={postData.mainImage.asset.url}
                alt={postData.title}
              ></img>

              <svg width="300" height="100" className="imageBorderLeft">
                  <rect x="0" y="0" width="100%" height="100%"  />
              </svg>

              <svg width="300" height="60" className="imageBorderRight">
                  <rect x="0" y="0" width="100%" height="100%"  />
              </svg>


            </container>

            <h1 className="postTitle">{postData.title}</h1>
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
      </main>
    </Wrapper>
  );
}
