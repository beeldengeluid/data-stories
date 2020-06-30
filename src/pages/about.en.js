import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Data Stories" />
      <article>
        <p>
          The{" "}
          <a
            href="https://mediasuite.clariah.nl/"
            target="_blank"
            rel="noreferrer"
          >
            CLARIAH Media Suite
          </a>{" "}
          gives researchers access to Dutch multimedia archives from, among
          others, Netherlands Institute for Sound and Vision, Eye Film
          Institute, DANS, Meertens Institute and National Library.
        </p>

        <p>
          The Media Suite tools offer the core functionalities needed for
          research with these data and to generate “data stories” based on
          interesting facts and figures that are extracted from these data.
        </p>

        <p>
          Media Suite Data Stories serves as a platform for presenting various
          types of such data stories. They can be part of a research topic that
          scholars are working on in the Media Suite, the outcome of a
          Data-A-Thon with students, or inspired by events in the news.
        </p>
      </article>
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
