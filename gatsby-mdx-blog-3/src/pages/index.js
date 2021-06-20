import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import { graphql } from "gatsby";

const IndexPage = ({ data: { allMdx: { edges: posts } } }) => {
  return <Layout>
    <Hero showPerson={true} />
    <Posts posts={posts} title="Recently Published" />
  </Layout>;
};

export const query = graphql`
    {
        allMdx(
            limit: 3
            sort: {fields: frontmatter___image___internal___type, order: DESC}
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
export default IndexPage;
