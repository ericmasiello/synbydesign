import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { VisuallyHidden } from '../components/VisuallyHidden';
// @ts-ignore
import Layout from '../components/layout';
// @ts-ignore
import SEO from '../components/seo';
import { Header } from '../components/Header';
// @ts-ignore
import Footer from '../components/Footer';
// @ts-ignore
import Resume from '../components/resume/Resume';
// @ts-ignore
import AboutMe from '../components/AboutMe';

function IndexPage() {
  const data = useStaticQuery(graphql`
    query PortfolioLandingPage {
      aboutme: markdownRemark(fileAbsolutePath: { regex: "/data/aboutme/" }) {
        html
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
          talks {
            title
            description
            url
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
        <AboutMe id="about-me" content={data.aboutme.html} />
        <VisuallyHidden component="h2" id="resume-title">
          Resume
        </VisuallyHidden>

        <Resume id="resume" {...data.resume.frontmatter} />
      </Layout>
      <Footer />
    </>
  );
}

export default IndexPage;
