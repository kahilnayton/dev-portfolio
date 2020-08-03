import React from 'react';

const Projects = ({ data }) => {
  console.log(data);
  return (
    <>
      <h2>Work in progress</h2>;
    </>
  );
};

export default Projects;

export const query = graphql`
  {
    prismic {
      allProjects {
        edges {
          node {
            _meta {
              uid
            }
            project_image
            project_link {
              ... on PRISMIC__ExternalLink {
                target
                url
              }
            }
            description
            project_gif
            title
          }
        }
      }
    }
  }
`;
