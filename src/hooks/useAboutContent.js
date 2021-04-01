import { useStaticQuery, graphql } from 'gatsby';

const useAboutContent = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { slug: { eq: "about-me" } }) {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          slug
        }
      }
    }
  `);

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return {
    ...frontmatter,
    content: html,
  };
};

export default useAboutContent;
