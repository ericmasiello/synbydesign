const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    });

    /*
     * Creates a unique slug for each MarkdownRemark node
     * and attaches it as a queryable property from GraphQL.
     * Note: this has nothing to do with create a unique url end point
     * This simply attaches meta data to each node under the "fields"
     * object that you can query within GraphQL.
     *
     * node {
     *   frontmatter {
     *     name
     *   }
     *   html
     *   fields {
     *     slug
     *   }
     * }
     */
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise(resolve => {
    graphql(`
      query FetchData {
        portfolio: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data/portfolio/"}}) {
          edges {
            node {
              frontmatter {
                coverImage {
                  src
                }
                images {
                  src
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.portfolio.edges.forEach(({ node }) => {

        const images = `/${node.frontmatter.images.map(image => image.src).join('|')}/`;
        const coverImage = node.frontmatter.coverImage.src;

        createPage({
          path: node.fields.slug,
        //   layout: 'gallery', // this uses the layout template found in layouts/gallery.js
          component: path.resolve(`./src/templates/PortfolioPage.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
            images,
            coverImage,
          },
        });
      });
      resolve();
    });
  });
};
