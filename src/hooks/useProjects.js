import { useStaticQuery, graphql } from 'gatsby';

function useProjects() {
  const projectsQuery = useStaticQuery(graphql`
    query {
      allProjectsYaml(sort: { fields: [title], order: ASC }) {
        edges {
          node {
            description
            id
            language
            packageName
            role
            title
            subtitle
            url
          }
        }
      }
    }
  `);

  const { allProjectsYaml: { edges } } = projectsQuery;

  return edges.map((edge) => edge.node);
}

export default useProjects;
