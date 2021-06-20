import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({ index, description, title, github, url, stack, image: { localFile: image }, slug }) => {
  return <article className="project">
    <GatsbyImage className="project-img" alt={title} image={getImage(image)} />
    <div className="project-info">
      <span className="project-number">0{index + 1}.</span>
      <Link to={`/projects/${slug}`} className="project-slug">
        <h3>{title}</h3>
      </Link>
      <p className="project-desc">{description}</p>
      <div className="project-stack">
        {stack.map((item) => {
          return <span key={item.id}>{item.title}</span>
        })}
      </div>
      <div className="project-links">
        <a href={github}>
          <FaGithubSquare className="project-icon" />
        </a>

        <a href={url}>
          <FaShareSquare className="project-icon" />
        </a>
      </div>
    </div>
  </article>
}

export default Project
