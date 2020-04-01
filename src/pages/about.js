import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <p>
        The CLARIAH Media suite gives access to important Dutch multimedia
        archives, among others: DANS oral history interview collections, Eye
        Film Institute, Meertens Institute, National Library, Netherlands
        Institute for Sound and Vision, Open Images Project.
      </p>
      <p>
        The Media Suite tools offer the core functionalities needed for
        performing scholarly research tasks with audio-visual media and
        contextual collections. Tools available in this version of the Media
        Suite enable metadata inspection, exploratory browsing, search,
        visualization analysis (annotation support), and speech recognition.
      </p>
      <p>
        Anyone can access the Media Suite for public domain material.
        Researchers with a login at a Dutch university are allowed to explore
        the entire collections.
      </p>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
