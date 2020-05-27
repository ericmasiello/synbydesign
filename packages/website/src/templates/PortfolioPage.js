import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import { attributedImage, mapMetaToImageData } from '../utils/portfolio';

function PortfolioPageTemplate(props) {
  const {
    data: {
      portfolio: { frontmatter: portfolio },
      images,
      coverImage,
    },
  } = props;

  const { title, images: metaImages, svgSource, coverImage: metaCoverImage } = portfolio;

  const attributedCoverImage = attributedImage(coverImage, metaCoverImage);
  const attributedOtherImages = metaImages && metaImages.map(mapMetaToImageData(images.nodes));

  const img = attributedCoverImage && <Img fluid={attributedCoverImage.fluid} alt={attributedCoverImage.alt} />;
  const svg = svgSource && <div dangerouslySetInnerHTML={{ __html: svgSource }} />;

  return (
    <div>
      <SEO title={portfolio.title} />
      <h1>{title}</h1>
      {img || svg}
      <h2>Images</h2>
      <ul>
        {attributedOtherImages.map((img) => (
          <li key={img.id}>
            <Img fluid={img.fluid} alt={img.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioPageTemplate;

export const query = graphql`
  query PortfolioPageQuery(
    $slug: String!
    $images: String!
    $coverImage: String!
    $heroImage: String!
    $backgroundImage: String!
  ) {
    portfolio: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        meta {
          highlightColor
          thumb {
            column
            row
          }
        }
        svgSource
        tags
        coverImage {
          src
          alt
        }
        images {
          src
          alt
          meta {
            usage
          }
        }
      }
    }

    images: allImageSharp(
      limit: 100
      filter: { fluid: { originalName: { regex: $images } } }
      sort: { order: ASC, fields: fluid___originalName }
    ) {
      nodes {
        id
        fluid(quality: 85) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }

    coverImage: imageSharp(fluid: { originalName: { eq: $coverImage } }) {
      id
      fluid(quality: 85) {
        originalName
        ...GatsbyImageSharpFluid
      }
    }

    heroImage: imageSharp(fluid: { originalName: { eq: $heroImage } }) {
      id
      fluid(quality: 85) {
        originalName
        ...GatsbyImageSharpFluid
      }
    }

    backgroundImage: imageSharp(fluid: { originalName: { eq: $backgroundImage } }) {
      id
      fluid(quality: 85) {
        originalName
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
