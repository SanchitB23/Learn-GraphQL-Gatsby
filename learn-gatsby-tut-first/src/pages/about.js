import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import RecipeList from "../components/RecipeList"

const About = ({ data: { allContentfulRecipe: { nodes: recipes } } }) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur consequatur culpa cumque cupiditate
              dolore error est, fugit id minima nesciunt nostrum officiis pariatur, praesentium provident repellendus
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores error exercitationem iure labore
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage src="../assets/images/about.jpeg" alt="About Img" className="about-img"
                       placeholder="traced-svg" />
        </section>
        <section className="featured-recipes">
          <h5>Look At This Awesomesouce!</h5>
          <RecipeList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
    {
        allContentfulRecipe(
            sort: {fields: title, order: ASC}
            filter: {featured: {eq: true}}
        ) {
            nodes {
                title
                prepTime
                cookTime
                image {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                }
                id
            }
        }
    }
`

export default About
