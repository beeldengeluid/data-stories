import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Over Data Stories" />
      <article>
        <p>
          De{" "}
          <a
            href="https://mediasuite.clariah.nl/"
            target="_blank"
            rel="noreferrer"
          >
            CLARIAH Media Suite
          </a>{" "}
          geeft onderzoekers toegang tot Nederlandse multimediale archieven uit
          de collecties van onder andere het Nederlands Instituut voor Beeld en
          Geluid, Eye Film Institute, Meertens Instituut, DANS en de Koninklijke
          Bibliotheek.
        </p>

        <p>
          Media Suite Data Stories dient als platform voor het presenteren van
          verschillende soorten van dergelijke dataverhalen. Ze kunnen deel
          uitmaken van een onderzoek waar wetenschappers aan werken in de Media
          Suite, het resultaat zijn van een Data-A-Thon met studenten, of
          geïnspireerd zijn door gebeurtenissen in het nieuws.
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
