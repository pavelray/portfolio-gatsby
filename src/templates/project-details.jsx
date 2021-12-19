import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { details, html, featured } from "../styles/project-details.module.css"
import { graphql } from "gatsby"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          <Img fluid={featuredImg.childrenImageSharp[0].fluid} />
        </div>
        <div className={html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        stack
        title
        featuredImg {
          childrenImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
