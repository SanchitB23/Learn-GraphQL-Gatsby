import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const ProjectsPage = ({ data: { allStrapiProject: { nodes: projects } } }) => {
  return (
    <>
      <main>
        <section className="projects-page">
          <Projects title="All Projects" projects={projects} />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
    {
        allStrapiProject {
            nodes {
                description
                github
                id
                image {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                        }
                    }
                }
                url
                title
                slug
                stack {
                    title
                    id
                }
            }
            totalCount
        }
    }
`
export default ProjectsPage
