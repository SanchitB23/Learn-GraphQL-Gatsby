import React from "react"
import { graphql } from "gatsby"

const ProjectTemplate = ({ pageContext: { title }, data }) => {
  return (
    <>
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{data.strapiProject.description}</p>
      </main>
    </>
  )
}

export const query = graphql`
    query MyQuery($title: String = "") {
        strapiProject(title: {eq: $title}) {
            description
            title
            image {
                localFile {
                    publicURL
                }
            }
        }
    }
`

export default ProjectTemplate
