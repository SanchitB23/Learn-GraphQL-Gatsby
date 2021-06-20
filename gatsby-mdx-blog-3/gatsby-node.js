const path = require("path");

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
          allMdx {
              edges {
                  node {
                      frontmatter {
                          slug
                      }
                  }
              }
          }
          categories :   allMdx {
    distinct(field: frontmatter___category)
  }
      }
      
  `);
  result.data.allMdx.edges.forEach(({ node: { frontmatter: { slug } } }) => {
    createPage({
      path: `/posts/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug
      }
    });
  });

  result.data.categories.distinct.forEach((category) => {
    createPage({
      path: `/${category}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category
      }
    });
  });
};
