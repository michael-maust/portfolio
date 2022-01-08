import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import styled from "styled-components";


const Wrapper = styled.div`


padding-top: 200px;


`







const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const serializers = {
  types: {
    code: (props) => (
      
        <pre className="prettyprint">

        <code className="prettyprint">{props.node.code}</code>
        </pre>
    ),
  },
};

export default function SinglePost() {
  const [postData, setPostData] = useState(null);
  const {slug} = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          publishedAt,
          categories{
              category[]-> { title }
          },
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        {slug}
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);



//   console.log(postData.publishedAt);

//   const date = postData.publishedAt

//   const date1 =  Date.parse(date);
  
//   console.log(date1);



  if (!postData) return <div>Loading...</div>;


console.log(postData.categories)


  return (

<Wrapper>


    <article>



      <h2>{postData.title}</h2>
      <h2>{postData.publishedAt}</h2>
      <h2>{}</h2>



      <div>
     
        <h4>{postData.name}</h4>
      </div>

      <img src={urlFor(postData.mainImage).width(200).url()} alt="" />
      <div>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
          serializers={serializers}
        />
      </div>
    </article>






    </Wrapper>
  );
}
