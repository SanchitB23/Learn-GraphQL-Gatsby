import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { graphql } from "gatsby";
import Posts from "../components/Posts";

const PostsPage = ({ data: { allMdx: { edges: posts } } }) => {
  return <Layout>
    <Hero />
    <Posts posts={posts} title="All posts" />
  </Layout>;
};


export const query = graphql`
    {
        allMdx(sort: {fields: frontmatter___image___internal___type, order: DESC}) {
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
export default PostsPage;
