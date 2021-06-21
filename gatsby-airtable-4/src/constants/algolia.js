const airtableQuery = `
{
    allAirtable(filter: {table: {eq: "Projects"}}) {
      nodes {
        data {
          name
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          type
          date
        }
        id
      }
    }
  }
`

function pageToAlgoliaRecord({ id, data: { name, type, date, image } }) {
  return {
    id,
    name,
    type, date, image: { ...image.localFiles[0].childImageSharp.gatsbyImageData }
  }
}

const queries = [
  {
    query: airtableQuery,
    transformer: ({ data }) => {
      return data.allAirtable.nodes.map(pageToAlgoliaRecord)
    }
  }
]

module.exports = queries
