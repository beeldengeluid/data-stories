import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
          languages {
            langs, 
            defaultLangKey
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}