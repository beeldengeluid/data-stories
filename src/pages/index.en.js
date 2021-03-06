import { Link, graphql } from "gatsby"
/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All stories" />
      <div sx={{ mb: 5 }}>
        <p sx={{ fontSize: 3 }}>
          Take a look at the data stories and data visualisations resulting from
          the metadata of multimedia archive material from the collections
          maintained at leading Dutch heritage institutions.
        </p>
      </div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article sx={{ mb: 5 }} key={node.fields.slug}>
            <header sx={{ mb: 2 }}>
              <h3>
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
            <Link to={node.fields.slug}>read the full story</Link>
          </article>
        )
      })}
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { fields: { 
        langKey: { regex: "/(en|any)/" } 
        slug: {regex: "/^((?!appendix).)*$/"}
      } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug,
            langKey
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
