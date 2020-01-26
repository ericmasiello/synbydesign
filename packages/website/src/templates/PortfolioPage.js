import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

function attributedImage(image, meta) {
    if (!image || !meta || (image.sizes.originalName !== meta.src)) {
        return null;
    }
    return {
        ...image,
        alt: meta.alt,
    };
}

function mapMetaToImageData(imageNodes) {
    return (meta) => {
        const matchingImage = meta && imageNodes.find(image => image.sizes.originalName === meta.src);
        return attributedImage(matchingImage, meta);
    }
}

function PortfolioPageTemplate(props) {
    console.log(props.data);
    const { data: { portfolio: { frontmatter: portfolio }, images, coverImage } } = props;

    const { title, images: metaImages , meta, svgSource, tags, coverImage: metaCoverImage } = portfolio;

    const attributedCoverImage = attributedImage(coverImage, metaCoverImage);
    const attributedImages = metaImages && metaImages.map(mapMetaToImageData(images.nodes));
    
    const img = attributedCoverImage && <Img sizes={attributedCoverImage.sizes} alt={attributedCoverImage.alt} />;
    const svg = svgSource && <div dangerouslySetInnerHTML={{ __html: svgSource }} />;


    // TODO: do work to marry up the image content w/ the alt attribute value
    return (
        <div>
            <h1>{portfolio.title}</h1>
            {img || svg}
            <h2>Images</h2>
            <ul>
            {attributedImages.map(img => (
                <li key={img.id}>
                    <Img sizes={img.sizes} alt={img.alt} />
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
                }
            }
        }

        images: allImageSharp(
            limit: 100
            filter: { sizes: { originalName: { regex: $images } } }
            sort: { order: ASC, fields: [id] }
        ) {
            nodes {
                id
                sizes(quality: 85) {
                    originalName
                    ...GatsbyImageSharpSizes
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