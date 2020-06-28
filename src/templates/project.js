import React from 'react';
// import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
// import { linkResolver } from '../utils/linkResolver';

export const query = graphql`
  query BlogPost($uid: String) {
    prismic {
      allProjects(uid: $uid) {
        edges {
          node {
            title
            release_date
            project_link {
              ... on PRISMIC__ExternalLink {
                url
              }
            }
            description
            project_image
          }
        }
      }
    }
  }
`;


const Project = props => {
  console.log(props)

  return (
    <div>
      hello
    </div>
  );
};

export default Project;
