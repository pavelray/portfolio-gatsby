import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
  const data = useStaticQuery(graphql`query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)

  const {title} = data.site.siteMetadata;

  return (
    <nav>
      <h1 className="title">{title}</h1>
      <div className="links">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
      </div>
    </nav>
  )
}
