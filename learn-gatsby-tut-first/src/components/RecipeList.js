import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const RecipeList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {
        recipes.map(({ title, id, image, prepTime, cookTime }) => {
          const pathToImg = getImage(image)
          const slug = slugify(title, { lower: true })
          return (
            <Link to={`/${slug}`} key={id} className="recipe">
              <GatsbyImage alt={title} image={pathToImg} className="recipe-img" />
              <h5>{title}</h5>
              <p>Prep: {prepTime}min | Cook : {cookTime}min </p>
            </Link>
          )
        })
      }
    </div>
  )
}

export default RecipeList
