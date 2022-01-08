import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 200px;
  padding-left: 100px;
  margin-left: auto;
  margin-right: auto;
  /* background: lightgray; */

  font-family: ${(props) => props.theme.fonts.primary};
  width: 40vw;

  .mainImage {
    width: clamp(200px, 70vw, 800px);
    height: clamp(100px, 20vh, 300px);
    object-fit: cover;
    border-radius: 20px;
  }

  .postTitle {
    font-size: 3rem;
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
        <Link to="/blog/"> Back to Blog</Link>
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
            <img
              className="mainImage"
              src={postData.mainImage.asset.url}
              alt={postData.title}
            />

            <h1 className="postTitle">{postData.title}</h1>
          </header>
          <div>
            <BlockContent
              blocks={postData.body}
              projectId="7vjlc1ik"
              dataset="production"
              serializers={serializers}
            />
          </div>
        </article>
      </main>
    </Wrapper>
  );
}
