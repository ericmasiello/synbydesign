import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

function PortfolioPageTemplate(props) {
    console.log(props.data);

    // TODO: do work to marry up the image content w/ the alt attribute value
    return (
        <div>
            This is the portfolio page
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