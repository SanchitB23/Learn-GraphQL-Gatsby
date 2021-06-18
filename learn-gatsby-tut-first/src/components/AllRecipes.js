import React from "react"
import TagsList from "./TagsList"
import RecipeList from "./RecipeList"
import { graphql, useStaticQuery } from "gatsby"

const AllRecipes = () => {
  const { allContentfulRecipe: { nodes: recipes } } = useStaticQuery(query)
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipeList recipes={recipes} />
    </section>
  )
}

const query = graphql`
    {
        allContentfulRecipe(sort: {fields: title}) {
            nodes {
                title
                prepTime
                cookTime
                image {
                    gatsbyImageData
                }
                id
                content {
                    tags
                }
            }
        }
    }
`

export default AllRecipes
