import React from "react"
import setupTags from "../helpers/setupTags"
import { Link } from "gatsby"
import slugify from "slugify"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tags-container">
      <h4>Recipes</h4>
      <div className="tag-list">
        {
          newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return <Link to={`/tags/${slug}`} key={index}>{text} ({value})</Link>
          })
        }
      </div>
    </div>
  )
}

export default TagsList
