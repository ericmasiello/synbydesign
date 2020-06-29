// const path = require('path');
// const { createFilePath } = require('gatsby-source-filesystem');

// function getMetaUsage(usage) {
//   return (image) => {
//     return image && image.meta && image.meta.usage && image.meta.usage.indexOf(usage) > -1;
//   };
// }

// // TODO: add code that conditionally loads this based off an env variable
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = createFilePath({
//       node,
//       getNode,
//       basePath: 'pages',
//     });

//     /*
//      * Creates a unique slug for each MarkdownRemark node
//      * and attaches it as a queryable property from GraphQL.
//      * Note: this has nothing to do with create a unique url end point
//      * This simply attaches meta data to each node under the "fields"
//      * object that you can query within GraphQL.
//      *
//      * node {
//      *   frontmatter {
//      *     name
//      *   }
//      *   html
//      *   fields {
//      *     slug
//      *   }
//      * }
//      */
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug,
//     });
//   }
// };

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;
//   return new Promise((resolve) => {
//     graphql(`
//       query FetchData {
//         portfolio: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/portfolio/" } }) {
//           edges {
//             node {
//               frontmatter {
//                 coverImage {
//                   src
//                 }
//                 images {
//                   src
//                   meta {
//                     usage
//                   }
//                 }
//               }
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `).then((result) => {
//       result.data.portfolio.edges.forEach(({ node }) => {
//         const imageFilesNames = `/${node.frontmatter.images.map((image) => image.src).join('|')}/`;
//         const coverImageFileName = node.frontmatter.coverImage.src;

//         const heroImage = node.frontmatter.images.find(getMetaUsage('hero'));
//         const backgroundImage = node.frontmatter.images.find(getMetaUsage('background'));

//         const heroImageFilesName = heroImage ? heroImage.src : '';
//         const backgroundImageFileName = backgroundImage ? backgroundImage.src : '';

//         createPage({
//           path: node.fields.slug,
//           //   layout: 'gallery', // this uses the layout template found in layouts/gallery.js
//           component: path.resolve(`./src/templates/PortfolioPage.js`),
//           context: {
//             // Data passed to context is available in page queries as GraphQL variables.
//             slug: node.fields.slug,
//             images: imageFilesNames,
//             coverImage: coverImageFileName,
//             heroImage: heroImageFilesName,
//             backgroundImage: backgroundImageFileName,
//           },
//         });
//       });
//       resolve();
//     });
//   });
// };
