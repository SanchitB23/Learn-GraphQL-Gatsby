import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects
} from '../components'

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
    customers: { nodes: customers }
  } = data
  return (
    <Layout>
      <Hero />
      <About />
      <GridProjects projects={projects} title='Latest Projects' />
      <Survey />
      <Slider customers={customers} />
    </Layout>
  )
}

export const query = graphql`
    {
        allAirtable(
            filter: {table: {eq: "Projects"}}
            limit: 4
            sort: {fields: data___date, order: DESC}
        ) {
            nodes {
                id
                data {
                    date
                    name
                    type
                    image {
                        localFiles {
                            childImageSharp {
                                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
                            }
                        }
                    }
                }
            }
        }
        customers: allAirtable(filter: {table: {eq: "Customers"}}) {
            nodes {
                data {
                    name
                    quote
                    title
                    image {
                        localFiles {
                            childImageSharp {
                                gatsbyImageData(placeholder: TRACED_SVG, width: 150, height: 150, layout: FIXED)
                            }
                        }
                    }
                }
                id
            }
        }
    }
`

export default HomePage
