import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import { graphql } from "gatsby";

const CategoryTemplate = (props) => {
  console.log(props);
  const {
    data: { allMdx: { edges: posts } }
  } = props;
  const {
    pageContext: { category }
  } = props;
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`category / ${category}`} />
    </Layout>
  );
};

export const query = graphql`
    query MyQuery($category: String = "") {
        allMdx(
            sort: {fields: frontmatter___date, order: DESC}
            filter: {frontmatter: {category: {eq: $category}}}
        ) {
            edges {
                node {
                    id
                    excerpt
                    frontmatter {
                        title
                        slug
                        readTime
                        date(formatString: "MMMM Do YYYY")
                        category
                        author
                        image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default CategoryTemplate;
