import { useStaticQuery, graphql } from 'gatsby';

function useSocialLinks() {
  const socialQuery = useStaticQuery(graphql`
    query {
      allSocialYaml {
        nodes {
          name
          href
          icon
          title
        }
      }
    }
  `);

  const { allSocialYaml: { nodes } } = socialQuery;

  return nodes;
}

export default useSocialLinks;
