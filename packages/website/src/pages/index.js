import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import greeting from '@synbydesign/common-ui';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Portfolio {
      allPortfolioJson(sort: {order: ASC, fields: title}) {
        nodes {
          id
          title
          tags
          description
        }
      }
      resumeJson {
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
      }
    }
  `)

  console.log(data.resumeJson, data.allPortfolioJson)
  
  return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <pre>
          {JSON.stringify(data.resumeJson, null, 2)}
        </pre>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <button onClick={greeting}>Hello</button>
        <ul>
          {data.allPortfolioJson.nodes.map(item => (
            <li key={item.id}>
              <article>
                <h2>{item.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: item.description}} />
              </article>
            </li>
          ))}
        </ul>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }

export default IndexPage
