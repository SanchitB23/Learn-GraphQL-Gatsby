import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const FetchData = () => {
  const data = useStaticQuery(graphql`
      {
          site {
              siteMetadata {
                  simpleData
                  description
                  person {
                      age
                      name
                  }
                  complexData {
                      age
                      name
                  }
                  author
                  title
              }
          }
      }
  `)
  const siteMetadata = data.site.siteMetadata
  return <div>
    <h2>{siteMetadata.person.name}</h2>
    <div>
      {siteMetadata.complexData.map((item, index) => {
        return <p key={index}>{item.name} : {item.age}</p>
      })}
    </div>
  </div>
}

export default FetchData
