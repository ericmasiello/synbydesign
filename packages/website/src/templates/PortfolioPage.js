import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

function PortfolioPageTemplate(props) {
    console.log(props.data);
    const { data: { portfolio: { frontmatter: portfolio }, images, coverImage } } = props;

    // TODO: do work to marry up the image content w/ the alt attribute value
    return (
        <div>
            <h1>{portfolio.title}</h1>
            <Img sizes={coverImage.sizes} />
            <h2>Images</h2>
            <ul>
            {images.edges.map(({ node }) => (
                <li key={node.id}>
                    <Img sizes={node.sizes} />
                </li>
            ))}
            </ul>
        </div>
    )
}

export default PortfolioPageTemplate;

export const query = graphql`
    query PortfolioPageQuery($slug: String!, $images: String!, $coverImage: String!) {
        portfolio: markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                title
                meta {
                    highlightColor
                    stackDesign
                    thumb {
                        column
                        row
                    }
                }
                tags
                coverImage {
                  src
                  alt
                }
                images {
                  src
                  alt
                }
            }
        }

        images: allImageSharp(
            limit: 100
            filter: { sizes: { originalName: { regex: $images } } }
            sort: { order: ASC, fields: [id] }
        ) {
            edges {
                node {
                    id
                    sizes(quality: 85) {
                        originalName
                        ...GatsbyImageSharpSizes
                    }
                }
            }
        }

        coverImage: imageSharp(sizes: { originalName: { eq: $coverImage } }) {
            id
            sizes(quality: 85) {
                originalName
                ...GatsbyImageSharpSizes
            }
        }
    }
`;