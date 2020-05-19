import React, { useMemo, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { VisuallyHidden, Button } from '@synbydesign/common-ui';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Header';
import Resume from '../components/resume/Resume';
import {
  PortfolioGrid,
  PortfolioGridImage,
  PortfolioGridSVG,
  PortfolioGridItem,
  PortfolioGridLink,
  PortfolioGridContent,
} from '../features/Portfolio/PortfolioGrid';
import { H } from '../components/Type';
import { mergePortfolioListWithCoverImage } from '../utils/portfolio';
import { limit } from '../utils/list';
import styles from './index.module.css';

const PAGE_SIZE = 7;
/*
 TODO:
  1. store currentPage in localStorage so that it can be retained when switching pages
  2. When clicking show more button, put focus on the next item loaded
*/

function IndexPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const data = useStaticQuery(graphql`
    query PortfolioLandingPage {
      allPortfolio: allMarkdownRemark(
        filter: { fields: { slug: { ne: "/resume/" } } }
        sort: { order: ASC, fields: frontmatter___order }
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            coverImage {
              src
              alt
            }
            meta {
              thumb {
                row
                column
                fit
                position
              }
            }
            svgSource
          }
        }
      }
      allCoverImages: allImageSharp(sort: { order: ASC, fields: fluid___originalName }) {
        nodes {
          id
          fluid(quality: 85) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
      resume: markdownRemark(fileAbsolutePath: { regex: "/data/resume/" }) {
        frontmatter {
          lead
          ownerName
          ownerTitle
          professionalExperience {
            accomplishments
            organization
            roles {
              title
              yearFrom
              yearTo
            }
          }
          relatedExperience {
            accomplishments
            meta
            role {
              title
              yearFrom
              yearTo
            }
            title
            website {
              url
            }
          }
          skills
          education {
            degree
            institution
            location
            year
          }
        }
      }
    }
  `);

  const { allCoverImages, allPortfolio } = data;

  const portfolioList = useMemo(() => mergePortfolioListWithCoverImage(allPortfolio.nodes, allCoverImages.nodes), [
    allPortfolio.nodes,
    allCoverImages.nodes,
  ]);

  const showMore = portfolioList.length / PAGE_SIZE > currentPage;

  return (
    <>
      <SEO title="Home" />
      <Header />
      <Layout>
        <VisuallyHidden as="h2" id="work-title">
          Portfolio Items
        </VisuallyHidden>
        <PortfolioGrid id="work" aria-describedby="work-title">
          {portfolioList.filter(limit(PAGE_SIZE * currentPage)).map((item) => {
            const {
              frontmatter: { title, coverImage, svgSource, meta },
              id,
              fields,
            } = item;

            const gridRow = meta?.thumb?.row || undefined;
            const gridColumn = meta?.thumb?.column || undefined;
            const imageFit = meta?.thumb?.fit || undefined;
            const imagePosition = meta?.thumb?.position || undefined;
            return (
              <PortfolioGridItem key={id} row={gridRow} column={gridColumn}>
                <PortfolioGridLink to={fields.slug}>
                  {svgSource ? (
                    <PortfolioGridSVG src={svgSource} />
                  ) : (
                    coverImage.fluid && (
                      <PortfolioGridImage
                        fluid={coverImage.fluid}
                        alt={coverImage.alt}
                        fit={imageFit}
                        position={imagePosition}
                      />
                    )
                  )}
                  <PortfolioGridContent>
                    <H as="h3" level={5} upper bold>
                      {title}
                    </H>
                  </PortfolioGridContent>
                </PortfolioGridLink>
              </PortfolioGridItem>
            );
          })}
        </PortfolioGrid>
        {showMore && (
          <Button className={styles.moreButton} onClick={() => setCurrentPage(currentPage + 1)}>
            Show More
          </Button>
        )}
        <VisuallyHidden as="h2" id="resume-title">
          Resume
        </VisuallyHidden>
        <Resume id="resume" {...data.resume.frontmatter} />
      </Layout>
    </>
  );
}

export default IndexPage;
