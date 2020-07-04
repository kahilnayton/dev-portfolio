import React from 'react';
// import { RichText } from 'prismic-reactjs';
import Layout from 'components/Layout';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
// import { linkResolver } from '../utils/linkResolver';

const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 10vh);

  padding-top: 10rem;
  grid-gap: 1.5rem;
`;

const ImageContainer = styled.div`
grid-row: 1 / 6;
grid-column: 1 / 6;
  img {
    height: 100%;
    object-fit: cover;
    display: block;
    width: 100%;
  }
`;

const Project = ({ data }) => {
  const project = data.prismic.allProjects.edges[0].node;
  console.log(project);

  return (
    <Layout>
      <ProjectCard>
        <ImageContainer>
          <img src={project.project_image.url} alt="" />
        </ImageContainer>
      </ProjectCard>
    </Layout>
  );
};

export default Project;

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
