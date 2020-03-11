import { graphql, useStaticQuery } from 'gatsby'

const useImages = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1440) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return data
}

export default useImages