import React from "react"
import { graphql, Link } from "gatsby"
import { BsClock, BsClockHistory, BsPeople } from "react-icons/bs"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import slugify from "slugify"

const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    prepTime,
    servings,
    image,
    description: { description },
    content: {
      tags, instructions, ingredients, tools
    }
  } = data.contentfulRecipe
  const pathToImage = getImage(image)

  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage alt={title} image={pathToImage} className="about-img" />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>Servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags : {tags.map((tag, index) => {
                const slug = slugify(tag, { lower: true })
                return <Link to={`/tags/${slug}`} key={index}>
                  {tag}
                </Link>
              })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>Instructions</h4>
              {
                instructions.map((item, index) => {
                  return (
                    <div key={index} className="single-instruction">
                      <header>
                        <p>Step {index + 1}</p>
                        <div></div>
                      </header>
                      <p>{item}</p>
                    </div>
                  )
                })
              }
            </article>
            <article className="second-column">
              <div>
                <h4>Ingredients</h4>
                {
                  ingredients.map((item, index) => {
                    return (
                      <div key={index} className="single-ingredient">
                        <header>
                          <p>step {index + 1}</p>
                          <div></div>
                        </header>
                        <p>{item}</p>
                      </div>
                    )
                  })
                }
              </div>
              <div>
                <h4>Tools</h4>
                {
                  tools.map((item, index) => {
                    return (
                      <div key={index} className="single-tool">
                        <header>
                          <p>step {index + 1}</p>
                          <div></div>
                        </header>
                        <p>{item}</p>
                      </div>
                    )
                  })
                }
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
    query MyQuery($title: String = "")
    {
        contentfulRecipe(title
        :
        {
            eq: $title
        }
        )
        {
            title
            cookTime
            prepTime
            servings
            image
            {
                gatsbyImageData(layout
                :
                CONSTRAINED, placeholder
                :
                TRACED_SVG
                )
            }
            id
            description
            {
                description
            }
            content
            {
                tags
                instructions
                ingredients
                tools
            }
        }
    }
`
export default RecipeTemplate
