import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { VisuallyHidden } from '@synbydesign/common-ui';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Header';
import Resume from '../components/resume/Resume';

function IndexPage() {
  const data = useStaticQuery(graphql`
    query PortfolioLandingPage {
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

  return (
    <>
      <SEO title="Home" />
      <Header />
      <Layout>
        <VisuallyHidden as="h2" id="resume-title">
          Resume
        </VisuallyHidden>
        <Resume id="resume" {...data.resume.frontmatter} />
      </Layout>
    </>
  );
}

export default IndexPage;
