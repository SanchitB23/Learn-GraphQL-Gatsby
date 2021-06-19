import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaLongArrowAltRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Jobs = () => {
  const data = useStaticQuery(query)
  const { allStrapiJob: { nodes: jobs } } = data

  const [jobId, setJobId] = useState(0)
  const { company, position, date, desc } = jobs[jobId]

  return <section className="section jobs">
    <Title title="Experience" />
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((item, index) => {
          return <button className={`job-btn ${index === jobId ? "active-btn" : ""}`} key={index} onClick={() => {
            setJobId(index)
          }}>
            {item.company}
          </button>
        })}
      </div>
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">
          {date}
        </p>
        {desc.map((item) => {
          return <div key={item.id} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{item.name}</p>
          </div>
        })}
      </article>
    </div>
    <Link to="/about" className="btn center-btn">
      more info
    </Link>
  </section>
}

export const query = graphql`
    {
        allStrapiJob(sort: {fields: created_at, order: DESC}) {
            nodes {
                id
                desc {
                    name
                    id
                }
                date
                company
                position
            }
        }
    }
`

export default Jobs
