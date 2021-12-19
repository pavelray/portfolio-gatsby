import { graphql, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import { portfolio, projects } from "../../styles/projects.module.css"

export default function Projects({ data }) {
  const projectData = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={projects}>
          {projectData.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} id={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectQuery {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          thumb {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
